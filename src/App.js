import React from 'react';
// ?? Why do I need the ./ for the paths to work?
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

// ?? How is this file running locally (browser interpreting JSX, etc) without running npm run build?

// ?? Class based component. Likely to have state??
class App extends React.Component {
  getWeather = async (e) => {
    // prevent default browser behavior of full page refresh
    e.preventDefault();
    const Api_Key = "fdb1ebbb01af7dc02ca2faf5f980f3a6";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
  }

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
