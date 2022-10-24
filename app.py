import os
from flask import Flask, render_template
from flask import request
from transformers import pipeline
from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired
from flask_wtf.csrf import CSRFProtect

class ContextForm(FlaskForm):
    context = TextAreaField("Context", validators=[DataRequired()])

csrf = CSRFProtect()
def create_app():
    app = Flask(__name__)
    csrf.init_app(app)
    app.config['SECRET_KEY'] = os.urandom(24)
    return app

app = create_app()
model_name = "deepset/electra-base-squad2"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods = ["POST"])
def predict():
    context_form = ContextForm()
    context = context_form.context.data

    if context_form.validate_on_submit():
        print(context_form.data)
    question = request.form['question']
    if question:
        print(question)
    model = pipeline('question-answering', model=model_name, tokenizer=model_name)
    QA_input = { 
        'question': question,
        'context': context  
        }   
    predicted_answer = model(QA_input)
    print(predicted_answer)
    return render_template('predict.html', context=context, question=question, predicted_answer=predicted_answer)

if __name__ == '__main__':
    app.run(debug=True)