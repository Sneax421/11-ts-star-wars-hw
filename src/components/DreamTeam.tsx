
import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";


const DreamTeam = () => {
     const {hero} = useContext(SWContext);

    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.filter(friend => friend !== hero).map((friend, index) => <Friend friend={friend} pos={index +1} key={index} />)}
        </section>
    );
};

export default DreamTeam;