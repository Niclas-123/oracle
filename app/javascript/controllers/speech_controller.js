import { Controller } from "@hotwired/stimulus"

const text = [
  "Moin Meister, ich bins, Nikolai.",
  "Also, digge, wat is denn los?"
];

const todes_noice = ("Todes Noice");
const goarnicht_noice = ("Todes Noice");

let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.lang = 'de-DE';

export default class extends Controller {
  static targets = [
    "next_button",
    "text"
  ];


  speak(i) {
    this.textTarget.textContent = text[i]
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text[i]));
  };

  connect() {
    this.speak(1);
  };

}
