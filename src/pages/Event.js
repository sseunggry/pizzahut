import Layout from "../components/Layout";
import Tab from "../components/Tab";
import {useRecoilValue} from "recoil";
import {eventTabState} from "../recoil/atoms";

import EventList from "../components/EventList";
import PartnerList from "../components/PartnerList";

function Event(){
    const eventTab = useRecoilValue(eventTabState);

    return (
        <Layout header={{title: "이벤트"}}>
            <Tab
                addClass="-line"
                list={["이벤트", "제휴할인"]}
                listClass={["event", "partner"]}
            />
            {eventTab === 'event' && <EventList />}
            {eventTab === 'partner' && <PartnerList />}
        </Layout>
    );
}

export default Event;