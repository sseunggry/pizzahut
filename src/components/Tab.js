import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {eventTabState, menuTabState, pickupStoreTabState} from "../recoil/atoms";
import '../styles/tab.scss';

function Tab({list, addClass, active= 0, link= [], listClass = []}){
    const setMenuTab = useSetRecoilState(menuTabState);
    const setEventTab = useSetRecoilState(eventTabState);
    const setPickupTab = useSetRecoilState(pickupStoreTabState);

    useEffect(() => {
        const tab = document.querySelectorAll('.tab-round, .tab-line');
        tab.forEach((el, idx) => {
            el.childNodes[0].classList.add('active')
        })
        setMenuTab('pizza');
        setEventTab('event');
        setPickupTab('nearby');
    }, []);
        
    const onClick = (e) => {
        const $li = e.target.parentElement;
        const $ul = $li.parentElement;
        $ul.childNodes.forEach((el, idx) => {
            el.classList.remove('active')
        });
        $li.classList.add('active');

        setMenuTab($li.classList[0]);
        setEventTab($li.classList[0]);
        setPickupTab($li.classList[0]);
    }
    return (
        <ul className={addClass ? `tab${addClass}` : 'tab'}>
            {list.map((item, idx) =>
                <li key={idx} className={listClass ? listClass[idx] : ''} onClick={onClick}>
                    <Link to={link[idx]}>{item}</Link>
                </li>
            )}
        </ul>
    )
}

export default Tab;