import {Link} from "react-router-dom";
import "../styles/popup.scss";
import Button from "./Button";
import {popupClose} from "../js/commonFn";

function Popup({children, addClass, dataPop = ''}){
    return (
        <div className={`popup-wrap ${addClass}`} data-pop={dataPop}>
            <div className="popup-inner">
                <div className="popup-con">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup;