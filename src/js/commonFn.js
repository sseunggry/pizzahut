//부모요소 찾기 함수
export const parentNodeFind = (e, className) => {
    let el = e.target;

    if(!(el === undefined)){
        while(!el.classList.contains(className)){
            el = el.parentNode;
        }
    }
    return el;
}

//3자리 수마다 콤마 찍기
export const priceDot = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//팝업 오픈
export const popupOpen = (popData) => {
    if(popData === '' || popData == null) return;

    let popupWrap = document.querySelectorAll('.popup-wrap');
    let popup = Object.values(popupWrap).filter((el) => el.dataset.pop === popData);
    popup.map((el) => el.classList.toggle('open'));
}

//팝업 닫기
export const popupClose = (e) => {
    const popupWrap = parentNodeFind(e, 'popup-wrap');
    // const popupWrap = parentNodeFind(e, '12325456');
    console.log(popupWrap);

    popupWrap.classList.remove('open');
}