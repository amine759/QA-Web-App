# General Question Answering web application
##### Model used : deepset/electra-base-squad2
##### Extractive QA : predicting answer from a given context
## To run : 
First, make sure heroku CLI is installed in your device where the model is deployed [heroku.com](https://devcenter.heroku.com/articles/getting-started-with-python)

```shell
git clone https://github.com/amine759/QA-Web-App.git
cd QA-Web-App/
```
### To run the app with heroku :
```shell 
heroku create
git push heroku main
```
The app contains in the root directory a Procfile like this : 
```shell 
web: python app.py
```
This way you declare what command should be executed to start the app.
if you are running on windows you need an additionnal Procfile.windows for details (cz I'm lazy) checkout [heroku documentation](https://devcenter.heroku.com/articles/getting-started-with-python#define-a-procfile)

Activate virtual environment and install dependencies : 
```shell
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
Now you must be ready to run the app locally : 
```shell 
heroku local
```