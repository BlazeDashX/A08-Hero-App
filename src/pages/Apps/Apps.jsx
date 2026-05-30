import PageHead from "../../components/PageHead/PageHead";
import Search from "../../components/Search/Search";
import AppsList from "../../components/AppList/AppList";
import { Suspense } from "react";

const Apps = () => {

    const appsPromise = fetch("/appData.json").then((res) => res.json());

    return (
        <div>
            <PageHead 
            title="Our All Applications" 
            description="Explore All Apps on the Market developed by us. We code for Millions" />

            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2>(<span></span>) app found</h2>
                     <Search />
                </div>
                    <Suspense fallback={<p>Loading Apps...</p>}>
      <AppsList appsPromise={appsPromise} />
    </Suspense>
            </div>
        </div>
    );
};

export default Apps;

