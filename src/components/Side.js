import {menuListData, contentImg, selectDataState} from "../recoil/atoms";
import {priceDot} from "../js/commonFn";
import Button from "./Button";
import {useSetRecoilState} from "recoil";

function Side() {
    const side = menuListData.sideList;
    const [setSelectData] = useSetRecoilState(selectDataState);

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
        let selectSideArr = [];

        countNum.forEach((el, idx) => {
            if(el.innerText > 0) {
                let sideArr = {...side[idx]};
                sideArr.count = Number(el.innerText);
                selectSideArr.push(sideArr);
            }
        });
        setSelectData((prev) => [...selectSideArr, ...prev]);
    }

    return (
        <>
            <div className="menu-side">
                <ul className="thumb-list">
                {side.map(({sale, name, originPrice, thumbImg}, idx) =>
                    <li key={idx}>
                        <div className="thumb-img">
                            {sale && <span className={`flag discount`}>{sale}%</span>}
                            <div className="img-con">
                                <img src={`${contentImg}/${thumbImg}`} alt={name}/>
                            </div>
                        </div>
                        <dl className="thumb-txt">
                            <dt>{name}</dt>
                            <dd className="price">
                                <span className={sale ? 'origin-price' : 'origin-price large'}>{priceDot(originPrice)}원</span>
                                {sale && (
                                    <span className="sale-price">
                                        {priceDot(Math.ceil(originPrice*(1-sale/100)))+'원'}
                                    </span>
                                )}
                            </dd>
                        </dl>
                        <div className="btn-count">
                            <button className="minus" onClick={btnMinusClick}></button>
                            <span className="count">0</span>
                            <button className="plus" onClick={btnPlusClick}></button>
                        </div>
                    </li>
                )}
                </ul>
            </div>
            <Button text="장바구니 담기" size="m" type="primary" addClass="btn-floating btn-cart" onClick={cartOnClick} link="/mypage" />
        </>
    )
}

export default Side;