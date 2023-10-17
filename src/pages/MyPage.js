import Layout from "../components/Layout";
import Button from "../components/Button";

import "../styles/mypage.scss";
import Tab from "../components/Tab";
import {useRecoilState} from "recoil";
import {contentImg, selectDataState} from "../recoil/atoms";

function MyPage() {
    const [selectData, setSelectData] = useRecoilState(selectDataState);
    // const {thumbImg, name, edge, size, topping, count} = selectData;

    const deleteClick = (e) => {
        const $el = e.target;
        const listLi = $el.parentNode;
        const lists = listLi.parentNode.children;

        const index = Array.from(lists).indexOf(listLi);
        const newSelectData = selectData.filter((data) => (
            data !== selectData[index]
        ))
        setSelectData(newSelectData);
    }
    console.log(selectData);

    return (
        <Layout header={{title: "마이페이지"}}>
            <div className="login-info">
                <h2 className="title">
                    피자알볼로의 <br/>
                    <strong className="bold">특별한 멤버십혜택</strong>을 <br/>
                    누려보세요.
                </h2>
                
                <div className="btn-wrap">
                    <Button text="멤버십 혜택" size="m" type="sub-primary" addClass="c-indigo" />
                    <Button text="로그인 하기" size="m" type="sub-primary" addClass="c-indigo" />
                </div>
            </div>
            
            <div className="cart-info">
                <Tab addClass="-round" list={["배달", "포장"]} />
                <ul className="cart-list">
                    {selectData.map(({thumbImg, name, edge, size, topping, count}, idx) => (
                        <li key={idx}>
                            <img src={`${contentImg}/${thumbImg}`} alt="" />
                            <div className="txt-con">
                                <p>
                                    {name}
                                    <span className="c-red">({size})</span>
                                    <span className="count c-red">{count}개</span>
                                </p>
                                <dl>
                                    <dt>엣지</dt>
                                    <dd>{edge} 엣지</dd>
                                </dl>
                                <dl>
                                    <dt>토핑</dt>
                                    <dd>
                                        {topping.join(', ')}
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>수량</dt>
                                    <dd>{count}</dd>
                                </dl>
                            </div>
                            <button className="btn-delete" onClick={deleteClick}></button>
                            <div className="price-con">
                                <span className="origin_price">38,900원</span>
                                <span className="sale_percent c-red">30%</span>
                                <span className="price">28,130원</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </Layout>
    )
}

export default MyPage;