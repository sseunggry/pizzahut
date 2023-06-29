import {Link} from "react-router-dom";
import "../../styles/_inc/bottomMenu.scss";

const menu = [
    {
        link: '/',
        img: 'ico_menu_home',
        text: '홈',
    },
    {
        link: '/menu',
        img: 'ico_menu_menu',
        text: '메뉴',
    },
    {
        link: '/cart',
        img: 'ico_menu_my',
        text: '마이',
    },
    {
        link: '/event',
        img: 'ico_menu_event',
        text: '이벤트',
    }
]

const commonImg = "/resource/img/common";

function BottomMenu(){
    return (
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
    )
}

export default BottomMenu;