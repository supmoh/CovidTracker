import React,{useState} from 'react';

function Form(props) {
  const[country,setCountry]=useState('');
  function handleChange(e)
  {
    setCountry(e.target.value);
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    props.addCountry(country);
    setCountry("");
  }
 
  return (
    <form onSubmit={handleSubmit} classname="add_form">
      <input
      type="text"
      id="new_add"
      className="input_box"
      name="text"
      auto-complete="off"
      value={country}
      onChange={handleChange}/>
      <button type="submit" className="add_btn">
        Add
      </button>

    </form>

  );

}

export default Form;
