import { KTSVG } from "../../../../_cloner/helpers";
import { IProductOrder } from "../core/_models";

const ProductSelectedList = (props: {
    orders: IProductOrder[] | undefined
    setOrders: any
}) => {
const handleDeleteFromList = (index: number) => {
    if(props.orders) {
        const cloneItems = [...props.orders]
        cloneItems?.splice(index, 1)
        props.setOrders(cloneItems)
    }
}

    return (
        <div>
            <table className="tw-w-full">
                <thead className="tw-bg-gray-200">
                    <tr>
                        <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            ردیف
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            کالا / محصول
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            مقدار
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            قیمت
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            حذف
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props?.orders?.map((item: any, index: number) => {
                        return (
                            <tr
                                className="tw-cursor-pointer tw-hover:bg-gray-100"
                                key={index}
                            >
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {index + 1}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.productName}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.count}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.price} ریال
                                </td>
                                <td onClick={() => handleDeleteFromList(index)} className="tw-flex tw-justify-center tw-items-center tw-py-4 tw-border tw-border-gray-300 tw-mx-auto">
                                    <KTSVG
                                        className="tw-text-red-500"
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
