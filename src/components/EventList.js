import {Link} from "react-router-dom";
import {contentImg, eventListData} from "../recoil/atoms";

import "../styles/event.scss";

function EventList(){
    return (
        <ul className="event-list">
            {eventListData.map(({thumbImg}, idx) => (
                <li key={idx}>
                    <Link to={`/event/detail_${idx+1}`}>
                        <img src={`${contentImg}/img_event_0${idx+1}.png`} alt=""/>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default EventList;