import "../styles/layout.scss";
import Header from "./_inc/Header";
import BottomMenu from "./_inc/BottomMenu";
import Footer from "./_inc/Footer";

function Layout({header, bottomMenu = true, footer, children}){
    return (
        <div className="wrap">
            {header && (
                <Header
                    title={header.title}
                    address={header.address}
                    backBtn={header.backBtn}
                />
            )}
            
            <div className={!bottomMenu ? 'container no-bottom' : 'container'}>
                {children}
            </div>
    
            {footer && <Footer />}
            
            {bottomMenu && <BottomMenu />}
        </div>
    )
}

export default Layout;