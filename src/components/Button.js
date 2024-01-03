import {Link} from "react-router-dom";
import "../styles/button.scss";

function Button({tag = 'a', type, text, size, link = '' , addClass= '', onClick}){
    let btnCont;
    if(tag === 'button') {
        btnCont = <button type="button" onClick={onClick}>{text}</button>;
    } else {
        btnCont = <Link to={link} onClick={onClick}>{text}</Link>;
    }
    
    return (
        <div className={`btn btn-${size} ${type} ${addClass}`}>
            {btnCont}
        </div>
    )
}

export default Button;