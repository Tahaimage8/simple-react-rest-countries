import React from 'react';
import "./country.css"

const Country = ({country}) => {
    
const handleVisited = ()=> {
    console.log('btn clied')
}


    // console.log(country.area.area)
    return (

        <div className='country'>
            {/* <h3>Name :{country?.name?.common}, population : {country?.population?.population} </h3>
            <img src={country?.flags?.flags?.png} alt="" /> */}
            
            <img src={country?.flags?.flags?.png} alt="" />
         <h3>Name :{country?.name?.common}</h3>
         <p> population : {country?.population?.population} </p>
         <p>area : {country?.area?.area} {country.area.area > 300000? "Big Country " : 'small country'}</p>
         <button onClick={handleVisited}>Not visited</button>
        </div>
    );
};

export default Country;