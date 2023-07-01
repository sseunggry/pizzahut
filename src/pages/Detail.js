import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import menuListData from "../data/menu_list.json";
import {useEffect, useState} from "react";
import {contentImg} from "../recoil/atoms";

function Detail(){
    const {id} = useParams();
    const [{flag, name, desc, price, thumbImg, fullImg1, fullImg2, fullImg3}, setItem] = useState([]);
    useEffect(() => {
        const data = menuListData.pizzaList;
        const idx = data.findIndex((item) =>  item.id === id);
        setItem(data[idx]);
    }, []);
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
                <div className="select-edge">
                    <h4>엣지 선택</h4>
                    <ul className="edge-list">
                        <li>
                           <dl>
                               <dt>리치골드엣지</dt>
                               <dd><img src={`${contentImg}/pizza_edge_01.png`} alt="" /></dd>
                           </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>치즈크러스트엣지</dt>
                                <dd><img src={`${contentImg}/pizza_edge_02.png`} alt="" /></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>치즈그라탕엣지<span>(+1000원)</span></dt>
                                <dd><img src={`${contentImg}/pizza_edge_03.png`} alt="" /></dd>
                            </dl>
                        </li>
                    </ul>
                    <p className="noti-txt">할인 적용 시 ‘엣지 추가 금액’은 할인이 불가합니다.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Detail;