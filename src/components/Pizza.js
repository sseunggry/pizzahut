import {Link} from "react-router-dom";
import data from '../data/menu_pizza.json';

import '../styles/menu.scss';

const contentImg = "/resource/img/contents";

function Pizza(){
    const pizza = data.pizzaList;
    const priceDot = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <div className="menu-pizza">
            <ul className="thumb-list">
                {pizza.map(({flag, name, price, img}, idx) =>
                    <li key={idx}>
                        <Link to="">
                            <div className="thumb-img">
                                {flag ? <span className={`flag ${flag}`}>{flag}</span> : null}
                                <div className="img-con">
                                    <img src={`${contentImg}/${img}`} alt={name}/>
                                </div>
                            </div>
                            <dl className="thumb-txt">
                                <dt>{name}</dt>
                                <dd className="price">
                                    {price.mediumOrigin ? (
                                        <p className="list">
                                            <span className="size">M</span>
                                            <span className="sale-price">{priceDot(Math.ceil(price.mediumOrigin * 0.8))}원</span>
                                            <span className="origin-price">{priceDot(price.mediumOrigin)}원</span>
                                        </p>
                                    ) : null}
                                    {price.largeOrigin ? (
                                        <p className="list">
                                            <span className="size">L</span>
                                            <span className="sale-price">{priceDot(Math.ceil(price.largeOrigin * 0.8))}원</span>
                                            <span className="origin-price">{priceDot(price.largeOrigin)}원</span>
                                        </p>
                                    ) : null}
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