import {Link, useNavigate} from "react-router-dom";
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

function Header({backBtn, title, address}){
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <header className="header">
            {backBtn ?  <button className="btn-back" onClick={goBack}><img src={`${commonImg}/ico_back.png`} alt="" /></button> :  <Logo />}
            {title ? <h2 className="head-tit">{title}</h2> : address ? <Link to="/address" className="btn-address">{address}</Link> : ''}
            <Link className="btn-cart" to="/mypage">
                <img src={`${commonImg}/ico_cart.png`} alt="cart" />
            </Link>
        </header>
    )
}

export default Header;