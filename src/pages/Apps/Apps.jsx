import { Suspense } from "react";
import PageHead from "../../components/PageHead/PageHead";
import AppsList from "../../components/AppList/AppList";

const Apps = () => {
  const appsPromise = fetch("/appData.json").then((res) => res.json());

  return (
    <div>
      <PageHead
        title="Our All Applications"
        description="Explore All Apps on the Market developed by us. We code for Millions"
      />

      <Suspense fallback={<p>Loading Apps...</p>}>
        <AppsList appsPromise={appsPromise} />
      </Suspense>
    </div>
  );
};

export default Apps;