import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import {useEffect, useState} from "react";
import {menuListData, selectListData, contentImg, selectDataState} from "../recoil/atoms";
import {parentNodeFind, priceDot} from "../js/commonFn";

import '../styles/detail.scss';
import Button from "../components/Button";
import {useRecoilState} from "recoil";

function Detail(){
    const {id} = useParams();
    const [{flag, name, desc, priceMedium, priceLarge, thumbImg, fullImg1, fullImg2, fullImg3}, setItem] = useState({});
    const [inputValue, setInputValue] = useState({});
    const [topping, setTopping] = useState(new Set([]));
    const [count, setCount] = useState(1);
    const [selectData, setSelectData] = useRecoilState(selectDataState);
    const sale = 30;
    let index, fullImg = fullImg1;

    const radioOnChange = (e) => {
        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
            [name] : value
        });

        if(name === 'edge'){
            let edgeLists = parentNodeFind(e, 'edge-list').querySelectorAll('input[type="radio"]');

            Object.values(edgeLists).filter((el, idx) => {
                if(el.checked) return index = idx;
            });
        }
    }
    const checkOnChange = (e) => {
        const target = e.target;
        const {value} = target;
        const toppingLists = parentNodeFind(e, 'topping-list');
        const toppingChecked = toppingLists.querySelectorAll('input[type="checkbox"]:checked');

        if(toppingChecked.length > 2){
            target.checked = false;
            return alert('피자 1판당 2개 토핑 추가 가능합니다. (중복불가)');
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
        setSelectData((prev) => ([...prev, {
            ...inputValue,
            "topping" : topping,
            "count" : count,
            "name" : name,
            "thumbImg" : thumbImg,
            "originPrice": (inputValue.size === 'M') ? priceMedium: priceLarge,
            "toppingPrice" : topping.size === 0 ? 0 : toppingList.filter(el => el.name === topping[0] || el.name === topping[1]).reduce((acc, cur) => acc.price + cur.price),
            "sale": sale
        }]));
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

    const {edgeList, toppingList} = selectListData;

    return (
        <Layout header={{title: `${name}`, backBtn:"true"}}  bottomMenu>
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
                <Button text="장바구니 담기" size="m" type="primary" addClass="btn-cart" onClick={cartBtnOnClick}/>
            </div>
        </Layout>
    )
}

export default Detail;