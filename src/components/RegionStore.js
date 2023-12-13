import "../styles/store.scss";

function RegionStore(){
    return (
        <div className="result-store">
            <div className="inp search">
                <div className="input-area">
                    <input type="text" placeholder="건물명, 도로명 또는 지번으로 검색" />
                    <button className="btn-del"></button>
                </div>
                <button className="btn-search"></button>
            </div>
            <p className="result">검색 결과 <span>6</span>건</p>
        </div>
    );
}

export default RegionStore;