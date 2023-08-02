import { useEffect, useState } from "react";
import { Card6 } from "../../../../_cloner/partials/content/cards/Card6";
import ProfessionalSelect from "./ProfessionalSelect";
import {
    dropdownSaleTotalType,
    dropdownSaleTotalTypeDetails,
} from "../helpers/dropdownSaleTotalType";
import RadioGroupSaleType from "./RadioGroupSaleType";
import {
    useGetSaleReport,
    useGetSaleTotalTypeDetails,
    useGetSaleTotalTypes,
} from "../_core/_hooks";
import SaleTotalDetailModal from "./SaleTotalDetailModal";
import { VerticalCharts } from "../../../../_cloner/partials/charts/VerticalCharts";

const SaleTotalTypeReport = () => {
    const [radioSelect, setRadioSelect] = useState(-1);
    const [totalTypesSelect, setTotalTypesSelect] = useState<any>({
        value: 2,
        label: "فروش یکپارچه",
    });
    const [totalTypeDetailSelect, setTotalTypeDetailSelect] = useState<any>({
        value: 0,
        label: "همه",
    });

    const [calculateTotalCount, setCalculateTotalCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const { data: saleTotalTypes } = useGetSaleTotalTypes();

    const { mutate: totalDetails, data: saleTotalTypeDetails } =
        useGetSaleTotalTypeDetails();
    const {
        mutate: saleReport,
        data: saleReportData,
        isLoading,
        isError,
    } = useGetSaleReport();

    const calculateSum = (data: any) => {
        const filteredData = data?.filter(
            (item: any) => item.applicantTypeDesc != "واريز كنندگان"
        );
        console.log(filteredData)
        const calculateTotal = filteredData?.reduce(
            (accumulator: any, currentValue: any) => {
                return accumulator + currentValue.count;
            },
            0
        );
        setCalculateTotalCount(calculateTotal);
    };

    useEffect(() => {
        const formData = {
            saletypeId: 2,
            saleTotalTypeDetailId: 0,
            isJavani: -1,
        };
        totalDetails(totalTypesSelect?.value);
        saleReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0)
            }
        });
    }, []);

    const onChangeTotalTypes = (selectOption: any) => {
        setTotalTypesSelect(selectOption);
        totalDetails(selectOption?.value);
        const formData = {
            saletypeId: selectOption?.value,
            saleTotalTypeDetailId: 0,
            isJavani: radioSelect,
        };
        saleReport(formData,{
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0)
            }
        });
    };
    const onChangeTotalTypeDetail = (selectOption: any) => {
        setTotalTypeDetailSelect(selectOption);
        const formData = {
            saletypeId: totalTypesSelect?.value,
            saleTotalTypeDetailId: selectOption?.value,
            isJavani: radioSelect,
        };
        saleReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0)
            }
        });
    };

    const onChangeRadioSelect = (event: any) => {
        setRadioSelect(event.target.value);
        const formData = {
            saletypeId: totalTypesSelect?.value,
            saleTotalTypeDetailId: 0,
            isJavani: event.target.value,
        };
        saleReport(formData,{
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0)
            }
        });
    };

    return (
        <>
            <Card6 image="" title="گزارش آماری فروش اینترنتی">
                <div className="flex flex-col">
                    {/* <div className="md:grid md:grid-cols-4 md:gap-4"> */}
                    <div className="flex flex-col">
                        <div className="py-1">
                            <ProfessionalSelect
                                options={dropdownSaleTotalType(saleTotalTypes)}
                                onChange={onChangeTotalTypes}
                                value={totalTypesSelect}
                                defaultValue={{
                                    value: 2,
                                    label: "فروش یکپارچه",
                                }}
                                placeholder=""
                            />
                        </div>
                        <div className="py-1">
                            <ProfessionalSelect
                                options={dropdownSaleTotalTypeDetails(
                                    saleTotalTypeDetails
                                )}
                                onChange={onChangeTotalTypeDetail}
                                value={totalTypeDetailSelect}
                                defaultValue={{ value: 0, label: "همه" }}
                                placeholder=""
                            />
                        </div>
                        <div className="order-0">
                            <div className="my-4">
                                <RadioGroupSaleType
                                    onChange={onChangeRadioSelect}
                                    id="saleTotalType"
                                    key="saleTotalType"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-x-8 py-2">
                            <div className="flex justify-center items-center">
                                <label className="flex items-center justify-center">
                                    تعداد کل: <span className="font-yekan_extrabold text-xl text-indigo-700 px-4">{calculateTotalCount}</span>
                                </label>
                            </div>
                            <div className="flex justify-center items-center">
                                <button onClick={() => setIsOpen(true)}>
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="order-3">
                        <VerticalCharts
                            data={saleReportData?.map(
                                (item: any) => item.count
                            )}
                            categories={saleReportData?.map(
                                (item: any) => item.applicantTypeDesc
                            )}
                            isLoading={isLoading}
                            isError={isError}
                            text=""
                        />
                    </div>
                </div>
            </Card6>
            <SaleTotalDetailModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default SaleTotalTypeReport;
