import Link from "next/link";

const NotFound = () => {
    return (
        <div className=" flex items-center justify-center bg-gray-50">
            <div className="text-center px-6">
                <h1 className="text-9xl font-bold text-[#244D3F] mb-4">404</h1>
                <h2 className="text-4xl font-semibold mb-3">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Sorry, the page you are looking for doesnot exist or has been moved.
                </p>
                <Link 
                    href="/" 
                    className="btn btn-primary text-lg px-8 py-3 rounded-full"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;