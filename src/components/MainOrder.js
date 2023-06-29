import '../styles/mainorder.scss';
import {Link} from "react-router-dom";
import Tab from "./Tab";

function MainOrder({text}){
    return (
        <div className="main-order">
            <h3 className="tit">
                오늘의 추천 <br/> 메뉴는 {text}
            </h3>
            
            <div className="btn-order">
                <Link>주문하기</Link>
            </div>
        </div>
    )
}

export default MainOrder;