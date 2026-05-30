import { use } from "react";
import AppCard from "../../components/AppCard/AppCard";

const AppsList = ({ appsPromise }) => {
  const apps = use(appsPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default AppsList;