import "../styles/popup.scss";

function Popup({children, addClass = '', dataPop = ''}){
    return (
        <div className={`popup-wrap ${addClass}`} data-pop={dataPop}>
            <div className="popup-inner">
                <div className="popup-con">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup;