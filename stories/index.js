import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('First', module)
  .add('with text', () => (
    <div>Hello Storybook</div>
  ))
  .add('with some emoji', () => (
    <div >😀 😎 👍 💯</div>
  ));   