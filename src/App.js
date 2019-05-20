import React from 'react';
// ?? Why do I need the ./ for the paths to work?
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
// ?? Class based component. Likely to have state??
class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;
