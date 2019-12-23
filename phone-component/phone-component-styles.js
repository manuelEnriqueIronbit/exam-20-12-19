import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

paper-card {
  width: 50vh; }
  paper-card header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: #000;
    height: 30px; }
    paper-card header > div, paper-card header iron-icon {
      flex-grow: 1;
      text-align: center;
      color: #fff; }
    paper-card header battery-component {
      flex-grow: 0.1; }
  paper-card main {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; }
    paper-card main .play, paper-card main .pause {
      background: none;
      border: none; }
    paper-card main .play {
      color: royalBlue; }
    paper-card main .pause {
      color: crimson; }
  paper-card footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: #000;
    height: 30px; }
    paper-card footer > iron-icon {
      flex-grow: 1;
      text-align: center;
      color: #fff; }

.active {
  color: #000;
  background: #dbd44d;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  outline: none; }
  .active.off {
    color: #dbd44d !important;
    background: #000 !important; }
`;
