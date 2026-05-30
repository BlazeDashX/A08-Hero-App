import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from "recharts";
import iDown from "../../assets/icon-downloads.png";
import iRate from "../../assets/icon-ratings.png";
import iReview from "../../assets/icon-review.png";
import NotFound from "../NotFound/NotFound";

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
  return num;
};

const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const [isInstalled, setIsInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const app = apps.find((a) => a.id === Number(id));

  if (!app) {
    return (
      <NotFound />
    );
  }

  const handleInstall = () => {
    setIsInstalled(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const chartData = [...app.ratings].reverse();

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 font-sans text-gray-800 bg-[#F9FAFB] min-h-screen relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300 z-50">
          ✅ Success! App installed successfully.
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
        
        <div className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
          <img 
            src={app.image} 
            alt={app.title} 
            className="w-full h-auto max-w-62.5 object-contain rounded-xl"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{app.title}</h1>
          <p className="text-gray-500 mb-6">
            Developed by <span className="text-purple-600 font-medium">{app.companyName}</span>
          </p>

          <div className="flex gap-8 border-b border-gray-200 pb-6 mb-6">
            <div className="flex flex-col">
                <img src={iDown} alt="Downloads" className="w-8 h-8 mb-1" />
              <span className="text-sm text-gray-500">Downloads</span>
              <span className="text-2xl font-bold">{formatNumber(app.downloads)}</span>
            </div>
            
            <div className="flex flex-col">
                <img src={iRate} alt="Ratings" className="w-8 h-8 mb-1" />
              <span className="text-sm text-gray-500">Average Ratings</span>
              <span className="text-2xl font-bold">{app.ratingAvg}</span>
            </div>
            
            <div className="flex flex-col">
                <img src={iReview} alt="Reviews" className="w-8 h-8 mb-1" />
              <span className="text-sm text-gray-500">Total Reviews</span>
              <span className="text-2xl font-bold">{formatNumber(app.reviews)}</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`w-max px-8 py-3 rounded-md font-bold text-white transition-all ${
              isInstalled 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-emerald-500 hover:bg-emerald-600 active:scale-95"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mb-12 border-b border-gray-200 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Ratings</h2>
        <div className="h-62.5 w-full max-w-4xl">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis 
                type="number" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#9CA3AF'}} 
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#6B7280'}} 
                width={60}
              />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="count" fill="#F97316" barSize={16} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="pb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Description</h2>
        <div className="text-gray-600 space-y-6 leading-relaxed">
          <p>{app.description}</p>
        </div>
      </div>

    </div>
  );
};

export default AppDetails;