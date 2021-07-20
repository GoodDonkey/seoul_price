from flask import Flask, request, render_template, url_for, redirect

app =  Flask(__name__)

@app.route("/", methods=["GET"])
def index_view():
    return render_template("index.html")


@app.route("/login", methods=["GET"])
def login():
    return render_template("login.html")

@app.route("/login", methods=["GET", "POST"])
def login_check():
    user_id = request.form.get('id')
    user_pw = request.form.get('pw')
    print("받은id는------------------",user_id)
    print("받은pw는------------------",user_pw)
    if user_id == 'donkey' and user_pw == 'ehdrl123':
        return redirect(url_for('index_view'))
    return render_template("login.html")


@app.route("/showContents01", methods=["GET", "POST"])
def showContents01():
    return 'anydata'

@app.route("/showIframe", methods=["GET"])
def iframe():
    data =''
    return data
    
if __name__=="__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
