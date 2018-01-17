import { configure } from '@storybook/react';

require('../scss/build.scss');

// load all files in /components that end with .stories.js(x)
const req = require.context('../components', true, /\.stories\.jsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);