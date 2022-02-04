from flask import Flask, render_template, request, redirect
import speech_recognition as sr
import main
import speech_recognition as sr
r = sr.Recognizer()

def speechtotext(file):
    hellow=sr.AudioFile(file)
    with hellow as source:
        audio = r.record(source)
    try:
        s = r.recognize_google(audio)
        print("Text: "+s)
        return s
    except Exception as e:
        print("Exception: "+str(e))
        return 'error'
text = speechtotext(file ='/Users/rugvedchavan/Desktop/Project/Rugved-profile/187226f7-3db6-4ab3-b869-4ad2da38906a.wav')
print(text)

app = Flask(__name__)

@app.route('/hell')
def hello_world():
    message = "Rugved Chavan, is pursuing B.Tech in Computer and Communication Engineering from Manipal University Jaipur. He has several design patents (published) to his credit. He has completed his internships in major companies like Mahindra & Mahindra, and Bristlecone Inc. He has expertise in multiple interdisciplinary fields such as 3D design, web development, and automobiles. His research interest includes but not limited to data science, IoT, IIoT, Robotics, Machine learning and Artificial intelligence etc. "
    message = 'hi'
    main.play(message)
    return render_template('index1.html')

@app.route("/", methods=["GET", "POST"])
def index():
    transcript = ""
    if request.method == "POST":
        print("FORM DATA RECEIVED")

        if "file" not in request.files:
            return redirect(request.url)

        file = request.files["file"]
        if file.filename == "":
            return redirect(request.url)

        if file:
            recognizer = sr.Recognizer()
            audioFile = sr.AudioFile(file)
            with audioFile as source:
                data = recognizer.record(source)
            transcript = recognizer.recognize_google(data, key=None)

    return render_template('index.html', transcript=transcript)

# @app.route('/convert-speech', methods=['POST'])
# def translate_text():
#     audio_input = request.files['file']
#     response = speechAPI.get_translation(audio_input)
#     return render_template('index1.html', transcript=transcript)

# main driver function
if __name__ == '__main__':
    app.run(debug=True, threaded=True)