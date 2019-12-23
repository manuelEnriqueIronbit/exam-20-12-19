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

.container {
  display: flex;
  align-items: center; }

.battery {
  border: 1px solid #fff;
  display: flex;
  width: 60px;
  height: 20px;
  border-radius: 5px;
  position: relative;
  overflow: hidden; }
  .battery > div {
    flex-grow: 1; }
  .battery.green div {
    background-color: #3b9440; }
  .battery.yellow div {
    background-color: #ccca50; }
    .battery.yellow div.empty {
      opacity: 0.6; }
  .battery.red div {
    background-color: #cf2b2b; }
    .battery.red div.empty {
      opacity: 0.6; }
  .battery .medium {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff; }

.battery-plus {
  content: " ";
  width: 5px;
  height: 10px;
  border-radius: 0 2px 2px 0;
  border: 1px solid #fff;
  border-left: none;
  background-color: #cf2b2b; }
  .battery-plus.green {
    background-color: #3b9440; }
  .battery-plus.yellow {
    background-color: #ccca50; }
  .battery-plus.red {
    background-color: #cf2b2b; }

.amount-battery {
  padding-left: 5px;
  color: #fff; }
`;
