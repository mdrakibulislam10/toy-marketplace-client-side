import forSleepIcon from "../../../assets/babysNeedPic/sleep.webp";
import forBookIcon from "../../../assets/babysNeedPic/book.avif";
import forCreativeIcon from "../../../assets/babysNeedPic/creative.avif";

const BabysNeedSection = () => {
    return (
        <section className="mt-20 mx-1 md:mx-10 lg:mx-20">
            <h1 className="text-4xl md:text-5xl font-semibold text-center text-pink-600">What does your child need</h1>
            <div className="border-2 w-40 mx-auto mt-5 border-blue-600 mb-7"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-14">
                <div className="mx-auto text-center" data-aos="flip-left" data-aos-duration="2000">
                    <img className="mx-auto" src={forSleepIcon} alt="" />
                    <h3 className="text-3xl font-semibold mb-3">Sleep</h3>
                    <p>Your child needs more than 10 hours of sleep per day for mental and physical health.</p>
                </div>
                <div className="mx-auto text-center" data-aos="flip-up" data-aos-duration="2000">
                    <img className="mx-auto" src={forBookIcon} alt="" />
                    <h3 className="text-3xl font-semibold mb-3">Book</h3>
                    <p>Buy books for your child to increase intelligence and mental development.</p>
                </div>
                <div className="mx-auto text-center" data-aos="flip-right" data-aos-duration="2000">
                    <img className="mx-auto" src={forCreativeIcon} alt="" />
                    <h3 className="text-3xl font-semibold mb-3">Creative</h3>
                    <p>Buy creative toys for your child to boost his intelligence and develop his mind.</p>
                </div>
            </div>
        </section>
    );
};

export default BabysNeedSection;