import {Link} from "react-router-dom";
import "../styles/popup.scss";
import Button from "./Button";
import {popupClose} from "../js/commonFn";

function Popup({children, btnText, addClass, dataPop = ''}){
    return (
        <div className={`popup-wrap ${addClass}`} data-pop={dataPop}>
            <div className="popup-inner">
                <div className="popup-con">
                    {children}
                </div>
                <div className="popup-btn">
                    <Button text={btnText} size="m" type="primary" link="/myPage"/>
                    <Button text="취소" size="m" type="line"  tag="button" addClass="btn-close" onClick={popupClose}/>
                    {/*<Link to="#!" className="btn">취소</Link>*/}
                </div>
            </div>
        </div>
    )
}

export default Popup;