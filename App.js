import { MenuItem,Select,FormControl,Card, CardContent} from '@material-ui/core';
import React,{ useEffect, useState } from 'react';
import Infobox from './Infobox';
import Map from './Map';
import './App.css';
import Form from './Form';


function App() {
  const[countries,setCountries]=useState([]);
  const[country,setCountry]=useState("worldwide");
  const[countryInfo,setCountryInfo]=useState({});
  const[listCountry,setlistCountry]=useState();
  function addCountry(name)
  {
   
      const right =document.getElementById("right");
        right.insertAdjacentHTML('afterend',
      `<div className="listcountry">
        ${name}
      </div>`
    )
    
    
  }
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response =>response.json())
    .then(data=>{
      setCountryInfo(data);
    });

  },[]);
  useEffect(()=>{
    const getCountryData = async() => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries=data.map((country) => (
          {
            name:country.country,
            value:country.countryInfo.iso2,
          }));
          setCountries(countries);
        });

    };
    getCountryData();
  },[]);

  const onCountryChange = (e) => {
    const countryCode=e.target.value;
    setCountry(countryCode);

    const url=countryCode==="worldwide" 
    ?"https://disease.sh/v3/covid-19/all"
    :`https://disease.sh/v3/covid-19/countries/${countryCode}`;

      
    fetch(url)
    .then(response => response.json())
    .then(data=>{
      setCountry(countryCode);
      setCountryInfo(data);

    });
  };
  
  return (
    <div className="app">
      
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl classname="app_dropdown">
            <Select variant="outlined"
            onChange={onCountryChange}
            value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map((countries)=>(<MenuItem value={countries.value}>{countries.name}</MenuItem>))
              }
                  
            </Select>
          </FormControl>
        </div>
              
        <div className="app__stats">
          <Infobox title="Coronavirus Cases" 
          cases={countryInfo.todayCases} 
          total={countryInfo.cases} />
          <Infobox title="Recovered Cases" 
          cases={countryInfo.todayRecovered} 
          total={countryInfo.recovered}/>
          <Infobox title="Deaths" 
          cases={countryInfo.todayDeaths} 
          total={countryInfo.deaths}/>    
        
        </div> 

        

            

        <Map/>

      </div>
      <div className="app__right" id="right">
          <h2>Show Cases by Country</h2>
         
          <Form addCountry={addCountry}/> 
             
        

      </div>
      
    
    </div>//end of div app
  
  
  );
}

export default App;
