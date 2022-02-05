

function SpeakVoice(text){
    
    var txtInput = text;
    var voiceList = document.querySelector('#voiceList');
    var btnSpeak = document.querySelector('#btnSpeak');
    var synth = window.speechSynthesis;
    var voices = [];
    PopulateVoices();
    if(speechSynthesis !== undefined){
        speechSynthesis.onvoiceschanged = PopulateVoices;
    }
    function say(){
        
        var toSpeak = new SpeechSynthesisUtterance(txtInput);
        var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
        voices.forEach((voice)=>{
            if(voice.name === selectedVoiceName){
                toSpeak.voice = voice;
            }
        });
        synth.speak(toSpeak);
        
    };
    
    function PopulateVoices(){
        voices = synth.getVoices();
        var selectedIndex = voiceList.selectedIndex < 0 ? 55 : voiceList.selectedIndex;
        voiceList.innerHTML = '';
        voices.forEach((voice)=>{
            var listItem = document.createElement('option');
            listItem.textContent = voice.name;
            listItem.setAttribute('data-lang', voice.lang);
            listItem.setAttribute('data-name', voice.name);
            voiceList.appendChild(listItem);
        });

        voiceList.selectedIndex = selectedIndex;
    }
    PopulateVoices()
    say()
    
}
/////////////// Spech to Text/////////////


        const texts = document.querySelector(".texts");

        window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;

        let p = document.createElement("p");

        recognition.addEventListener("result", (e) => {
        texts.appendChild(p);
        const text = Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");

        p.innerText = text;
        if (e.results[0].isFinal) {
            document.getElementById("myDiv").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.5)), url('./static/images/ai.gif')";

            if (text.includes("hi assistant")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Starting";
            SpeakVoice("Starting")
            texts.appendChild(p);
            }
            
            if (text.includes("how are you")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "I am fine";
            SpeakVoice(p.innerText)
            texts.appendChild(p);
            }
            if (text.includes("tell me about him")) {
                p = document.createElement("p");
                p.classList.add("replay");
                p.innerText = "Rugved Chavan, is pursuing B.Tech in Computer and Communication Engineering from Manipal University Jaipur. ";
                texts.appendChild(p);
                SpeakVoice(p.innerText)
                p.innerText = 'He has several design patents (published) to his credit. He has completed his internships in major companies like Mahindra & Mahindra, and Bristlecone Inc. '
                texts.appendChild(p);
                SpeakVoice(p.innerText)
                p.innerText = 'He has expertise in multiple interdisciplinary fields such as 3D design, web development, and automobiles. '
                texts.appendChild(p);
                SpeakVoice(p.innerText)
                p.innerText =  'His research interest includes but not limited to data science, IoT, IIoT, Robotics, Machine learning and Artificial intelligence etc.'
                texts.appendChild(p);
                SpeakVoice(p.innerText)
                 var delayInMilliseconds = 5000; //1 second
                 setTimeout(function() {}, delayInMilliseconds);
                p.innerText = 'Rugved Chavan, is pursuing B.Tech in Computer and Communication Engineering from Manipal University Jaipur. He has several design patents (published) to his credit. He has completed his internships in major companies like Mahindra & Mahindra, and Bristlecone Inc. He has expertise in multiple interdisciplinary fields such as 3D design, web development, and automobiles. His research interest includes but not limited to data science, IoT, IIoT, Robotics, Machine learning and Artificial intelligence etc.'
                texts.appendChild(p);
                }
            if (
            text.includes("what's your name") ||
            text.includes("what is your name")
            ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "My Name is Cifar";
            SpeakVoice("My Name is Cifar")
            texts.appendChild(p);
            }
            if (text.includes("open my YouTube")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "opening youtube channel";
            SpeakVoice(p.innerText)
            texts.appendChild(p);
            console.log("opening youtube");
            window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
            }
            p = document.createElement("p");
        }
        else{
            document.getElementById("myDiv").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.5)),url('./static/images/ai-wave.gif')";
        }
        });

        recognition.addEventListener("end", () => {
        recognition.start();
        });

        recognition.start();