import {Link} from "react-router-dom";

import '../../styles/_inc/header.scss';

const commonImg = "/resource/img/common";

const logoImg = "/resource/img/common/logo_color.png";
const cartImg = "/resource/img/common/ico_cart.png";
const backBtnImg = "/resource/img/common/ico_back.png";

function Logo(){
    return (
        <h1 className="logo">
            <Link to="/">
                <img src={`${commonImg}/logo_color.png`} alt="logo" />
            </Link>
        </h1>
    )
}

function Header({backBtn, headTxt}){
    return (
        <header className="header">
            {backBtn ?  <Link className="btn-back"><img src={`${commonImg}/ico_back.png`} alt="" /></Link> :  <Logo />}
            {headTxt ? <h2 className="head-tit">{headTxt}</h2> : ''}
            <Link className="btn-cart">
                <img src={`${commonImg}/ico_cart.png`} alt="cart" />
            </Link>
        </header>
    )
}

export default Header;