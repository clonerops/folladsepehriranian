import moment from "moment-jalaali";
import { useEffect, useState } from "react";
import { useGetComplaintOrRequestReport } from "../_core/_hooks";
import CustomDatepicker from "../../../../_cloner/helpers/components/CustomDatepicker";
import { Card6 } from "../../../../_cloner/partials/content/cards/Card6";
import { VerticalCategoryCharts } from "../../../../_cloner/partials/charts/VerticalCategoryCharts";

const ComplaintOrRequest = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    let calculateFromDate = moment(fromDate).format("jYYYY/jMM/jDD");
    let calculateToDate = moment(toDate).format("jYYYY/jMM/jDD");
    let calculateNowDate = moment(Date.now()).format("jYYYY/jMM/jDD");

    const { mutate, data, isLoading, isError } =
        useGetComplaintOrRequestReport();

    useEffect(() => {
        const formData = {
            fromDate: moment(Date.now()).format("jYYYY/jMM/jDD"),
            toDate: moment(Date.now()).format("jYYYY/jMM/jDD"),
        };
        mutate(formData);
    }, []);

    const fromDateChange = (d: any) => {
        setFromDate(d.value);
        const formData = {
            fromDate: moment(d.value).format("jYYYY/jMM/jDD"),
            toDate: toDate ? calculateToDate : calculateNowDate,
        };
        mutate(formData);
    };

    const toDateChange = (d: any) => {
        setToDate(d);
        const formData = {
            fromDate: fromDate ? calculateFromDate : calculateNowDate,
            toDate: moment(d.value).format("jYYYY/jMM/jDD"),
        };
        mutate(formData);
    };

    return (
        <>
            <Card6 image="" title="گزارش آماری شکایت یا درخواست">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4 w-50">
                        <div className="py-1 w-full">
                            <CustomDatepicker
                                // title="از تاریخ"
                                placeholder="از تاریخ"
                                onChange={(d: any) => fromDateChange(d)}
                                defaultValue={new Date().getTime()}
                            />
                        </div>
                        <div className="py-1 w-full">
                            <CustomDatepicker
                                // title="تا تاریخ"
                                placeholder="تا تاریخ"
                                onChange={(d: any) => toDateChange(d)}
                                defaultValue={new Date().getTime()}
                            />
                        </div>
                    </div>
                </div>
                <VerticalCategoryCharts
                    data={data?.map((item: any) => item.countAll)}
                    data1={data?.map((item: any) => item.finishedCount)}
                    categories={data?.map((item: any) => item.desc)}
                    isLoading={isLoading}
                    isError={isError}
                    text=""
                />
            </Card6>
        </>
    );
};

export default ComplaintOrRequest;
