import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import {useEffect, useState} from "react";
import {menuListData, selectListData, contentImg} from "../recoil/atoms";

import '../styles/detail.scss';

function Detail(){
    const {id} = useParams();
    const [{flag, name, desc, priceMedium, priceLarge, thumbImg, fullImg1, fullImg2, fullImg3}, setItem] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState(1);

    const onChange = (e) => {
        const {value, name} = e.target;

        // setInputValue((prev) => ({
        //     ...prev,
        //     [name] : value
        // })

        setInputValue({
            ...inputValue,
            [name] : value
        })
    }

    const btnMinusClick = () => {
        if(count > 1){
            setCount((num) => (
                num - 1
            ));
        }
    }
    const btnPlusClick = () => {
        setCount((num) => (
            num + 1
        ));
    }

    console.log(inputValue);

    useEffect(() => {
        const data = menuListData.pizzaList;
        const idx = data.findIndex((item) =>  item.id === id);
        setItem(data[idx]);
    }, []);

    // for (let key in price) {
    //     console.log(price[key]);
    // }

    // const selectList = {
    //     "edgeList" : ["리치골드", "치즈크러스트", "치즈그라탕"],
    //     "sizeList" : [{"M" : priceMedium}, {"L": priceLarge}],
    //     "toppingList" : [
    //         {
    //             "name" : "",
    //             "price" : "",
    //             "img" : "",
    //         }
    //     ]
    // }
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
                <div className="select-con edge">
                    <h4>엣지 선택</h4>
                    <div className="edge-list">
                        {edgeList.map((edge, idx) => (
                            <Input type="radio" value={edge} name="edge" id={`radio-edge${idx+1}`} key={idx} onChange={onChange}>
                                <img src={`${contentImg}/pizza_edge_0${idx+1}.png`} alt="" />
                                <span>{edge}</span>
                            </Input>
                        ))}
                    </div>
                    <p className="notice-txt">할인 적용 시 ‘엣지 추가 금액’은 할인이 불가합니다.</p>
                </div>
                <div className="select-con size">
                    <h4>사이즈 선택</h4>
                    <div className="size-list">
                        <Input type="radio" value="M" name="size" id="radio-size1" onChange={onChange}>
                            <span>M</span>
                            <span className="price">
                                <span className="sale">{priceDot(Math.ceil(priceMedium * 0.8))}원</span>
                                <span className="origin">{priceDot(Math.ceil(priceMedium))}</span>
                            </span>
                        </Input>
                        <Input type="radio" value="L" name="size" id="radio-size2" onChange={onChange}>
                            <span>L</span>
                            <span className="price">
                                <span className="sale">{priceDot(Math.ceil(priceLarge * 0.8))}원</span>
                                <span className="origin">{priceDot(Math.ceil(priceLarge))}</span>
                            </span>
                        </Input>

                        {/*{selectList.sizeList.map((size, idx) => (*/}
                        {/*    <Input type="radio" value={Object.keys(size)} name="size" id={`radio-size${idx+1}`} key={idx} onChange={onChange}>*/}
                        {/*        <span>{Object.keys(size)}</span>*/}
                        {/*        <span className="price">*/}
                        {/*            <span className="sale">{priceDot(Math.ceil(Object.values(size) * 0.8))}원</span>*/}
                        {/*            <span className="origin">{Object.values(size)}</span>*/}
                        {/*        </span>*/}
                        {/*    </Input>*/}
                        {/*))}*/}
                    </div>
                </div>
                <div className="select-con topping">
                    <h4>토핑 추가</h4>
                    <ul className="topping-list">
                        {toppingList.map(({name, price, img}, idx) => (
                            <li key={idx}>
                                <Input type="checkbox" value={name} name="topping" id={`chk-topping${idx+1}`} onChange={onChange}>
                                    <img src={`${contentImg}/pizza_topping_0${idx+1}.png`} alt="" />
                                    <span className="name">{name}</span>
                                    <span className="price">{priceDot(Math.ceil(price))}</span>
                                    <i className="icon-check"></i>
                                </Input>
                            </li>
                        ))}
                    </ul>
                    <p className="notice-txt">피자 1판당 2개 토핑 추가 가능합니다. (중복불가)</p>
                </div>
                <div className="select-con count">
                    <h4>피자 수량 선택</h4>
                    <div className="btn_count">
                        <button className="minus" onClick={btnMinusClick}></button>
                        <span className="count">{count}</span>
                        <button className="plus" onClick={btnPlusClick}></button>
                    </div>
                    <p className="notice-txt">피자 수량 변경 시 동일한 피자&토핑이 적용됩니다.</p>
                </div>


                <p>{inputValue.edge} {inputValue.size} {inputValue.topping}</p>
            </div>
        </Layout>
    )
}

export default Detail;