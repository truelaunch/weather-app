import React from 'react';
const Form = (props) => {
  return (
    <form onSubmit={props.loadWeather}>
    {/* ??? No need for this.props.loadWeather as explained in instructions */}
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  )
}

export default Form;
