import useTitle from "../../../hooks/useTitle";
import BabysNeedSection from "../BabysNeedSection/BabysNeedSection";
import Banner from "../Banner/Banner";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import OurProducts from "../OurProducts/OurProducts";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import SubCategory from "../SubCategory/SubCategory";

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner />
            <PhotoGallery />
            <SubCategory />
            <OurProducts />
            <CustomerReviews />
            <BabysNeedSection />
        </div>
    );
};

export default Home;