// import {createContext} from "react";
// import {SWContextValue} from "./types";
// import {navItems} from "./constants.ts";
//
// export const StarWarsContext = createContext<SWContextValue>({
//     page: navItems[0],
//     changePage: (page: string) => console.log(page)
// });

import {createContext} from "react";
import {SWContextValue} from "./types";
import {defaultHero} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero),
});