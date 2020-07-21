import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
// * Import the `TopicBrowser` component after the `import` of react.
// * Render the `TopicBrowser` component in the `render` method of `App`.

class App extends Component {
  render() {
    return (
      <TopicBrowser/>
    )
  }
}

export default App;
