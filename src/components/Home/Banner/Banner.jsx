import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import Banner2 from "../../../assets/banner2.webp"
import Banner3 from "../../../assets/banner3.webp"
// import BannerImg from "../../../assets/bannerImg.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALE</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aspernatur molestias culpa modi architecto impedit quasi incidunt voluptate est facere.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="BannerImage" />
            {/* <img className="banner-img" src={Banner2} alt="BannerImage" />
            <img className="banner-img" src={Banner3} alt="BannerImage" /> */}
        </div>
         </div>;
};

export default Banner;
 