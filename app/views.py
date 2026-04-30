from app import app
from flask import render_template, url_for, request

@app.route('/', methods=["GET", "POST"])
def homepage():
    context = {}
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        print('POST', email, password)
        context.update({'email': email, 'password': password})
    return render_template('index.html', context=context)

@app.route('/login/', methods=["GET", "POST"])
def login_page():
    context = {}
    if request.method == "GET":
        research = request.args.get('research')
        context.update({'research': research})
    return render_template('login_page.html', context=context)