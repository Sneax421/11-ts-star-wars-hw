import {useContext} from 'react';
import {StarWarsContext} from "../utils/context.ts";

interface Props {
    itemTitle: string
}

const Navitem = ({itemTitle}: Props) => {
    const {changePage} = useContext(StarWarsContext);
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default Navitem;