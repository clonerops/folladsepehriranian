import { useRetrieveOrders } from "./core/_hooks";
// import Modal from "../../../_cloner/helpers/components/Modal"
// import { useState } from "react"
// import OrderDetials from "./components/OrderDetials"
// import CustomInput from "../../../_cloner/helpers/components/CustomInput"
// import Swal from 'sweetalert2'
// import SubmitButton from "../../../_cloner/helpers/components/SubmitButton"
import { Card7 } from "../../../_cloner/partials/content/cards/Card7";
import { Link } from "react-router-dom";
import DataGrid from "../../../_cloner/helpers/components/DataGrid";
import { columns } from "./helpers/orderListColumns";
import FuseSearch from "../../../_cloner/helpers/FuseSearch";
import { useEffect, useState } from "react";
import { IOrder } from "./core/_models";

const OrderList = () => {
    const { data: orders } = useRetrieveOrders();
    const [results, setResults] = useState<IOrder[]>([]);

    useEffect(() => {
        setResults(orders?.data);
    }, [orders?.data]);

    const renderAction = (item: any) => {
        return <Link
            to={`/dashboard/order/detail/${item?.data?.id}`}
            state={{ isConfirmed: false }}

        >
            <button className="tw-bg-indigo-500 tw-text-white  tw-px-4 tw-rounded-md">
                جزئیات
            </button>
        </Link>

    }
    return (
        <>
            <Card7 image="" title="">
                <div className="tw-w-80 md:tw-w-[40%] tw-mb-4">
                    <FuseSearch
                        keys={[
                            "orderCode",
                            "registerDate",
                            "customerFirstName",
                            "customerLastName",
                            "orderSendTypeDesc",
                            "paymentTypeDesc",
                            "invoiceTypeDesc",
                            "totalAmount",
                            "exitType",
                            "description",
                        ]}
                        placeholder="جستجو سفارش"
                        data={orders?.data}
                        threshold={0.5}
                        setResults={setResults}
                    />
                </div>
                <DataGrid columns={columns(renderAction)} rowData={results} />
            </Card7>
        </>
    );
};

export default OrderList;
