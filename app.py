import os
from flask import Flask, render_template, request, json
from transformers import pipeline
from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired
from flask_wtf.csrf import CSRFProtect

class ContextForm(FlaskForm):
    context = TextAreaField("Context", validators=[DataRequired()])

csrf = CSRFProtect()

def create_app():
    model_name = "deepset/electra-base-squad2"
    model = pipeline('question-answering', model=model_name, tokenizer=model_name)
    app = Flask(__name__)
    csrf.init_app(app)
    app.config['SECRET_KEY'] = os.urandom(24)
    return app, model

app,model = create_app()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods = ["POST"])
def predict():
    context_form = ContextForm()
    context = context_form.context.data
    question = request.form['question']

    if question and context :
        QA_input = {
            'question': question,
            'context': context
            }
        prediction = model(QA_input)
        predicted_answer = prediction.get('answer')
        prediction_object = json.dumps([{'start':prediction.get('start'),'end':prediction.get('end')}])
        print(prediction_object)
        return render_template('index.html', context=context, question=question, predicted_answer=predicted_answer,prediction_object=prediction_object)
    else:
        return render_template('index.html',predicted_answer="what the heck are you willing to get an answer for?")
    

if __name__ == '__main__':
    app.run(debug=True)