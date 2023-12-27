import {Link} from "react-router-dom";
import {menuListData, contentImg} from "../recoil/atoms";
import {priceDot} from "../js/commonFn";

function Set() {
    const set = menuListData.setList;
    return (
        <div className="menu-set">
            <ul className="thumb-list">
                {set.map(({flag, name, priceMedium, priceLarge, thumbImg}, idx) =>
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
                                    {priceMedium ? (
                                        <p className="list">
                                            <span className="size">M</span>
                                            <span className="origin-price">{priceDot(priceMedium)}원</span>
                                        </p>
                                    ) : null}
                                    {priceLarge ? (
                                        <p className="list">
                                            <span className="size">L</span>
                                            <span className="origin-price">{priceDot(priceLarge)}원</span>
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