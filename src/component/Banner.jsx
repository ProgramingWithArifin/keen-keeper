
const Banner = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-bold text-4xl md:text-5xl text-center">Friends to keep close in your life</h1>
            <div className="max-w-[500px] mx-auto"><p className="text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p></div>
            <div className="flex justify-center">
                <button className="btn btn-primary mx-auto ">
                + Add a Friend
            </button>
            </div>
            <div className="flex items-center justify-evenly gap-4 flex-wrap">
                <div className="bg-white rounded-2xl p-5">
                    <h3 className="stat-txt">10</h3>
                    <p className="text-gray-600 text-lg">Total Friends</p>
                </div>
                <div className="bg-white rounded-2xl p-5">
                    <h3 className="stat-txt">10</h3>
                    <p className="text-gray-600 text-lg">Total Friends</p>
                </div>
                <div className="bg-white rounded-2xl p-5">
                    <h3 className="stat-txt">10</h3>
                    <p className="text-gray-600 text-lg">Total Friends</p>
                </div>
                <div className="bg-white rounded-2xl p-5">
                    <h3 className="stat-txt">10</h3>
                    <p className="text-gray-600 text-lg">Total Friends</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;