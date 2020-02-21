class FancyButton extends HTMLButtonElement {
  constructor() {
    super(); // always call super() first in the constructor.
    this.addEventListener('click', e => console.log("ボタンを押した"));
  }
}

customElements.define('fancy-button', FancyButton, {extends: 'button'})