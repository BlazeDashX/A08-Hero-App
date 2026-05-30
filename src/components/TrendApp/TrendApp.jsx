import { Link } from "react-router";
import AppCard from "../../components/AppCard/AppCard"; 
import PageHead from "../PageHead/PageHead";

const TrendApp = ({ apps }) => {
  const topApps = apps.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
      <PageHead
        title="Top Trending Apps"
        description="Discover the most popular tools right now."
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/apps"
          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md active:scale-95"
        >
          Show All Apps
        </Link>
      </div>

    </section>
  );
};

export default TrendApp;