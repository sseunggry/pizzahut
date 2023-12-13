import Layout from "../components/Layout";

import "../styles/address.scss";
import Tab from "../components/Tab";
import {pickupStoreTabState} from "../recoil/atoms";
import {useRecoilValue} from "recoil";
import NearByStore from "../components/NearByStore";
import RegionStore from "../components/RegionStore";

function Pickup(){
    const pickupStoreTab = useRecoilValue(pickupStoreTabState);
    return(
        <Layout header={{title: '포장 매장 선택', backBtn: 'true'}} bottomMenu="false">
            <Tab
                addClass="-line"
                list={["근처 매장 찾기", "지역/매장명 찾기"]}
                listClass={["nearby", "region"]}
            />
            {pickupStoreTab === 'nearby' && <NearByStore />}
            {pickupStoreTab === 'region' && <RegionStore />}

            {/*
            <div className="tab-wrap">
                <Tab
                    addClass="-line"
                    list={["근처 매장 찾기", "지역/매장명 찾기"]}
                    listClass={["nearby-store", "region-store"]}
                />
                <div className="tab-cont">
                    <div className="tab-panel">

                    </div>
                </div>
            </div>
            */}
        </Layout>
    )
}

export default Pickup;