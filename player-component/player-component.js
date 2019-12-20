import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

class PlayerComponent extends LitElement {
  static get properties() {
    return {
      artist: String,
      songName: {
        type: String,
        attribute: "song-name"
      },
      video: String
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.video = '';
    this.artist = '';
    this.songName = '';
  }

  render() {
    return html`
      <p> Artist - ${this.artist}</p>
      <p> Now Playing - ${this.songName}</p>
      <audio
        controls
        src="${this.video}">
            Your browser does not support the
            <code>audio</code> element.
      </audio>  
    `;}
}

window.customElements.define("player-component", PlayerComponent);
