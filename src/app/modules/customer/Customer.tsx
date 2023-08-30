import { toAbsoluteUrl } from "../../../_cloner/helpers";

const Customer = () => {
    return (
        <>
            <div className="tw-overflow-auto">
                <table className="tw-w-full ">
                    <thead className="tw-bg-slate-200">
                        <tr>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                
                            </td>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                نام
                            </td>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                کدملی
                            </td>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                موبایل
                            </td>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                آدرس
                            </td>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                تلفن
                            </td>
                            <td className="tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center">
                                نماینده
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                <span>
                                    <img
                                        src={toAbsoluteUrl(
                                            "/media/avatars/300-1.jpg"
                                        )}
                                        width={40}
                                        height={40}
                                        className="tw-rounded-full"
                                    />
                                </span>
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                <span>ابوالفضل معصومی</span>
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                6660089985
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                09217767345
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                تهران نسیم شهر خیایابن سوم کوچه صدوقی پلاک 13
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                02156760981
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                شرکت سایپا
                            </td>
                        </tr>
                        <tr>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                            <span>
                                    <img
                                        src={toAbsoluteUrl(
                                            "/media/avatars/blank.png"
                                        )}
                                        width={40}
                                        height={40}
                                        className="tw-rounded-full"
                                    />
                                </span>

                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                ابوالفضل معصومی
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                6660089985
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                09217767345
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                تهران نسیم شهر خیایابن سوم کوچه صدوقی پلاک 13
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                02156760981
                            </td>
                            <td className="tw-text-black tw-font-yekan_bold  tw-py-4 tw-text-center">
                                شرکت سایپا
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Customer;
