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
    
    // if(tag === 'button') {
    //     return (
    //         <div className="btn-con">
    //          <button type="button" className={style}>{text}</button>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <Link to="" className={style}>{text}</Link>
    //     )
    // }
    
    // return (
    //     <div className="btn-con">
    //         {tag === 'a' ? (
    //             <Link to="" className={style}>{text}</Link>
    //         ) : tag === 'button' ? (
    //             <button type="button" className={style}>{text}</button>
    //         ) : ''}
    //     </div>
    // )
}

export default Button;