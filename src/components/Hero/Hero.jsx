import heroImage from "../../assets/hero.png";
import playStoreImg from "../../assets/playstore.png";
import appStoreImg from "../../assets/appstore.png";
const Hero = () => {
    return (
        <div>
                       <div className="hero flex flex-col px-4 sm:px-6 lg:px-12">
                <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold pt-10 lg:pt-20 mb-4 leading-tight">
                    We Build <br />
                    <span className="text-[#9F62F2]">Productive</span> Apps
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-[#627382] mb-8 lg:mb-10 max-w-5xl">
                    At HERO.IO, we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting. Our goal is to turn your ideas
                    into digital experiences that truly make an impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10">
                    <button className="flex items-center justify-center gap-2 px-5 py-3 border rounded-lg">
                        <img
                            src={playStoreImg}
                            alt="Google Play"
                            className="w-5 h-5"
                        />
                        Google Play
                    </button>

                    <button className="flex items-center justify-center gap-2 px-5 py-3 border rounded-lg">
                        <img
                            src={appStoreImg}
                            alt="App Store"
                            className="w-5 h-5"
                        />
                        App Store
                    </button>
                </div>

                <img
                    src={heroImage}
                    alt="Hero"
                    className="w-full max-w-7xl mx-auto object-contain"
                />
            </div> 
        </div>
    );
};

export default Hero;