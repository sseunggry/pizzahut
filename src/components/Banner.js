import "../styles/banner.scss";

function Banner({text, point}){
    return (
        <div className="banner">
            <p className="text">{text} <span className="c-red bold">{point}</span></p>
            <button type="button" className="btn-close"></button>
        </div>
    )
}

export default Banner;