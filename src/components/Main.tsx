
import {Route, Routes} from "react-router";
import {navItems} from "../utils/constants.ts";
import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";

const Main = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={navItems[0].path} element={<Home/>}/>
            <Route path={navItems[1].path} element={<AboutMe/>}/>
            <Route path={navItems[2].path} element={<StarWars/>}/>
            <Route path={navItems[3].path} element={<Contact/>}/>
        </Routes>
    )
};

export default Main;