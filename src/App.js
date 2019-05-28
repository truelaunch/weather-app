import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

// Class based component. Likely to have state...eventually...
class App extends React.Component {
  getWeather = async (e) => {
    // prevent default browser behavior of full page refresh
    e.preventDefault();
    // city.value is the value of the name attribute defined in form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const Api_Key = "fdb1ebbb01af7dc02ca2faf5f980f3a6";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
  }

  render() {
    return (
      <div>
        <Titles />
        {/* loadWeather is the propName that will be referenced in Form component  */}
        <Form loadWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App;
