from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app) 


model = pickle.load(open("model/career_role_ensemble_model.pkl", "rb"))
preprocessor = pickle.load(open("model/preprocessor.pkl", "rb"))
feature_selector = pickle.load(open("model/feature_selector.pkl", "rb"))
label_encoder = pickle.load(open("model/label_encoder.pkl", "rb"))

skill_columns = [
    "Database Fundamentals", "Computer Architecture", "Distributed Computing Systems",
    "Cyber Security", "Networking", "Software Development", "Development", "Programming Skills",
    "Project Management", "Computer Forensics Fundamentals", "Technical Communication", "AI ML",
    "Software Engineering", "Business Analysis", "Communication skills", "Data Science",
    "Troubleshooting skills", "Graphics Designing"
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)

        input_data = [data.get(col, 0) for col in skill_columns]
        input_array = np.array(input_data).reshape(1, -1)

        processed_data = preprocessor.transform(input_array)
        selected_data = feature_selector.transform(processed_data)

        prediction = model.predict(selected_data)
        predicted_label = label_encoder.inverse_transform(prediction)[0]

        probabilities = model.predict_proba(selected_data)[0]
        suggested_roles = [
            label_encoder.inverse_transform([i])[0]
            for i, prob in enumerate(probabilities)
            if prob > 0.05 and i != prediction[0]
        ]

        return jsonify({
            "predicted_role": predicted_label,
            "suggested_roles": suggested_roles
        })

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
