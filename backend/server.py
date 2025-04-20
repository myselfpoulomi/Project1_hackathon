from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load necessary objects
model = pickle.load(open("career_role_ensemble_model.pkl", "rb"))
preprocessor = pickle.load(open("preprocessor.pkl", "rb"))
feature_selector = pickle.load(open("feature_selector.pkl", "rb"))
label_encoder = pickle.load(open("label_encoder.pkl", "rb"))

# Route: Home page (Form for skill input)
# Template used: hometest.html
@app.route('/')
def career():
    return render_template("hometest.html")  #  HTML for user skill input

# Route: Prediction result
# Template used: testafter.html
@app.route('/predict', methods=['POST', 'GET'])
def result():
    if request.method == 'POST':
        result = request.form
        form_data = result.to_dict(flat=True)
        print("Form Data:", form_data)

        # Convert to array
        input_values = list(form_data.values())
        input_array = np.array(input_values).reshape(1, -1)
        print("Raw Input Array:", input_array)

        # Step 1: Preprocess
        processed_input = preprocessor.transform(input_array)

        # Step 2: Feature Selection
        selected_input = feature_selector.transform(processed_input)

        # Step 3: Prediction
        prediction = model.predict(selected_input)
        prediction_proba = model.predict_proba(selected_input)

        # Decode predicted label
        predicted_role = label_encoder.inverse_transform(prediction)[0]
        print("Predicted Role:", predicted_role)

        # Probability threshold logic to suggest similar roles
        threshold = 0.05
        prediction_proba = prediction_proba[0]
        suggested_roles = {}
        idx = 0

        for i, prob in enumerate(prediction_proba):
            role = label_encoder.inverse_transform([i])[0]
            if prob > threshold and role != predicted_role:
                suggested_roles[idx] = role
                idx += 1

        return render_template(
            "testafter.html",  #  HTML for showing results
            final_res=suggested_roles,
            job0=predicted_role,
            job_dict=None
        )

if __name__ == '__main__':
    app.run(debug=True)
