import {atom} from "recoil";
import menuData from "../data/menu_list.json";
import selectData from "../data/select_list.json";

//variable
export const commonImg = "/resource/img/common";
export const contentImg = "/resource/img/contents";
export const menu = [
    {
        link: "/",
        img: "ico_menu_home",
        text: "홈",
    },
    {
        link: "/menu",
        img: "ico_menu_menu",
        text: "메뉴",
    },
    {
        link: "/myPage",
        img: "ico_menu_my",
        text: "마이",
    },
    {
        link: "/event",
        img: "ico_menu_event",
        text: "이벤트",
    }
];

export const menuListData = menuData;
export const selectListData = selectData;

//atom
export const menuTabState = atom({
    key: "menuTabState",
    default: "pizza"
})