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
                        desc: "인기 사이드 모조리 반값!",
                        tit: "사이드 메뉴 50% OFF",
                        img: "main_banner_01.png"
                    },
                    {
                        desc: "피자알볼로 X 제주맥주",
                        tit:"제주 스페셜 에디션",
                        img: "main_banner_02.png"
                    },
                    {
                        desc: "라지 두판에 더블박스",
                        tit:"두 판에 19,900원",
                        img: "main_banner_03.png"
                    },
                    {
                        desc: "Classic of Classic",
                        tit:"웰빙 피자 스페셜",
                        img: "main_banner_04.png"
                    },
                    {
                        desc: "피자와 사이드를 한번에",
                        tit:"새로운 와우박스",
                        img: "main_banner_05.png"
                    },
                    {
                        desc: "모든 프리미엄 피자 할인",
                        tit:"포장도! 배달도!",
                        img: "main_banner_06.png"
                    }
                ]}
                addClass="main-slider"
            />
        </Layout>
    )
}

export default Home;