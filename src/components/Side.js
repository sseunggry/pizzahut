import {Link} from "react-router-dom";
import {menuListData, contentImg, selectSideState} from "../recoil/atoms";
import {popupClose, popupOpen, priceDot} from "../js/commonFn";
import Button from "./Button";
import Popup from "./Popup";
import {useRecoilState} from "recoil";

function Side() {
    const side = menuListData.sideList;
    const [selectData, setSelectData] = useRecoilState(selectSideState);

    const btnMinusClick = (e) => {
        const btnCount = e.target.parentNode;
        const count = btnCount.querySelector('.count');

        if(Number(count.innerText) > 0){
            count.innerText--;
        }
    }
    const btnPlusClick = (e) => {
        const btnCount = e.target.parentNode;
        const count = btnCount.querySelector('.count');

        count.innerText++;
    }

    const cartOnClick = () => {
        const countNum = document.querySelectorAll('.thumb-list .count');

        countNum.forEach((el, idx) => {
            if(el.innerText > 0) {
                setSelectData((prev) => ([{
                    ...side[idx],
                   "count" : Number(el.innerText)
                }, ...prev]));

                // setSelectData((prev) => updateCheckList(prev, side[idx]));
            }
        })

    }
    const updateCheckList = (set, value) => {
        const updatedSet = new Set(set);

        if(updatedSet.has(value)){
            updatedSet.delete(value);
        } else{
            updatedSet.add(value);
        }

        return [...updatedSet];
    }
        console.log(selectData);

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
                        <div className="btn-count">
                            <button className="minus" onClick={btnMinusClick}></button>
                            <span className="count">0</span>
                            {/*<input type="text" value={inputVal} name={`count${idx}`} readOnly className="count" />*/}
                            <button className="plus" onClick={btnPlusClick}></button>
                        </div>
                    </li>
                )}
                </ul>
            </div>
            <Button text="장바구니 담기" size="m" type="primary" addClass="btn-floating btn-cart" onClick={cartOnClick}/>
        </>
    )
}

export default Side;