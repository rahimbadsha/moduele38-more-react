import React, { use, useState } from 'react';
import Country from '../../Country/Country';
import './Countries.css'

const Countries = ({countriesPromises}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisistedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedflags = (flags) => {
        const newVisistedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisistedFlags)
    }

    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Total countries are: {countries.length}</h1>
            <h3>Total countries visited:  {visitedCountries.length}</h3>
            <h3>Total Visited flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li 
                        key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img> )
                }
            </div>

            <div  className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3.cca3}
                        country={country}
                        handleVisistedCountries = {handleVisistedCountries}
                        handleVisitedflags = {handleVisitedflags}
                    ></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;