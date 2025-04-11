import {starWarsInfo} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import useHeroId from "../hooks/useHeroId.ts";

const StarWars = () => {

    const {isValidHero} = useHeroId();

    return isValidHero ?(
        <div className='farGalaxy'>
            {starWarsInfo}
        </div>
    ): <ErrorPage/>;
};

export default StarWars;