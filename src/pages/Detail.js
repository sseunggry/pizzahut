import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Radio from "../components/Radio";
import RadioGroup from "../components/RadioGroup";
import menuListData from "../data/menu_list.json";
import {useEffect, useState} from "react";

import {contentImg} from "../recoil/atoms";

import '../styles/detail.scss';

function Detail(){
    const {id} = useParams();
    const [{flag, name, desc, priceMedium, priceLarge, price, thumbImg, fullImg1, fullImg2, fullImg3}, setItem] = useState({});
    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        const {value, name} = e.target;

        setInputValue({
            ...inputValue,
            [name] : value
        })
    }

    useEffect(() => {
        const data = menuListData.pizzaList;
        const idx = data.findIndex((item) =>  item.id === id);
        setItem(data[idx]);
    }, []);

    console.log(priceMedium, priceLarge);
    for (let key in price) {
        console.log(price[key]);
    }

    const selectList = {
        "edgeList" : [ "리치골드", "치즈크러스트", "치즈그라탕"]
    }
    // const priceDot = (price) => {
    //     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }

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
                    <RadioGroup legend="엣지 선택" addClass="edge-list" >
                        {selectList.edgeList.map((el, idx) => (
                            <Radio type="radio" value={el} name="edge" id={`radio${idx+1}`} key={idx} onChange={onChange}>
                                <img src={`${contentImg}/pizza_edge_0${idx+1}.png`} alt="" />
                                <span>{el}</span>
                            </Radio>
                        ))}
                    </RadioGroup>
                    <p className="notice-txt">할인 적용 시 ‘엣지 추가 금액’은 할인이 불가합니다.</p>
                </div>
                <div className="select-con size">
                    <h4>사이즈 선택</h4>
                    <div className="size-list">
                        {/* {{price}} */}
                        {/* {price.mediumOrigin} */}
                        {/* {price.map((el, idx) => (
                            el
                        ))} */}
                    </div>
                </div>

                <p>{inputValue.edge}</p>
            </div>
        </Layout>
    )
}

export default Detail;