import "../styles/layout.scss";
import Header from "./_inc/Header";
import BottomMenu from "./_inc/BottomMenu";

function Layout({backBtn= null, headTxt, content}){
    return (
        <div className="wrap">
            <Header
                backBtn={backBtn}
                headTxt={headTxt}
            />
    
            <div className="container">
                {content}
            </div>
    
            <BottomMenu />
        </div>
    )
}

export default Layout;