import { Controller } from "@hotwired/stimulus"

const fragen_text = [
  "Moin Meister, ich bins, Nikolai.",
  "Also, digge, wat is denn los?"
];

const error_text = ("Bruder, du musst mich auch schon was fragen...");
const noice_oder_goarnicht_noice = [
  "Todes Noice",
  "Goarnicht Noice",
  "Schon ziemlich Noice",
  "Lul, ich versteh die Frage nicht",
  "Mach die Heizung aus, Konto ist lehr",
  "Warum sind da Bananen in meiner Kaffemaschiene?",
  "Keine Ahnung, aber ich glaub, ich hör jetzt auch auf Wasser zu trinken"
];
var msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[4];
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 0.8; // 0.1 to 10
msg.pitch = 0; //0 to 2
msg.lang = 'de-DE';

let i = 0;
let j = 0;

export default class extends Controller {
  static targets = [
    "next_button",
    "text"
  ];


  speak(text) {
    this.textTarget.textContent = text;
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  nextText() {
    i = i + 1;
    this.speak(fragen_text[i]);
  }

  connect() {
    if (document.referrer == document.URL) {
      this.speak(error_text);
    } else if (document.URL == "http://localhost:3000/denken") {
      this.speak("Also, mhhh, warte..")
    } else if (document.URL == "http://localhost:3000/antwort") {
      j = Math.floor(Math.random() * 7)
      this.speak(noice_oder_goarnicht_noice[j])
    } else {
      this.speak(fragen_text[i]);
    };
  };

}
