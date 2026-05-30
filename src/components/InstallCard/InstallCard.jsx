import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const InstallCard = ({ app, onUninstall }) => {
  const { id, title, image, downloads, ratingAvg, size } = app;

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    return num;
  };

  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
      
      <div className="flex items-center gap-6">
        
        <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 text-xs">No Image</span>
          )}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
          
          <div className="flex items-center gap-5 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-1.5">
              <HiOutlineDownload className="text-emerald-500 text-lg" />
              <span className="text-emerald-500">{formatDownloads(downloads)}</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <FaStar className="text-orange-500 text-sm" />
              <span className="text-orange-500">{ratingAvg}</span>
            </div>

            <div>
              {size ? `${size} MB` : 'Unknown Size'}
            </div>
          </div>
        </div>
      </div>

      <div>
        <button 
          onClick={() => onUninstall && onUninstall(id)}
          className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-2.5 rounded-lg font-semibold transition-colors active:scale-95"
        >
          Uninstall
        </button>
      </div>
      
    </div>
  );
};

export default InstallCard;