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
        <div className="container tw-text-red-500">
            <div className="tw-w-50 tw-my-2">
                <CustomInput placeholder="جستجو محصول / کالا" />
            </div>
            <table className="tw-w-full">
                <thead className="tw-bg-gray-200">
                    <tr>
                        <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            ردیف
                        </td>
                        <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            کالا / محصول
                        </td>
                        <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            انبار
                        </td>
                        <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            موجودی
                        </td>
                        <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            قیمت
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map((item: IProduct, index) => {
                        return (
                            <tr
                                className="tw-cursor-pointer tw-hover:bg-gray-100"
                                key={item.id}
                            >
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {index + 1}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.product}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    بازرگانی
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.count}
                                </td>
                                <td className="tw-flex tw-justify-center tw-items-center tw-py-4 tw-border tw-border-gray-300 mx-auto">
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
