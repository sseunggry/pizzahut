import {Link} from "react-router-dom";
import {commonImg, menu} from "../../recoil/atoms";
import "../../styles/_inc/bottomMenu.scss";

function BottomMenu(){
    return (
        <>
            <ul className="bottom-menu">
                {menu.map(({link, img, text}, idx) =>
                    <li key={idx}>
                        <Link to={link}>
                            <img src={`${commonImg}/${img}.png`} alt={text} />
                            <p>{text}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default BottomMenu;