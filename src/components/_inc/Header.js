import {Link} from "react-router-dom";
import {commonImg} from "../../recoil/atoms";
import '../../styles/_inc/header.scss';

function Logo(){
    return (
        <h1 className="logo">
            <Link to="/">
                <img src={`${commonImg}/logo_color.png`} alt="logo" />
            </Link>
        </h1>
    )
}

function Header({backBtn, title}){
    return (
        <header className="header">
            {backBtn ?  <Link className="btn-back"><img src={`${commonImg}/ico_back.png`} alt="" /></Link> :  <Logo />}
            {title ? <h2 className="head-tit">{title}</h2> : ''}
            <Link className="btn-cart">
                <img src={`${commonImg}/ico_cart.png`} alt="cart" />
            </Link>
        </header>
    )
}

export default Header;