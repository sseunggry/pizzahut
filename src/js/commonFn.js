export const parentNodeFind = (e, className) => {
    while(e.target.className !== className){
        e.target = e.target.parentNode;
    }
    if(e.target.className === className){
        return e.target;
    }
}

export const priceDot = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}