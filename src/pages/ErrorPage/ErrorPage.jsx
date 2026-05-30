import err404 from "../../assets/error-404.png";
import PageHead from "../../components/PageHead/PageHead";
import { Link } from "react-router"; // Use Link for routing

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <img src={err404} alt="404 Error" className="max-w-md mb-8" />
                <PageHead
                    title="Oops! Page Not Found"
                    description="The page you are looking for is not available."
                />
                
                <Link to="/">
                    <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:bg-[#5a2fc4] mt-6 px-8 py-3 rounded-lg">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;