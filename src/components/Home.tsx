
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import ErrorPage from "./ErrorPage.tsx";
import useHeroId from "../hooks/useHeroId.ts";

const Home = () => {
    const {isValidHero} = useHeroId();


    return isValidHero ? (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;

