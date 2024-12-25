from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)

# Load your trained model
model = load_model("CNN_model.keras")

# List of all 38 plant disease classes
classes = [
    "Apple Scab", "Apple Black Rot", "Apple Cedar Rust", "Apple Healthy",
    "Blueberry Healthy", "Cherry Powdery Mildew", "Cherry Healthy",
    "Corn Cercospora Leaf Spot", "Corn Common Rust", "Corn Northern Leaf Blight", "Corn Healthy",
    "Grape Black Rot", "Grape Esca (Black Measles)", "Grape Leaf Blight (Isariopsis Leaf Spot)", "Grape Healthy",
    "Orange Huanglongbing (Citrus Greening)",
    "Peach Bacterial Spot", "Peach Healthy",
    "Pepper Bell Bacterial Spot", "Pepper Bell Healthy",
    "Potato Early Blight", "Potato Late Blight", "Potato Healthy",
    "Raspberry Healthy",
    "Soybean Healthy",
    "Squash Powdery Mildew",
    "Strawberry Leaf Scorch", "Strawberry Healthy",
    "Tomato Bacterial Spot", "Tomato Early Blight", "Tomato Late Blight", "Tomato Leaf Mold",
    "Tomato Septoria Leaf Spot", "Tomato Spider Mites (Two-Spotted Spider Mite)", "Tomato Target Spot",
    "Tomato Mosaic Virus", "Tomato Yellow Leaf Curl Virus", "Tomato Healthy"
]

# Load curing suggestions from text file
def load_curing_suggestions():
    suggestions = {}
    with open("disease_cures.txt", "r") as file:
        for line in file:
            if ": " in line:
                disease, suggestion = line.strip().split(": ", 1)
                suggestions[disease] = suggestion
    return suggestions

curing_suggestions = load_curing_suggestions()

# Define image preprocessing function
def preprocess_image(image, target_size=(128, 128)):
    image = image.resize(target_size)
    image = np.array(image) / 255.0  # Normalize image
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

@app.route('/result', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']

    try:
        # Open and preprocess the image
        image = Image.open(file)
        processed_image = preprocess_image(image)

        # Make prediction
        predictions = model.predict(processed_image)
        predicted_class = np.argmax(predictions, axis=1)[0]

        # Get curing suggestion for the predicted disease
        disease_name = classes[predicted_class]
        suggestion = curing_suggestions.get(disease_name, "No suggestion available.")

        # Create response with predicted class and confidence
        result = {
            "class": disease_name,
            "confidence": float(np.max(predictions)),
            "suggestion": suggestion
        }
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
