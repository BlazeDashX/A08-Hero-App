
const Facts = () => {
    return (
        <div>
            <section className="w-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 py-24">
                <div className=" px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-5xl font-bold text-white mb-16">
                        Trusted By Millions, Built For You
                    </h2>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Downloads */}
                        <div>
                            <p className="text-white/70 text-sm mb-4">
                                Total Downloads
                            </p>

                            <h3 className="text-6xl font-extrabold text-white mb-4">
                                29.6M
                            </h3>

                            <p className="text-white/70 text-sm">
                                21% More Than Last Month
                            </p>
                        </div>

                        {/* Reviews */}
                        <div>
                            <p className="text-white/70 text-sm mb-4">
                                Total Reviews
                            </p>

                            <h3 className="text-6xl font-extrabold text-white mb-4">
                                906K
                            </h3>

                            <p className="text-white/70 text-sm">
                                46% More Than Last Month
                            </p>
                        </div>

                        {/* Apps */}
                        <div>
                            <p className="text-white/70 text-sm mb-4">
                                Active Apps
                            </p>

                            <h3 className="text-6xl font-extrabold text-white mb-4">
                                132+
                            </h3>

                            <p className="text-white/70 text-sm">
                                31 More Will Launch
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facts;