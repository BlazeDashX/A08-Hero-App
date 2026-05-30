import appErr from "../../assets/App-Error.png";
import PageHead from "../../components/PageHead/PageHead";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4">
            <img src={appErr} alt="App Error" className="max-w-md mx-auto" />
            <PageHead
                title="OPPS!! APP NOT FOUND"
                description="The App you are requesting is not found on our system.  please try another apps"
            />
            <Link to="/apps">
                <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:bg-[#5a2fc4] mt-6 px-8 py-3 rounded-lg shadow-md transition-all font-semibold">
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default NotFound;