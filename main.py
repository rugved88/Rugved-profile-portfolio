import gtts
from playsound import playsound

# play the audio file
def play(message):
    # make request to google to get synthesis
    tts = gtts.gTTS(message)
    # save the audio file
    tts.save("hello.mp3")
    playsound("hello.mp3")