// import {useEffect, useState} from 'react';
// import {base_url} from "../utils/constants.ts";
// import main from "../assets/main.jpg";
//
// const AboutMe = () => {
//     const [hero, setHero] = useState('Loading...');
//
//     useEffect(() => {
//         fetch(`${base_url}/v1/peoples/1`)
//             .then(res => res.json())
//             .then(data => {
//                 setHero({
//                     name: data.name,
//                     gender: data.gender,
//                     height: data.height,
//                     eye_color: data.eye_color,
//                     mass: data.mass,
//                     birth_year: data.birth_year,
//
//                 });
//             })
//             .catch(() => setHero('Error'))
//     })
//
//
//     return (
//         <div className={'farGalaxy'}>
//             <img className="float-start w-25 me-3" src={main} alt="Hero"/>
//             <p>Name: {hero.name}</p>
//             <p>Gender: {hero.gender}</p>
//             <p>Height: {hero.height}</p>
//             <p>Eye color: {hero.eye_color}</p>
//             <p>Mass: {hero.mass}</p>
//             <p>Birth year: {hero.birth_year}</p>
//         </div>
//     );
// };
//
// export default AboutMe;


import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import {HeroInfo} from "../utils/types";
import {useParams} from "react-router";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    let {heroId = defaultHero} = useParams();


    // useEffect(() => {
    //
    //     const hero = localStorage.getItem("hero");
    //     const now = Date.now();
    //     const expirationDate = 30 * 24 * 60 * 60 * 1000;
    //     if (hero) {
    //         const {timestamp, data} = JSON.parse(hero);
    //         if (now - timestamp < expirationDate) {
    //             setHero(data);
    //             return;
    //         }
    //     }
    //
    //     fetch(`${base_url}/v1/peoples/1`)
    //         .then(response => response.json())
    //         .then(data => {
    //             const info = {
    //                 name: data.name,
    //                 gender: data.gender,
    //                 birth_year: data.birth_year,
    //                 height: data.height,
    //                 mass: data.mass,
    //                 hair_color: data.hair_color,
    //                 skin_color: data.skin_color,
    //                 eye_color: data.eye_color
    //             }
    //             setHero(info);
    //             localStorage.setItem("hero", JSON.stringify({timestamp: now, data: info}));
    //         })
    //
    // }, [])
    useEffect(() => {
        if(!characters[heroId]){
            heroId = defaultHero;
        }
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    // const listInfo= (hero: HeroInfo) =>(
    //     Object.keys(hero).map(key => <p key={key}>
    //         <span className={'display-3'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
    //     </p>)
    // )

    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'display-3'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                    </p>)}

                </div>
            }
        </>
    );
};

export default AboutMe;


// <p><span className='display-3'>name:</span> {hero.name}</p>
// <p><span className='display-3'>gender:</span> {hero.gender}</p>
// <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
// <p><span className='display-3'>height:</span> {hero.height}</p>
// <p><span className='display-3'>mass:</span> {hero.mass}</p>
// <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
// <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
// <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>


// ..
// {Object.entries(hero).map(([key, value]) => (
//     <p key={key}>
//         <span className='display-3'>{key.replace('_', ' ')}:</span> {value}
//     </p>
// ))}





