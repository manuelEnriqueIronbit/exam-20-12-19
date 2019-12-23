import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      charge: Number
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.charge = 0;
    this.charging = null;
    this.discharging = null;
  }

  render() {
    return html`
    <div class="container">
      ${this.batteryIcon()}
    </div>
  `;}

  batteryIcon(){
    if (this.charge >= 67){
      return html`
        <div class="battery green">
          <div></div>
          <div class="medium"></div>
          <div></div>
        </div>
        <div class="battery-plus green"></div>
        <span class="amount-battery">${this.charge}%</span>
      `
    } else if (this.charge >= 34 && this.charge <= 66){
      return html`
        <div class="battery yellow">
          <div></div>
          <div class="medium"></div>
          <div class="empty"></div>
        </div>
        <div class="battery-plus yellow"></div>
        <span class="amount-battery">${this.charge}%</span>
      `
    } else{
      return html`
        <div class="battery red">
          <div></div>
          <div class="empty medium"></div>
          <div class="empty"></div>
        </div>
        <div class="battery-plus red"></div>
        <span class="amount-battery">${this.charge}%</span>
      `
    }
  }

  plugIn(){
    this.charging = window.setInterval(() => {
      if (this.charge < 100){
        this.charge += 1;
      }else {
        clearInterval(this.charging);
      }
    }, 1000);    
  }

  plugOff(){
    clearInterval(this.charging);
  }

  discharge(){
    this.discharging = window.setInterval(() => {
      if (this.charge > 10){
        this.charge -= 1;
      }
      else{
        clearInterval(this.discharging);
      }
    }, 1000);
  }

  stopDischarging(){
    clearInterval(this.discharging);
  }
  
  playAndCharge(){
    clearInterval(this.charging);
    clearInterval(this.discharging);
  }

}

window.customElements.define("battery-component", BatteryComponent);
