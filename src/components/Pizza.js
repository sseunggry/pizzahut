import {Link} from "react-router-dom";
import {menuListData, contentImg} from "../recoil/atoms";

function Pizza(){
    const pizza = menuListData.pizzaList;
    const priceDot = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <div className="menu-pizza">
            <ul className="thumb-list">
                {pizza.map(({flag, name, priceMedium, priceLarge, thumbImg, id}, idx) =>
                    <li key={idx}>
                        <Link to={`/menu/${id}`}>
                            <div className="thumb-img">
                                {flag && <span className={`flag ${flag}`}>{flag}</span>}
                                <div className="img-con">
                                    <img src={`${contentImg}/${thumbImg}`} alt={name}/>
                                </div>
                            </div>
                            <dl className="thumb-txt">
                                <dt>{name}</dt>
                                <dd className="price">
                                    {priceMedium && (
                                        <p className="list">
                                            <span className="size">M</span>
                                            <span className="sale-price">{priceDot(Math.ceil(priceMedium * 0.8))}원</span>
                                            <span className="origin-price">{priceDot(priceMedium)}원</span>
                                        </p>
                                    )}
                                    {priceLarge && (
                                        <p className="list">
                                            <span className="size">L</span>
                                            <span className="sale-price">{priceDot(Math.ceil(priceLarge * 0.8))}원</span>
                                            <span className="origin-price">{priceDot(priceLarge)}원</span>
                                        </p>
                                    )}
                                </dd>
                                <dd className="info-txt">
                                    <span className="c-red">배달 30%</span>
                                    <span>포장 40%</span>
                                </dd>
                            </dl>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pizza;