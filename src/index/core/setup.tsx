import * as React from 'react';
import * as ReactDOM from 'react-dom';
import figlet from 'figlet';
import standard from "figlet/importable-fonts/Standard.js";

import { Root } from './root';

figlet.parseFont("Standard", standard);

export const setup = () => {
  ReactDOM.render(<Root />, document.querySelector('#root'));
}
