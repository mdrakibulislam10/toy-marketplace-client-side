import { Link } from "react-router-dom";
import banner1 from "../../../assets/bannerImg/b1.jpg";
import banner2 from "../../../assets/bannerImg/b2.jpg";
import banner3 from "../../../assets/bannerImg/b3.jpg";

const Banner = () => {
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className="mb-16">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded md:h-screen" style={{ opacity: "0.9", backgroundImage: `url(${banner2})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-5xl">
                                <h2 className="mb-5 text-3xl md:text-5xl font-bold text-blue-600">Discover a World of Miniature Racing</h2>
                                <p className="mb-5 text-lg font-bold">Embark on a Thrilling Journey of Toy Car Racing! Unleash Your Inner Speedster and Experience the Excitement of High-Octane Fun. Get Ready to Race, Drift, and Conquer with Our Incredible Collection of Toy Cars!</p>
                                <Link to={"/allToys"} className="btn btn-primary">View All Toys</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero rounded md:h-screen" style={{ opacity: "0.9", backgroundImage: `url(${banner1})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-5xl">
                                <h2 className="mb-5 text-3xl md:text-5xl font-bold text-blue-600">Discover a World of Miniature Racing</h2>
                                <p className="mb-5 text-lg font-bold">Embark on a Thrilling Journey of Toy Car Racing! Unleash Your Inner Speedster and Experience the Excitement of High-Octane Fun. Get Ready to Race, Drift, and Conquer with Our Incredible Collection of Toy Cars!</p>
                                <Link to={"/allToys"} className="btn btn-primary">View All Toys</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero rounded md:h-screen" style={{ opacity: "0.9", backgroundImage: `url(${banner3})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-5xl">
                                <h2 className="mb-5 text-3xl md:text-5xl font-bold text-blue-600">Discover a World of Miniature Racing</h2>
                                <p className="mb-5 text-lg font-bold">Embark on a Thrilling Journey of Toy Car Racing! Unleash Your Inner Speedster and Experience the Excitement of High-Octane Fun. Get Ready to Race, Drift, and Conquer with Our Incredible Collection of Toy Cars!</p>
                                <Link to={"/allToys"} className="btn btn-primary">View All Toys</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;