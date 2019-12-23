import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@catsys/player-component';
import '@catsys/battery-component';

class PhoneComponent extends LitElement {
  static get properties() {
    return {
      today: String,
      days: Array,
      months: Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.date = new Date("December 20, 2019");
  }

  render() {
    return html`
        <paper-card>
          <header>
          <iron-icon icon="vaadin:signal"></iron-icon>
            <div>${this.day()} ${this.date.getDate()} ${this.month()}</div>
            <battery-component></battery-component>
          </header>
          <main>
            <player-component video="../video/ShepherdOfFire.mp3" artist="Avenged Sevenfold" song-name="Shepherd Of Fire"></player-component>
            <button class="play" @click="${this.playing}"><iron-icon icon="vaadin:play-circle-o"></iron-icon></button>
            <button class="pause" @click="${this.pausing}"><iron-icon icon="vaadin:pause"></iron-icon></button>
          </main>
          <footer>
            <iron-icon icon="vaadin:backwards"></iron-icon>
            <iron-icon icon="vaadin:home-o"></iron-icon>
            <iron-icon icon="vaadin:list-select"></iron-icon>
            </footer>
        </paper-card>
        <button id="rayo" class="active off" @click="${this.bolt}"><iron-icon icon="vaadin:bolt"></iron-icon></button>
        
  `;}

  day(){
    return this.days[this.date.getDay()]
  }

  month(){
    return this.months[this.date.getMonth()];
  }

  bolt() {
    let socket = this.shadowRoot.querySelector("#rayo");
    let audio = this.shadowRoot.querySelector("player-component").getAudioSate();
    if(!audio && socket.classList.contains("off")){
      this.shadowRoot.querySelector("battery-component").playAndCharge();
      socket.classList.toggle("off");
    }else if (socket.classList.contains("off")){
      socket.classList.toggle("off");
      this.shadowRoot.querySelector("battery-component").plugIn();
    } else if(!audio && !socket.classList.contains("off")){
      this.shadowRoot.querySelector("battery-component").discharge();
      this.shadowRoot.querySelector("battery-component").plugOff();
      socket.classList.toggle("off");
    }else{
      socket.classList.toggle("off");
      this.shadowRoot.querySelector("battery-component").plugOff();
    }
  }

  playing(){
    let socket = this.shadowRoot.querySelector("#rayo");
    let audio = this.shadowRoot.querySelector("player-component").getAudioSate();
    console.log(socket, audio)
    if (socket.classList.contains("off") || !audio ){
      this.shadowRoot.querySelector("player-component").play();
      this.shadowRoot.querySelector("battery-component").discharge();
    } else if (!socket.classList.contains("off")  || !audio){
      this.shadowRoot.querySelector("player-component").play();
      this.shadowRoot.querySelector("battery-component").playAndCharge()
    }
  }

  pausing(){
    let socket = this.shadowRoot.querySelector("#rayo");
    let audio = this.shadowRoot.querySelector("player-component").getAudioSate();
    if(!audio && !socket.classList.contains("off")){
      this.shadowRoot.querySelector("player-component").pause();
      this.shadowRoot.querySelector("battery-component").plugIn();
    } else if (!audio && socket.classList.contains("off")){
      this.shadowRoot.querySelector("player-component").pause();
      this.shadowRoot.querySelector("battery-component").stopDischarging();
    }
  }

}

window.customElements.define("phone-component", PhoneComponent);
