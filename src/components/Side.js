import {Link} from "react-router-dom";
import {menuListData, contentImg} from "../recoil/atoms";

function Side() {
    const side = menuListData.sideList;
    const priceDot = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <div className="menu-side">
            <ul className="thumb-list">
            {side.map(({discount, name, priceOrigin, thumbImg}, idx) =>
                <li key={idx}>
                    <Link to="">
                        <div className="thumb-img">
                            {discount && <span className={`flag discount`}>{discount}%</span>}
                            <div className="img-con">
                                <img src={`${contentImg}/${thumbImg}`} alt={name}/>
                            </div>
                        </div>
                        <dl className="thumb-txt">
                            <dt>{name}</dt>
                            <dd className="price">
                                <span className={discount ? 'origin-price' : 'origin-price large'}>{priceDot(priceOrigin)}원</span>
                                {discount && (
                                    <span className="sale-price">
                                        {priceDot(Math.ceil(priceOrigin*(1-discount/100)))+'원'}
                                    </span>
                                )}
                            </dd>
                        </dl>
                    </Link>
                    <div className="btn-count">
                        <button className="minus"></button>
                        <span className="num">0</span>
                        <button className="plus"></button>
                    </div>
                </li>
            )}
        </ul>
        </div>
    )
}

export default Side;