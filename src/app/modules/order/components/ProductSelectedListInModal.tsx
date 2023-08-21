import { KTSVG } from "../../../../_cloner/helpers";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import { IProduct } from "../core/_models";

const ProductSelectedListInModal = () => {
    const fakeData = [
        {
            id: 1,
            product: "گرد 8 20*20 سپهر کارخانه",
            count: "20",
            price: 536985,
        },
    ];
    return (
        <div className="container py-8">
            <div className="w-50 my-2">
                <CustomInput placeholder="جستجو محصول / کالا" />
            </div>
            <table className="w-full">
                <thead className="bg-gray-200">
                    <tr>
                        <td className="py-4 px-4 text-center text-gray-600 border border-gray-300">
                            ردیف
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            کالا / محصول
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            انبار
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            موجودی
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                            قیمت
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
                                    بازرگانی
                                </td>
                                <td className="text-center py-4 border border-gray-300">
                                    {item.count}
                                </td>
                                <td className="flex justify-center items-center py-4 border border-gray-300 mx-auto">
                                    {item.price} ریال
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSelectedListInModal;
