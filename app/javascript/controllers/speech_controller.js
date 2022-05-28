import { Controller } from "@hotwired/stimulus"

const text = [
  "Moin Meister, ich bins, Nikolai.",
  "Also, digge, wat is denn los?"
];

const todes_noice = ("Todes Noice");
const goarnicht_noice = ("Todes Noice");

export default class extends Controller {

  speak(i) {
    this.element.textContent = text[i]
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Bei welcher Angelegenheit darf ich euch helfen?'));
  };

  connect() {
    speak()
  };

}
