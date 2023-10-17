import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import {useEffect, useState} from "react";
import {menuListData, selectListData, contentImg, selectDataState} from "../recoil/atoms";

import '../styles/detail.scss';
import Button from "../components/Button";
import {useRecoilState} from "recoil";

function Detail(){
    const {id} = useParams();
    const [{flag, name, desc, priceMedium, priceLarge, thumbImg, fullImg1, fullImg2, fullImg3}, setItem] = useState({});
    const [inputValue, setInputValue] = useState({});
    const [topping, setTopping] = useState(new Set());
    const [count, setCount] = useState(1);
    const [selectData, setSelectData] = useRecoilState(selectDataState);

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
            [name] : value
        })
    }
    const checkOnChange = (value, isChecked) => {
        if(isChecked) {
            topping.add(value);
            setTopping(topping);
        } else{
            topping.delete(value);
            setTopping(topping);
        }
        // else if(!isChecked && topping.has(value)){
        //     topping.delete(value);
        //     setTopping(topping);
        // }
    }
    const updateSet = (set, value) => {
        const updatedSet = new Set(set);

        if(updatedSet.has(value)){
            updatedSet.delete(value);
        } else{
            updatedSet.add(value);
        }

        return [...updatedSet];
    }
    const handleOnChange = (e) => {
        const {value} = e.target;
        setTopping((prev) => updateSet(prev, value));
    }
    const onClick = () => {
        setSelectData((prev) => ([...prev, {
            ...inputValue,
            "topping" : topping,
            "count" : count,
            "name" : name,
            "thumbImg" : thumbImg
        }]))
    }
    // console.log(selectData, Object.values(topping), topping);
    // console.log(selectData);

    const btnMinusClick = () => {
        if(count > 1){
            setCount( num => num - 1);
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

    const priceDot = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
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
                                <Input type="radio" value={edge} name="edge" id={`radio-edge${idx+1}`} key={idx} onChange={onChange}>
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
                                <Input type="radio" value="M" name="size" id="radio-size1" onChange={onChange}>
                                    <span>M</span>
                                    <span className="price">
                                        <span className="sale">{priceDot(Math.ceil(priceMedium * 0.8))}원</span>
                                        <span className="origin">{priceDot(Math.ceil(priceMedium))}</span>
                                    </span>
                                </Input>
                            )}
                            {priceLarge && (
                                <Input type="radio" value="L" name="size" id="radio-size2" onChange={onChange}>
                                    <span>L</span>
                                    <span className="price">
                                        <span className="sale">{priceDot(Math.ceil(priceLarge * 0.8))}원</span>
                                        <span className="origin">{priceDot(Math.ceil(priceLarge))}</span>
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
                                    <Input type="checkbox" value={name} name="topping" id={`chk-topping${idx+1}`} onChange={handleOnChange}>
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
                            <input type="text" value={count} name="count" onChange={onChange} disabled className="count" />
                            <button className="plus" onClick={btnPlusClick}></button>
                        </dd>
                        <dd className="notice-txt">피자 수량 변경 시 동일한 피자&토핑이 적용됩니다.</dd>
                    </dl>
                </div>
                <Button text="장바구니 담기" size="m" type="primary" addClass="btn-cart" onClick={onClick}/>
            </div>
        </Layout>
    )
}

export default Detail;