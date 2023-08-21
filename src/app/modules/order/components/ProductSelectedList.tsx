import { KTSVG } from "../../../../_cloner/helpers";
import { IProduct } from "../core/_models";

const ProductSelectedList = () => {
    const fakeData = [
        {
            id: 1,
            product: 1014382,
            count: "ابوالفضل معصومی",
            price: 6660089985,
        },
        {
            id: 2,
            product: 3213213,
            count: "ابوالفضل محمدی",
            price: 2364325674,
        },
        {
            id: 3,
            product: 10142131382,
            count: "رضایی",
            price: 4589652315,
        },
        {
            id: 4,
            product: 101432313382,
            count: "صمدی",
            price: 3456789432,
        },
        {
            id: 5,
            product: 10142131382,
            count: "حامدی",
            price: 3424242443,
        },
    ];
    return (
        <div>
            <table className="w-full">
                <thead className="bg-gray-200">
                    <tr>
                        <td className="py-4 px-4 text-center text-gray-600 border border-gray-300">
                            ردیف
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            نام کاربری
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            نام و نام خانوادگی
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            کدملی
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            حذف
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map((item: IProduct, index) => {
                        return (
                            <tr
                                className="cursor-pointer hover:bg-gray-100"
                                key={item.id}
                            >
                                <td className="text-center py-4 border border-gray-300">
                                    {index + 1}
                                </td>
                                <td className="text-center py-4 border border-gray-300">
                                    {item.product}
                                </td>
                                <td className="text-center py-4 border border-gray-300">
                                    {item.count}
                                </td>
                                <td className="text-center py-4 border border-gray-300">
                                    {item.price}
                                </td>
                                <td className="flex justify-center items-center py-4 border border-gray-300 mx-auto">
                                    <KTSVG
                                        className="text-red-500"
                                        svgClassName=""
                                        path={
                                            "/media/icons/duotune/arrows/arr011.svg"
                                        }
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSelectedList;
