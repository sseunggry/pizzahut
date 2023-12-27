import Layout from "../components/Layout";
import Button from "../components/Button";

import "../styles/address.scss";

function Address(){
    return(
        <Layout header={{title: '주소 설정', backBtn: 'true'}} bottomMenu={false}>
            <div className="inp search">
                <div className="input-area">
                    <input type="text" placeholder="건물명, 도로명 또는 지번으로 검색" />
                    <button className="btn-del"></button>
                </div>
                <button className="btn-search"></button>
            </div>
            <Button text="현재 위치로 주소 찾기" size="m" type="primary" addClass="find-address" />
        </Layout>
    )
}

export default Address;