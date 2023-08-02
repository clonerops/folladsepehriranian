import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <Link
                    to="/dashboard/esale"
                    className="rounded-lg bg-indigo-600 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
                >
                    <span className="text-white px-8 py-12 font-yekan_bold">
                        مدیریت فروش اینترنتی
                    </span>
                </Link>
                <Link
                    to="/dashboard/crm"
                    className="rounded-lg bg-indigo-600 flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer"
                >
                    <span className="text-white px-8 py-12 font-yekan_bold">
                        مدیریت امور مشتریان
                    </span>
                </Link>
                <Link
                    to="/dashboard/transfer"
                    className="rounded-lg bg-indigo-600 flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer"
                >
                    <span className="text-white px-8 py-12 font-yekan_bold">
                        مدیریت حمل محصول
                    </span>
                </Link>
            </div>
        </>
    );
};

export default Dashboard;
