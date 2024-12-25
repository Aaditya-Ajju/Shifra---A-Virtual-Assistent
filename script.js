let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("what's your name")) {
        speak("My name is Shifra, I am your AI assistant.");
    } else if (message.includes("how are you")) {
        speak("I'm just a program, but thanks for asking! How can I assist you today?");
    } else if (message.includes("what's the time")) {
        let now = new Date();
        speak(`The time is ${now.getHours()}:${now.getMinutes()}`);
    } else if (message.includes("what's the date")) {
        let now = new Date();
        speak(`Today is ${now.toDateString()}`);
    } else if (message.includes("tell me a joke")) {
        speak("Why don't scientists trust atoms? Because they make up everything!");
    } else if (message.includes("who created you")) {
        speak("I was created by a Aaditya!");
    } else if (message.includes("what can you do")) {
        speak("I can assist you with various tasks, like telling the time, date, and sharing jokes!");
    } else if (message.includes("give me a quote")) {
        speak("The only way to do great work is to love what you do. - Steve Jobs");
    } else if (message.includes("tell me about yourself")) {
        speak("I am Shifra, your virtual assistant, designed by aaditya");
    } else if (message.includes("what's your favorite color")) {
        speak("I like all colors equally, as I don't have preferences like humans do.");
    } else if (message.includes("help me")) {
        speak("Sure! What do you need help with?");
    } else if (message.includes("what's the weather")) {
        speak("I can't check the weather right now, but you can check a weather website for the latest updates.");
    } else if(message.includes("who are you")){
        speak("I am Shifra, your virtual assistant, created by aaditya")
    } else if(message.includes("open youtube")){
        speak("opening youtube");
        window.open("https://www.youtube.com", "_blank");
    } else if(message.includes("hello shipra")){
        speak("Hello sir, how can I assist you today?");
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook");
        window.open("https://www.facebook.com", "_blank");
    } else if (message.includes("open instagram")) {
        speak("opening instagram");
        window.open("https://www.instagram.com", "_blank");
    } else if (message.includes("open calculator")) {
        speak("opening calculator");
       window.open("https://www.google.com/search?q=calculator", "_blank");
       
    }
    else if (message.includes("open whatsapp")) {
        const whatsappMessage = "This is my laptop."; // Your custom message
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
        speak("Opening WhatsApp on your laptop with your message.");
        window.open(whatsappUrl, "_blank");
    }
    
    else {
        let finalText="this is what i found on internet regarding"+ message.replace("shifra","")||message.replace("shipra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}