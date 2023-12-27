import {Link} from "react-router-dom";
import {menuListData, contentImg} from "../recoil/atoms";
import {useState} from "react";
import {popupClose, popupOpen, priceDot} from "../js/commonFn";
import Button from "./Button";
import Popup from "./Popup";

function Side() {
    const side = menuListData.sideList;
    const [inputVal, setInputVal] = useState(0);
    const btnMinusClick = (e) => {
        const btnCount = e.target.parentNode;
        const inputCount = btnCount.querySelector('.count');
        let inputValue = Number(inputCount.value);

        if(inputVal > 0){
            // inputCount.value = inputValue - 1;
            setInputVal(inputVal - 1);
        }
    }
    const btnPlusClick = (e) => {
        const btnCount = e.target.parentNode;
        const inputCount = btnCount.querySelector('.count');
        let inputValue = Number(inputCount.value);

        // inputCount.value = inputValue + 1;
        setInputVal(inputVal + 1);
    }
    const btnCountChange = (e) => {
        console.log(e.target.parentNode.querySelector('input'));
        const {value, name} = e.target;
        // setInputVal({
        //     ...inputVal,
        //     [name]: value
        // });
    }
    // const btnCountClick = (e) => {
    //     console.log(e.target.parentNode.parentNode);
    // }
    return (
        <>
            <div className="menu-side">
                <ul className="thumb-list">
                {side.map(({discount, name, priceOrigin, thumbImg}, idx) =>
                    <li key={idx}>
                        <div className="thumb-img">
                            {discount && <span className={`flag discount`}>{discount}%</span>}
                            <div className="img-con">
                                <img src={`${contentImg}/${thumbImg}`} alt={name}/>
                            </div>
                        </div>
                        <dl className="thumb-txt">
                            <dt>{name}</dt>
                            <dd className="price">
                                <span className={discount ? 'origin-price' : 'origin-price large'}>{priceDot(priceOrigin)}원</span>
                                {discount && (
                                    <span className="sale-price">
                                        {priceDot(Math.ceil(priceOrigin*(1-discount/100)))+'원'}
                                    </span>
                                )}
                            </dd>
                        </dl>
                        <div className="btn-count" onClick={btnCountChange}>
                            <button className="minus" onClick={btnMinusClick}></button>
                            <input type="text" value={inputVal} name={`count${idx}`} readOnly className="count" />
                            <button className="plus" onClick={btnPlusClick}></button>
                        </div>
                    </li>
                )}
                </ul>
            </div>
            <Button text="장바구니 담기" size="m" type="primary" addClass="btn-floating btn-cart" />
        </>
    )
}

export default Side;