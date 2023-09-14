import { Link } from "react-router-dom"
import { useRetrievesNotSendedOrder } from "./core/_hooks"
import ReusableTable from "../../../_cloner/helpers/components/Table"
import { columns } from "./helpers/notSendedColumn"


const Cargo = () => {
    const { data: cargoNotSended, isError, isLoading } = useRetrievesNotSendedOrder()

    const renderAction = (item: any) => {
        return <Link to={`/dashboard/order/cargo/${item.id}`}>
            <button className="tw-bg-indigo-500 tw-text-white tw-py-2 tw-px-4 tw-mx-2 tw-rounded-md">
                جزئیات و ثبت اعلام بار
            </button>
        </Link>
    }

    return (    
        <>
            <ReusableTable columns={columns} data={cargoNotSended} isError={isError} isLoading={isLoading} renderActions={renderAction} />
        </>
    )
}

export default Cargo