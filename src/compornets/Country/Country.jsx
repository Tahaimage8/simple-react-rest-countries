import React, { useState } from 'react';
import "./country.css"

const Country = ({country, handleVisitedCountries , handleVisitedFlag}) => {
    

    const [visited, setvisited] = useState(false);
const handleVisited = ()=> {
    
    // console.log('btn clied');
    //basic system
// if (visited){
//  setvisited(false)
// }
// else{
//     setvisited(true)
// }
// secend system
// setvisited(visited ? false : true)

// third system
setvisited(!visited);
handleVisitedCountries(country);
// country peramiter ken dilam eitai bustasi nah   ?????????
 
}


    // console.log(country.area.area)
    return (

        <div className={`country ${visited? 'country-visited' : "country-notVisited"}`}>
            {/* <h3>Name :{country?.name?.common}, population : {country?.population?.population} </h3>
            <img src={country?.flags?.flags?.png} alt="" /> */}
            
            <img src={country?.flags?.flags?.png} alt="" />
         <h3>Name :{country?.name?.common}</h3>
         <p> population : {country?.population?.population} </p>
         <p>area : {country?.area?.area} {country.area.area > 300000? "Big Country " : 'small country'}</p>
         <button onClick={handleVisited}>
            {visited ? "visited": 'Not-visited'}
         </button><br />
         <button onClick={ () => {handleVisitedFlag(country?.flags?.flags?.png)}}>add visited flg</button>
        </div>
    );
};

export default Country;