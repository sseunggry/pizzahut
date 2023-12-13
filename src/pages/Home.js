import Layout from "../components/Layout";
import Banner from "../components/Banner";
import MainOrder from "../components/MainOrder";
import Tab from "../components/Tab";
import SlideBanner from "../components/SlideBanner";

function Home(){
    return(
        <Layout header={{address: '서울특별시 강남구 테헤란로'}} >
            <Banner
                text='배달도 포장도'
                point='50% 반값 할인!'
            />
            <MainOrder
                text="불고기 쉬림프"
            />
            <Tab
                addClass="-round"
                list={["배달", "포장"]}
                link={["", "/pickup"]}
            />
    
            <SlideBanner
                list={[
                    {
                        tit: "사이드 메뉴 50% OFF",
                        desc: "인기 사이드 모조리 반값!",
                        img: "main_banner_01.png"
                    },
                    {
                        tit:"새로운 와우박스",
                        desc: "피자와 사이드를 한번에",
                        img: "main_banner_05.png"
                    }
                ]}
                addClass="main-slider"
            />
        </Layout>
    )
}

export default Home;