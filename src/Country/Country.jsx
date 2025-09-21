import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisistedCountries, handleVisitedflags}) => {

    //console.log(handleVisistedCountries)
    const [visited, setVisited] = useState(false)

    const handlVisitedArea = () => {
        //visited ? setVisited(false) : setVisited(true)
        setVisited(!visited)
        handleVisistedCountries(country)
    }

    console.log(country.name.common)
    return (
        <div className={`country ${visited && 'visited-class'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                    country.area.area > 300000 ? "Big Country" : "Small Country"
                }
            </p>
            <button onClick = {handlVisitedArea}>
               {visited ? "visited" : "Not visited"}
            </button>
            <button onClick={() => handleVisitedflags(country?.flags?.flags?.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;