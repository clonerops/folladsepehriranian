import React, { useEffect, useState } from "react";
import { Card6 } from "../../../../_cloner/partials/content/cards/Card6";
import ProfessionalSelect from "../../esale/components/ProfessionalSelect";
import { useGetBLandsByStatus, useGetContractors } from "../core/_hooks";
import { dropdownContractors } from "../helpers/dropdownTransfer";
import CustomDatepicker from "../../../../_cloner/helpers/components/CustomDatepicker";
import { VerticalCharts } from "../../../../_cloner/partials/charts/VerticalCharts";
import moment from "moment-jalaali";

const BilllandingByStatus = () => {
    const [selectedContractors, setSelectedContractors] = useState({
        value: 0,
        label: "همه",
    });
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    let calculateFromDate = moment(fromDate).format("jYYYY/jMM/jDD");
    let calculateToDate = moment(toDate).format("jYYYY/jMM/jDD");
    let calculateNowDate = moment(Date.now()).format("jYYYY/jMM/jDD");

    const { data: contractors } = useGetContractors();
    const {
        mutate,
        data: BlandStatus,
        isLoading,
        isError,
    } = useGetBLandsByStatus();

    useEffect(() => {
        const formData = {
            fromDate: moment(Date.now()).format("jYYYY/jMM/jDD"),
            toDate: moment(Date.now()).format("jYYYY/jMM/jDD"),
            contractor_id: 0,
        };
        mutate(formData);
    }, []);

    const onChangeContractors = (selectedOption: any) => {
        setSelectedContractors(selectedOption);
        const formData = {
            fromDate: fromDate ? calculateFromDate : calculateNowDate,
            toDate: toDate ? calculateToDate : calculateNowDate,
            contractor_id: selectedOption?.value,
        };
        mutate(formData);
    };

    const fromDateChange = (d: any) => {
        setFromDate(d.value);
        const formData = {
            fromDate: moment(d.value).format("jYYYY/jMM/jDD"),
            toDate: toDate ? calculateToDate : calculateNowDate,
            contractor_id: selectedContractors?.value,
        };
        mutate(formData);
    };
    const toDateChange = (d: any) => {
        setToDate(d);
        const formData = {
            fromDate: fromDate ? calculateFromDate : calculateNowDate,
            toDate: moment(d.value).format("jYYYY/jMM/jDD"),
            contractor_id: selectedContractors?.value,
        };
        mutate(formData);
    };

    return (
        <Card6 image="" title="گزارش آماری حواله های صادرشده">
            <div className="flex flex-col">
                <div className="py-1 w-full">
                    <ProfessionalSelect
                        options={dropdownContractors(contractors?.result)}
                        onChange={onChangeContractors}
                        value={selectedContractors}
                        placeholder=""
                    />
                </div>
                <div className="flex flex-row gap-4">
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
            <VerticalCharts
                data={BlandStatus?.map((item: any) => item.count)}
                categories={BlandStatus?.map((item: any) => item.statusDesc)}
                isLoading={isLoading}
                isError={isError}
                text=""
            />
        </Card6>
    );
};

export default BilllandingByStatus;
