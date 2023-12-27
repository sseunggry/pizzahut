import {Link, useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import {useEffect, useState} from "react";
import {menuListData, selectListData, contentImg, selectDataState} from "../recoil/atoms";
import {parentNodeFind, popupClose, popupOpen, priceDot} from "../js/commonFn";

import '../styles/detail.scss';
import Button from "../components/Button";
import {useRecoilState} from "recoil";
import Popup from "../components/Popup";

function Detail(){
    const {id} = useParams();
    const [{flag, name, desc, priceMedium, priceLarge, thumbImg, fullImg1, fullImg2, fullImg3}, setItem] = useState({});
    const [inputValue, setInputValue] = useState({});
    const [topping, setTopping] = useState(new Set([]));
    const [count, setCount] = useState(1);
    const [selectData, setSelectData] = useRecoilState(selectDataState);
    const {edgeList, toppingList} = selectListData;
    const sale = 30;
    let index, fullImg = fullImg1;

    const radioOnChange = (e) => {
        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
            [name] : value
        });

        if(name === 'edge'){
            let edgeLists = parentNodeFind(e.target, 'edge-list').querySelectorAll('input[type="radio"]');

            Object.values(edgeLists).map((el, idx) => {
                if(el.checked) index = idx;
                return index;
            });

            const pizzaImg = document.querySelector('.detail-info .img-con img');
            // pizzaImg.src = `${contentImg}/pizza_full_01_0${(index+1)}.png`;

            if(index === 0){
                fullImg = fullImg1;
            } else if(index === 1){
                fullImg = fullImg2;
            } else{
                fullImg = fullImg3;
            }

            pizzaImg.src = `${contentImg}/${fullImg}`;

        }
    }
    const checkOnChange = (e) => {
        const target = e.target;
        const {value} = target;
        const toppingLists = parentNodeFind(e.target, 'topping-list');
        const toppingChecked = toppingLists.querySelectorAll('input[type="checkbox"]:checked');

        if(toppingChecked.length > 2){
            target.checked = false;
            popupOpen('popupAlert');
            // return alert('피자 1판당 2개 토핑 추가 가능합니다. (중복불가)');
        }
        setTopping((prev) => updateCheckList(prev, value));
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
    const cartBtnOnClick = () => {
        setData();
        popupOpen('popupCart');
    }
    const setData = () => {
        setSelectData((prev) => ([{
            ...inputValue,
            "topping" : topping,
            "count" : count,
            "name" : name,
            "thumbImg" : thumbImg,
            "originPrice": (inputValue.size === 'M') ? priceMedium: priceLarge,
            "toppingPrice" : topping.size === 0 ? 0 : toppingList.filter(el => el.name === topping[0] || el.name === topping[1]).reduce((acc, cur) => acc.price + cur.price),
            "sale": sale
        }, ...prev]));
    }
    const btnMinusClick = () => {
        if(count > 1){
            setCount( num => num - 1);
        } else{
            alert('최소 수량은 1개 입니다.');
        }
    }
    const btnPlusClick = () => {
        setCount(num => num + 1);
    }

    useEffect(() => {
        const data = menuListData.pizzaList;
        const idx = data.findIndex((item) =>  item.id === id);
        setItem(data[idx]);
    }, []);

    return (
        <>
            <Layout header={{title: `${name}`, backBtn:"true"}} bottomMenu={false}>
                <div className="menu-detail">
                    <div className="detail-info">
                        <div className="tit-con">
                            <h3>{name}</h3>
                            <p className="desc">{desc}</p>
                        </div>
                        <div className="img-con">
                            <img src={`${contentImg}/${fullImg1}`} alt={name} />
                        </div>
                    </div>
                    <div className="select-con">
                        <dl>
                            <dt>엣지 선택</dt>
                            <dd className="edge-list">
                                {edgeList.map((edge, idx) => (
                                    <Input type="radio" value={edge} name="edge" id={`radio-edge${idx+1}`} key={idx} onChange={radioOnChange}>
                                        <img src={`${contentImg}/pizza_edge_0${idx+1}.png`} alt="" />
                                        <span>{edge}</span>
                                    </Input>
                                ))}
                            </dd>
                            <dd className="notice-txt">할인 적용 시 ‘엣지 추가 금액’은 할인이 불가합니다.</dd>
                        </dl>
                        <dl>
                            <dt>사이즈 선택</dt>
                            <dd className="size-list">
                                {priceMedium && (
                                    <Input type="radio" value="M" name="size" id="radio-size1" onChange={radioOnChange}>
                                        <span>M</span>
                                        <span className="price">
                                            <span className="sale">{priceDot(priceMedium*((100-sale)/100))}원</span>
                                            <span className="origin">{priceDot(priceMedium)}</span>
                                        </span>
                                    </Input>
                                )}
                                {priceLarge && (
                                    <Input type="radio" value="L" name="size" id="radio-size2" onChange={radioOnChange}>
                                        <span>L</span>
                                        <span className="price">
                                            <span className="sale">{priceDot(priceLarge*((100-sale)/100))}원</span>
                                            <span className="origin">{priceDot(priceLarge)}</span>
                                        </span>
                                    </Input>
                                )}
                            </dd>
                        </dl>
                        <dl>
                            <dt>토핑 추가</dt>
                            <dd className="topping-list">
                                {toppingList.map(({name, price, img}, idx) => (
                                    <li key={idx}>
                                        <Input type="checkbox" value={name} name="topping" id={`chk-topping${idx+1}`} onChange={checkOnChange}>
                                            <img src={`${contentImg}/pizza_topping_0${idx+1}.png`} alt="" />
                                            <span className="name">{name}</span>
                                            <span className="price">{priceDot(Math.ceil(price))}</span>
                                            <i className="icon-check"></i>
                                        </Input>
                                    </li>
                                ))}
                            </dd>
                            <dd className="notice-txt">피자 1판당 2개 토핑 추가 가능합니다. (중복불가)</dd>
                        </dl>
                        <dl>
                            <dt>피자 수량 선택</dt>
                            <dd className="btn-count">
                                <button className="minus" onClick={btnMinusClick}></button>
                                <input type="text" value={count} name="count" onChange={radioOnChange} disabled className="count" />
                                <button className="plus" onClick={btnPlusClick}></button>
                            </dd>
                            <dd className="notice-txt">피자 수량 변경 시 동일한 피자&토핑이 적용됩니다.</dd>
                        </dl>
                    </div>
                </div>
                <Button text="장바구니 담기" size="m" type="primary" addClass="btn-floating btn-cart" onClick={cartBtnOnClick}/>
            </Layout>
            <Popup btnText="확인" dataPop="popupCart" btnClose="true">
                <p className="txt">장바구니에 담겼습니다. <br/> 장바구니로 이동할까요?</p>
                <div className="popup-btn">
                    <Button text="확인" size="m" type="primary" link="/myPage"/>
                    <Button text="취소" size="m" type="line"  tag="button" addClass="btn-close" onClick={popupClose}/>
                </div>
            </Popup>
            <Popup btnText="확인" dataPop="popupAlert">
                <p className="txt">피자 1판당, 최대 2개 <br/> 토핑 추가 가능합니다. (중복 불가)</p>
                <div className="popup-btn">
                    <Button text="확인" size="m" type="primary" onClick={popupClose}/>
                </div>
            </Popup>
        </>
    )
}

export default Detail;