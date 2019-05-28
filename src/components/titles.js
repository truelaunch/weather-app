import React from 'react';
// Functional component. Unlikely to have state. Just renders something. Build these unless there's a reason to make a Class based component. Works the same as a render function in a class based component.
const Titles = (props) => {
  return (
    <div>
      <h1> Weather App </h1>
      <p> Helps you find weather conditions in cities... </p>
    </div>
  )
}

export default Titles;
