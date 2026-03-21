import React, { use } from 'react';
import Country from '../Country/Country';
import "./countries.css"
const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    return (
        <div>
            <h1>Total Countries is : {countries.length}</h1>
 <div className='countries'>
                {
                countries.map(country => <Country country={country}></Country>)
            }
 </div>
        </div>
    );
};

export default Countries;

