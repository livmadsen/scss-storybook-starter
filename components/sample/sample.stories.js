import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Sample', module)
  .add('with text', () => (
    <div className="sample">Hello Storybook</div>
  ))
  .add('with some emoji', () => (
    <div className="sample">😀 😎 👍 💯</div>
  ));   