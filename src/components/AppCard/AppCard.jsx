import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-semibold mt-4 mb-4">
        {title}
      </h2>

      <div className="flex justify-between items-center">
        <div className="bg-green-50 text-green-500 px-4 py-2 rounded-lg flex items-center gap-2">
          <HiOutlineDownload />
          {(downloads / 1000000).toFixed(0)}M
        </div>

        <div className="bg-orange-50 text-orange-500 px-4 py-2 rounded-lg flex items-center gap-2">
          <FaStar />
          {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default AppCard;