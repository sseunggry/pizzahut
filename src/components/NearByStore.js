import {Link} from "react-router-dom";
import {contentImg, storeListData} from "../recoil/atoms";

import "../styles/store.scss";

function NearByStore(){
    return (
        <div className="result-store">
            <p className="result">검색 결과 <span>6</span>건</p>
            <div className="store-list">
                {storeListData.map(({distance, name, address, packTime, openHours, tel}, idx) => (
                    <div key={idx} className="item">
                        <Link to=""></Link>
                        <dl>
                            <dt>
                                <span className="distance c-blue">1.8km</span> {name}
                            </dt>
                            <dd>{address}</dd>
                            <dd>예상 포장시간 : {packTime}</dd>
                            <dd>운영시간 : {openHours}</dd>
                            <dd className="tel"><a href={`tel:${tel}`}>매장 전화번호 : {tel}</a></dd>
                        </dl>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NearByStore;