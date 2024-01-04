import Layout from "../components/Layout";
import Button from "../components/Button";

import "../styles/mypage.scss";
import Tab from "../components/Tab";
import CartList from "../components/CartList";

function MyPage() {
    return (
        <Layout header={{title: "마이페이지"}} bottomMenu={false}>
            <div className="login-info">
                <h2 className="title">
                    피자알볼로의 <br/>
                    <strong className="bold">특별한 멤버십혜택</strong>을 <br/>
                    누려보세요.
                </h2>
                
                <div className="btn-wrap">
                    <Button text="멤버십 혜택" size="s" type="sub-primary" addClass="c-indigo" link={"/event"} />
                    <Button text="로그인 하기" size="s" type="sub-primary" addClass="c-indigo" />
                </div>
            </div>
            
            <div className="cart-info">
                <Tab addClass="-square" list={["배달", "포장"]} link={["", "/pickup"]} listClass={['active', '']}/>
                <CartList />
            </div>

        </Layout>
    )
}

export default MyPage;