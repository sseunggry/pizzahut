import {Link} from "react-router-dom";
import {contentImg} from "../recoil/atoms";

import menuListData from "../data/menu_list.json";

function Set() {
    const set = menuListData.setList;
    const priceDot = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <div className="menu-set">
            <ul className="thumb-list">
                {set.map(({flag, name, price, thumbImg}, idx) =>
                    <li key={idx}>
                        <Link to="">
                            <div className="thumb-img">
                                {flag && <span className={`flag ${flag}`}>{flag}</span>}
                                <div className="img-con">
                                    <img src={`${contentImg}/${thumbImg}`} alt={name}/>
                                </div>
                            </div>
                            <dl className="thumb-txt">
                                <dt>{name}</dt>
                                <dd className="info-txt">
                                    <span>{name.slice(-2)}피자</span>
                                    <span className="ico-plus"></span>
                                    <span>사이드</span>
                                    <span className="ico-plus"></span>
                                    <span>음료</span>
                                </dd>
                                <dd className="price">
                                    {price.mediumOrigin ? (
                                        <p className="list">
                                            <span className="size">M</span>
                                            <span className="origin-price">{priceDot(price.mediumOrigin)}원</span>
                                        </p>
                                    ) : null}
                                    {price.largeOrigin ? (
                                        <p className="list">
                                            <span className="size">L</span>
                                            <span className="origin-price">{priceDot(price.largeOrigin)}원</span>
                                        </p>
                                    ) : null}
                                </dd>
                            </dl>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Set;