import Navitem from "./Navitem.tsx";
import {navItems} from "../utils/constants.ts";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item =>  <Navitem item={item} key={item.path}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;