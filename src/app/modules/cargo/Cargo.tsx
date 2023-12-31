import { Link } from "react-router-dom";
import { useRetrievesNotSendedOrder } from "./core/_hooks";
import { columns } from "./helpers/notSendedColumn";
import { Card7 } from "../../../_cloner/partials/content/cards/Card7";
import PageTitle from "../../../_cloner/helpers/components/PageTitle";
import DataGrid from "../../../_cloner/helpers/components/DataGrid";

const Cargo = () => {
    const {
        data: cargoNotSended,
    } = useRetrievesNotSendedOrder();

    const renderAction = (item: any) => {
        return (
            <Link to={`/dashboard/order/cargo/${item?.data?.id}`}>
                <button className="tw-bg-indigo-500 tw-text-white tw-py-2 tw-px-4 tw-mx-2 tw-rounded-md">
                    اعلام بار
                </button>
            </Link>
        );
    };

    return (
        <Card7 image="" title="">
            <PageTitle
                title="لیست سفارشات اعلام بار نشده"
                image="/media/icons/duotune/Ecommerce/ecm006.svg"
            />
            <DataGrid columns={columns(renderAction)} rowData={cargoNotSended} />
            {/* <ReusableTable
                columns={columns}
                data={cargoNotSended}
                isError={isError}
                isLoading={isLoading}
                renderActions={renderAction}
            /> */}
        </Card7>
    );
};

export default Cargo;
