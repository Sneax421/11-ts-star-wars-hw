import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";


function App() {
    const [heroName, setHeroName] = useState("Luke Skywalker");

    return (
        <div className={'container-fluid'}>
            <Header heroName={heroName}  />
            <Main setHeroName={setHeroName}/>
            <Footer/>
        </div>
    )
}

export default App


