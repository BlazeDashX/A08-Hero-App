import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Facts from "../../components/Facts/Facts";
import TrendApp from "../../components/TrendApp/TrendApp";

const Home = () => {

    const [appsData, setAppsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. Fetch the data when the component mounts
    useEffect(() => {
        fetch("/appData.json")
            .then((response) => response.json())
            .then((data) => {
                setAppsData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching app data:", error);
                setIsLoading(false);
            });
    }, []); 

    return (
        <div>
            <Hero />
            <Facts />
            
            {isLoading ? (
                <div className="flex justify-center py-12 text-gray-500">
                    Loading trending apps...
                </div>
            ) : (
                <TrendApp apps={appsData} />
            )}
        </div>
    );
};

export default Home;