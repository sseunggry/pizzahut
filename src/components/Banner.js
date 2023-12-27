import "../styles/banner.scss";
import {parentNodeFind} from "../js/commonFn";

function Banner({text, point}){
    const btnCloseClick = (e) => {
        let $banner = parentNodeFind(e.target, 'banner');
        $banner.remove();
    }
    return (
        <div className="banner">
            <p className="text">{text} <span className="c-red bold">{point}</span></p>
            <button type="button" className="btn-close" onClick={btnCloseClick}></button>
        </div>
    )
}

export default Banner;