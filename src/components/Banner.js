function Banner({text, point}){
    return (
        <div className="banner">
            <p className="text">{text} <span className="c-red bold">{point}</span></p>
        </div>
    )
}

export default Banner;