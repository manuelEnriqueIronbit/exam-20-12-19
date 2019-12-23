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
    <div class="song">
      <p> Artist - ${this.artist}</p>
      <p> Now Playing - ${this.songName}</p>
      <audio src="${this.video}">
      </audio> 
    </div>
    `;}
  
  play(){
    let song = this.shadowRoot.querySelector("audio");
    song.play();
  }

  pause(){
    let song = this.shadowRoot.querySelector("audio");
    song.pause();
  }

  getAudioSate(){
    let song = this.shadowRoot.querySelector("audio");
    return song.paused;
  }

}

window.customElements.define("player-component", PlayerComponent);
