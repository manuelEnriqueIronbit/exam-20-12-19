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
  paper-card main {
    height: 60vh; }
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
`;
