import {Link} from "react-router-dom";
import {menuListData, contentImg} from "../recoil/atoms";
import {useState} from "react";
import {priceDot} from "../js/commonFn";

function Side() {
    const side = menuListData.sideList;
    const btnMinusClick = (e) => {
        const btnCount = e.target.parentNode;
        const inputCount = btnCount.querySelector('.count');
        let inputValue = Number(inputCount.value);

        if(inputValue > 0){
            inputCount.value = inputValue - 1;
        }
    }
    const btnPlusClick = (e) => {
        const btnCount = e.target.parentNode;
        const inputCount = btnCount.querySelector('.count');
        let inputValue = Number(inputCount.value);

        inputCount.value = inputValue + 1;
    }
    return (
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
                    <div className="btn-count">
                        <button className="minus" onClick={btnMinusClick}></button>
                        <input type="text" value="0" name="count" disabled className="count" />
                        <button className="plus" onClick={btnPlusClick}></button>
                    </div>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Side;