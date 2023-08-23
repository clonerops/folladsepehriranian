import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="tw-grid tw-grid-cols-3 tw-gap-4">
                <Link
                    to="/dashboard/order"
                    className="tw-rounded-lg tw-bg-indigo-600 tw-flex tw-justify-center tw-items-center tw-bg-gradient-to-r tw-from-indigo-500 tw-via-purple-500 tw-to-pink-500 tw-cursor-pointer"
                >
                    <span className="tw-text-white tw-px-8 tw-py-12 tw-font-yekan_bold">
                        ثبت سفارشات
                    </span>
                </Link>
                <Link
                    to="/dashboard/crm"
                    className="tw-rounded-lg tw-bg-indigo-600 tw-flex tw-justify-center tw-items-center tw-bg-gradient-to-r tw-from-indigo-500 tw-from-10% tw-via-sky-500 tw-via-30% tw-to-emerald-500 tw-to-90% tw-cursor-pointer"
                >
                    <span className="tw-text-white tw-px-8 tw-py-12 tw-font-yekan_bold">
                        لیست سفارشات
                    </span>
                </Link>
                <Link
                    to="/dashboard/transfer"
                    className="tw-rounded-lg tw-bg-indigo-600 tw-flex tw-justify-center tw-items-center tw-bg-gradient-to-r tw-from-green-400 tw-to-blue-500 tw-cursor-pointer"
                >
                    <span className="tw-text-white tw-px-8 tw-py-12 tw-font-yekan_bold">
                        انبارداری
                    </span>
                </Link>
            </div>
        </>
    );
};

export default Dashboard;
