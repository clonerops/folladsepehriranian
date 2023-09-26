import { toAbsoluteUrl } from "../../../_cloner/helpers";
import { VerticalCharts } from "../../../_cloner/helpers/components/VerticalCharts";
import { Card7 } from "../../../_cloner/partials/content/cards/Card7";
import { useRetrieveProducts } from "../../modules/product/core/_hooks";


const Dashboard = () => {
    const { data: products, isError, isLoading } = useRetrieveProducts()
    return (
        <>
            <Card7 image="" title="">
                <div className="tw-flex tw-justify-center tw-items-center">
                    <img alt="sepehr logo" src={toAbsoluteUrl("/media/logos/folladlogo.png")} width={100} />
                </div>
                <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
                    <div className="tw-flex tw-flex-col tw-space-y-4">
                        <h3 className="tw-text-3xl tw-text-primary">کارخانه فولاد سپهر ایرانیان</h3>
                        <h3 className="tw-text-md">تولید کننده انواع میلگرد آجدار ، نبشی و ناودانی</h3>
                    </div>
                    <div className="tw-w-full">
                        <VerticalCharts
                            data={products?.data?.map((item: any) => item.productInventories.map((i: any) => i.approximateInventory))}
                            categories={products?.data?.map(
                                (item: any) => item.productName
                            )}
                            isLoading={isLoading}
                            isError={isError}
                            text=""
                        />
                    </div>
                </div>
            </Card7>
        </>
    );
};

export default Dashboard;
