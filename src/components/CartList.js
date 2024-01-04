import Button from "./Button";
import {contentImg, selectDataState} from "../recoil/atoms";
import {priceDot} from "../js/commonFn";
import {useRecoilState} from "recoil";

function CartList() {
    const [selectData, setSelectData] = useRecoilState(selectDataState);
    const deleteClick = (e) => {
        const target = e.target;
        const listLi = target.parentNode;
        const lists = listLi.parentNode.children;

        const index = Array.from(lists).indexOf(listLi);
        const newSelectData = selectData.filter((data) => (
            data !== selectData[index]
        ))
        setSelectData(newSelectData);
    }

    let totalPrice = 0;
    selectData.forEach((el) => {
        let {count, originPrice, sale = 0, toppingPrice = 0} = el;
        totalPrice += Math.ceil(originPrice*((100-sale)/100)*count + toppingPrice);
    });

    return (
        <>
            {selectData.length === 0 ? (
                    <div className="cart-empty">
                        <p>장바구니가 비어있습니다.</p>
                        <Button text="메뉴 선택하기" size="m" type="primary" link="/menu"/>
                    </div>
                ) : (
                    <>
                        <ul className="cart-list">
                            {selectData.map(({thumbImg, name, edge, size, topping=[], count, originPrice, sale = 0, toppingPrice = 0}, idx) => (
                                <li key={idx}>
                                    <img src={`${contentImg}/${thumbImg}`} alt="" />
                                    <div className="txt-con">
                                        <p>
                                            {name}
                                            {size && (<span className="c-red">({size})</span>)}
                                        </p>
                                        {
                                            edge && (
                                                <dl>
                                                    <dt>엣지</dt>
                                                    <dd>{edge} 엣지</dd>
                                                </dl>
                                            )
                                        }
                                        {
                                            !topping.size ? '' : (
                                                <dl>
                                                    <dt>토핑</dt>
                                                    <dd>
                                                        {topping.join(', ')}
                                                    </dd>
                                                </dl>
                                            )
                                        }
                                        <dl>
                                            <dt>수량</dt>
                                            <dd className="c-red">{count}</dd>
                                        </dl>
                                    </div>
                                    <button className="btn-delete" onClick={deleteClick}></button>
                                    <div className="price-con">
                                        {sale > 0 ? (
                                            <>
                                                <span className="origin_price">{priceDot(originPrice*count + toppingPrice)}원</span>
                                                <span className="sale_percent c-red">{sale}%</span>
                                                <span className="price">{priceDot(Math.ceil(originPrice*((100-sale)/100)*count + toppingPrice))}원</span>
                                            </>
                                        ) : (
                                            <span className="price">{priceDot(Math.ceil(originPrice*count + toppingPrice))}원</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-total-price">
                            <p className="price">총 금액 <span>{priceDot(totalPrice)}원</span> </p>
                            <Button text="결제하기" size="m" type="primary" tag="button" addClass="btn-all-order" />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default CartList;