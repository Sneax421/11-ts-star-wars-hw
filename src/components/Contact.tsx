import {useEffect, useState} from 'react';

import '../Contact.css'
import {base_url} from "../utils/constants.ts";
import {Planet} from "../utils/types";

const Contact = () => {
    const [planets, setPlanets] = useState(['Loading...'])

    async function fetchPlanets() {
        const response = await fetch(`${base_url}/v1/planets`);
        // const data: {name: string}[] = await response.json();
        const data: Planet[] = await response.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planet', JSON.stringify(planets));
    }

    useEffect(() => {
        const planet = localStorage.getItem('planet');
        const now = Date.now();
        const expirationDate = 30 * 24 * 60 * 60 * 1000;
        if(planet){
            const {timestamp, data} = JSON.parse(planet);
            if (now - timestamp < expirationDate) {
                setPlanets(data);
                return;
            }
        }
        fetchPlanets();
        return () => console.log('Component Contact was unmounted');
    },[])


    return (
        <form className={'containerContact'} onSubmit={e => e.preventDefault()}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label>Planet
                <select name="planet">
                    {planets.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </label>
            <label>Subject
                <textarea name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;