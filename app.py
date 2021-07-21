from flask import Flask, request, render_template, url_for, jsonify
# from flask_jwt_extended import *
# from dao import *

app =  Flask(__name__)

app.config.update(
    DEBUG = True,
    JWT_SECRET_KEY = "seoul"
)

# jwt = JWTManager(app)

@app.route("/", methods=["GET"])
def index_view():
    return render_template("index.html")

@app.route("/iframe01", methods=["POST"])
def iframe01():
    return render_template("index.html")

@app.route("/iframe02", methods=["POST"])
def iframe02():
    return render_template("index.html")

@app.route("/iframe03", methods=["POST"])
def iframe03():
    return render_template("index.html")

@app.route("/iframe04", methods=["POST"])
def iframe04():
    return render_template("index.html")

# test
@app.route("/a", methods=["GET"])
def index_view2():
    return render_template("a.html")

@app.route("/showIframe", methods=["GET"])
def iframe():
    data =''
    return data

@app.route("/login", methods=["GET"])
def login():
    return render_template("login.html")

# @app.route("/login_proc", methods=["POST"])
# def login_proc():

#     user_id = request.form.get("user_id")
#     dao = MemberDAO()

#     print("user_id, dao 전달 확인---------",user_id)

#     if user_id == dao.memid(request.form.get("user_pw")):
#         print("진짜로그인 성공")
#         return jsonify(
#             result = "200",
#             access_token = create_access_token(identity = user_id)
#         )
        
#     else:
#         print("가짜로그인 성공")
#         return jsonify(result = "400")

if __name__=="__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
