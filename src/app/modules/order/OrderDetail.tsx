import { useParams } from "react-router-dom"
import { Card7 } from "../../../_cloner/partials/content/cards/Card7"
import { useRetrieveOrder } from "./core/_hooks"
import Detail from "./components/Detail"

const OrderDetail = () => {
    const { id } = useParams()
    const { data, isLoading: orderLoading, isError: orderError } = useRetrieveOrder(id)

    return (
        <>
            <Card7 image="" title="">
                <Detail data={data} isError={orderError} isLoading={orderLoading} />
            </Card7>
        </>
    )
}

export default OrderDetail