import { use, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import Search from "../../components/Search/Search";

const AppsList = ({ appsPromise }) => {
  const apps = use(appsPromise);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          ({filteredApps.length}) app found
        </h2>

        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </>
  );
};

export default AppsList;