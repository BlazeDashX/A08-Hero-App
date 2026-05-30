import { useState } from "react";
import { Link } from "react-router";
import InstallCard from "../../components/InstallCard/InstallCard";
import PageHead from "../../components/PageHead/PageHead";

const Installation = () => {
    const [installedApps, setInstalledApps] = useState(() => {
        const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        return savedApps;
    });
    const [sortType, setSortType] = useState("name");
    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updatedApps);

        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    };

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortType === "name") {
            // Sort alphabetically by title
            return a.title.localeCompare(b.title);
        } else if (sortType === "size") {
            // Sort by size (largest to smallest)
            return b.size - a.size;
        }
        return 0;
    });

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-[70vh]">

            <PageHead
                title="Your Installed Apps"
                description="Explore All Trending Apps on the Market developed by us"
            />
            <div className="flex items-center justify-between py-5">
                <h2 className="text-2xl font-semibold"><span>{installedApps.length}</span> Installed Apps</h2>
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    name="sort"
                    id="sort"
                    className="p-2 border-2 border-gray-500 rounded-md outline-none focus:border-[#632EE3]"
                >                    <option value="name">Sort by Name</option>
                    <option value="size">Sort by Size</option>
                </select>
            </div>
            {sortedApps.length === 0 ? (

                <div className="flex flex-col items-center justify-center py-20 bg-[#F9FAFB] rounded-xl border border-gray-200 text-center px-4">
                    <span className="text-6xl mb-4">📦</span>
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">No apps installed yet</h2>
                    <p className="text-gray-500 mb-8">Browse the store to find your next favorite app.</p>
                    <Link
                        to="/apps"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors active:scale-95 shadow-sm"
                    >
                        Browse Apps
                    </Link>
                </div>

            ) : (

                <div className="flex flex-col gap-4">
                    {sortedApps.map((app) => (
                        <InstallCard
                            key={app.id}
                            app={app}
                            onUninstall={handleUninstall}
                        />
                    ))}
                </div>

            )}
        </div>
    );
};

export default Installation;