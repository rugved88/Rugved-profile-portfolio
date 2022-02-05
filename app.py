from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

# main driver function
if __name__ == '__main__':
    app.run(debug=True, threaded=True)