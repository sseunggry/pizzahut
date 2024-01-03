import Layout from "../components/Layout";
import Tab from "../components/Tab";
import Pizza from "../components/Pizza";
import Set from "../components/Set";
import Side from "../components/Side";
import {useRecoilValue} from "recoil";
import {menuTabState} from "../recoil/atoms";

import '../styles/menu.scss';

function Menu(){
    const menuTab = useRecoilValue(menuTabState);
    return (
        <Layout header={{title : "메뉴", backBtn: true}} bottomMenu={false}>
            <div className="menu">
                <Tab
                    addClass="-line"
                    list={["피자", "세트", "사이드"]}
                    listClass={["pizza", "set", "side"]}
                />
                {menuTab === 'pizza' && <Pizza />}
                {menuTab === 'set' && <Set />}
                {menuTab === 'side' && <Side />}
            </div>
        </Layout>
    )
}

export default Menu;