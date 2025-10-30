import React from 'react';

import { ControlsTab } from '@webrcade/app-common';


export class GamepadControlsTab extends ControlsTab {
  render() {
    return (
      <>
        {[
          this.renderControl('start', 'Option'),
          this.renderControl('dpad', 'Move'),
          this.renderControl('lanalog', 'Move'),
          this.renderControl('a', 'A'),
          this.renderControl('y', 'A'),
          this.renderControl('b', 'B'),
          this.renderControl('x', 'B'),
        ]}
      </>
    );
  }
}

export class KeyboardControlsTab extends ControlsTab {
  render() {
    return (
      <>
        {[
          this.renderKey('Enter', 'Option'),
          this.renderKey('ArrowUp', 'Up'),
          this.renderKey('ArrowDown', 'Down'),
          this.renderKey('ArrowLeft', 'Left'),
          this.renderKey('ArrowRight', 'Right'),
          this.renderKey('KeyZ', 'A'),
          this.renderKey('KeyS', 'A'),
          this.renderKey('KeyX', 'B'),
          this.renderKey('KeyA', 'B'),
        ]}
      </>
    );
  }
}

