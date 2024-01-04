import Layout from "../components/Layout";
import {useParams} from "react-router-dom";
import {contentImg, eventListData} from "../recoil/atoms";
import {useEffect, useState} from "react";

function EventDetail(){
    const {id} = useParams();
    const [{tit, period, detailImg}, setData] = useState({});

    useEffect(() => {
        const idx = id.split('_')[1];
        setData(eventListData[idx-1]);
    }, []);

    return (
        <Layout header={{title: "이벤트 상세", backBtn: true}}>
            <div className="event-detail">
                <div className="tit">
                    <h2>{tit}</h2>
                    <p>{period}</p>
                </div>
                <div className="info">
                    <div className="img">
                        <img src={`${contentImg}/${detailImg}`} alt=""/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EventDetail;