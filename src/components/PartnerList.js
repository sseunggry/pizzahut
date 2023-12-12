import "../styles/event.scss";
import {contentImg, partnerListData} from "../recoil/atoms";

function PartnerList(){
    return (
        <ul className="partner-list">
            {partnerListData.map(({percent, img, name, desc}, idx) => (
                <li key={idx}>
                    <p className="tag percent">{percent}%</p>
                    <div className="img">
                        <img src={`${contentImg}/${img}`} alt=""/>
                    </div>
                    <dl className="txt">
                        <dt>{name}</dt>
                        {desc.desc1 && (
                            <dd>{desc.desc1[0]} <span>{desc.desc1[1]}</span> {desc.desc1[2] ? desc.desc1[2] : ''}</dd>
                        )}
                        {desc.desc2 && (
                            <dd>{desc.desc2[0]} <span>{desc.desc2[1]}</span></dd>
                        )}
                        {desc.desc3 && (
                            <dd>{desc.desc3[0]} <span>{desc.desc3[1]}</span></dd>
                        )}
                    </dl>
                </li>
            ))}
        </ul>
    );
}

export default PartnerList;