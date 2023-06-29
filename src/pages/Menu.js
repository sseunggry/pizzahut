import Header from "../components/_inc/Header";
import BottomMenu from "../components/_inc/BottomMenu";
import Tab from "../components/Tab";
import Pizza from "../components/Pizza";
import Set from "../components/Set";
import Side from "../components/Side";
import {useRecoilValue} from "recoil";
import {menuTabState} from "../recoil/atoms";

function Menu(){
    const menuTab = useRecoilValue(menuTabState);
    let content;
    if(menuTab === 'set'){
        content = <Set />
    } else if(menuTab === 'side'){
        content = <Side />
    } else {
        content = <Pizza />
    }
    // console.log(menuTab);
    return (
        <div className="wrap">
            <Header headTxt="메뉴" />
    
            <div className="container">
                <div className="menu">
                    <Tab
                        addClass="-line"
                        list={["피자", "세트", "사이드"]}
                        listClass={["pizza", "set", "side"]}
                    />
                    {/*<ThumbList*/}
                    {/*    data={`${data}.${menuTab}List`}*/}
                    {/*/>*/}
                    {content}
                </div>
            </div>
    
            <BottomMenu />
        </div>
    )
}

export default Menu;