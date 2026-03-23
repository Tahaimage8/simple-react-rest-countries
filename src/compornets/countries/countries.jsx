import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./countries.css"
const Countries = ({ countriesPromise }) => {
    const [visitedCountries , setVisitedCountries] = useState([]);
    const[visitedflags, setVisitedflags] = useState([]);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;



    const handleVisitedCountries = (country)=>{
        // console.log('clicked handle visited ', country)
     const newVisitedCountries =[...visitedCountries , country]
     setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedflags, flag]
        setVisitedflags(newVisitedFlag)
        // console.log(...visitedflags, flag)

    }
    // console.log(countries)

    return (
        <div>
            <h1>Total Countries is : {countries.length}</h1>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
            <h3>Total FLags visited : {visitedflags.length}</h3>
            <ol>
                {
                   visitedCountries.map(country=> <li key={country.cca3.cca3} >{country.name.common}</li>) 
                }
            </ol>
            <div className='visitedFlagContainer'>
                {
                    visitedflags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
            </div>
 <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} 
                    country={country}  handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}
                >

                </Country>)
            }
 </div>
        </div>
    );
};

export default Countries;

