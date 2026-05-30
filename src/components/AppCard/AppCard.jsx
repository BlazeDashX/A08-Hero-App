import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;

  return (
    <Link to={`/apps/${id}`}>
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
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
    </Link>
  );
};

export default AppCard;