import { useEffect, useState } from "react";
import { Card6 } from "../../../../_cloner/partials/content/cards/Card6";
import ProfessionalSelect from "./ProfessionalSelect";
import {
    dropdownSaleTotalType,
    dropdownSaleTotalTypeDetails,
    dropdownSaleTotalWinnerType,
} from "../helpers/dropdownSaleTotalType";
import RadioGroupSaleType from "./RadioGroupSaleType";
import {
    useGetSaleByProductReport,
    useGetSaleTotalTypeDetails,
    useGetSaleTotalTypes,
    useGetWinnerTypes,
} from "../_core/_hooks";
import SaleTotalModal from "./SaleTotalModal";
import { VerticalCharts } from "../../../../_cloner/partials/charts/VerticalCharts";

const SaleByProductReport = () => {
    const [radioSelect, setRadioSelect] = useState(-1);
    const [totalTypesSelect, setTotalTypesSelect] = useState<any>({
        value: 2,
        label: "فروش یکپارچه",
    });
    const [totalTypeDetailSelect, setTotalTypeDetailSelect] = useState<any>({
        value: 0,
        label: "همه",
    });
    const [totalWinnerTypeSelect, setTotalwinnerTypeSelect] = useState<any>({
        value: -1,
        label: "همه",
    });
    const [calculateTotalCount, setCalculateTotalCount] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const { data: saleTotalTypes } = useGetSaleTotalTypes();
    const { data: saleWinnerType } = useGetWinnerTypes();

    const { mutate: totalDetails, data: saleTotalTypeDetails } =
        useGetSaleTotalTypeDetails();
    const {
        mutate: saleProductReport,
        data: saleProduct,
        isLoading,
        isError,
    } = useGetSaleByProductReport();

    const calculateSum = (data: any) => {
        const calculateTotal = data?.reduce(
            (accumulator: any, currentValue: any) => {
                return accumulator + currentValue.cnt;
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
            winnerType: -1,
        };
        totalDetails(totalTypesSelect?.value);
        saleProductReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0);
            },
        });
    }, []);

    const onChangeTotalTypes = (selectOption: any) => {
        setTotalTypesSelect(selectOption);
        totalDetails(selectOption?.value);
        const formData = {
            saletypeId: selectOption?.value,
            saleTotalTypeDetailId: 0,
            isJavani: radioSelect,
            winnerType: -1,
        };
        saleProductReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0);
            },
        });
    };
    const onChangeTotalTypeDetail = (selectOption: any) => {
        setTotalTypeDetailSelect(selectOption);
        const formData = {
            saletypeId: totalTypesSelect?.value,
            saleTotalTypeDetailId: selectOption?.value,
            isJavani: radioSelect,
            winnerType: -1,
        };
        saleProductReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0);
            },
        });
    };
    const onChangeTotalWinnerType = (selectOption: any) => {
        setTotalwinnerTypeSelect(selectOption);
        const formData = {
            saletypeId: totalTypesSelect?.value,
            saleTotalTypeDetailId: totalTypeDetailSelect?.value,
            isJavani: radioSelect,
            winnerType: selectOption?.value,
        };
        saleProductReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0);
            },
        });
    };

    const onChangeRadioSelect = (event: any) => {
        setRadioSelect(event.target.value);
        const formData = {
            saletypeId: totalTypesSelect?.value,
            saleTotalTypeDetailId: 0,
            isJavani: event.target.value,
            winnerType: totalWinnerTypeSelect?.value,
        };
        saleProductReport(formData, {
            onSuccess: (data) => {
                calculateSum(data);
            },
            onError: () => {
                setCalculateTotalCount(0);
            },
        });
    };

    return (
        <>
            <Card6 image="" title="گزارش آماری براساس محصول">
                <div className="flex flex-col">
                    <div className="md:grid md:grid-cols-3 md:gap-4">
                        <ProfessionalSelect
                            options={dropdownSaleTotalType(saleTotalTypes)}
                            onChange={onChangeTotalTypes}
                            value={totalTypesSelect}
                            defaultValue={{ value: 2, label: "فروش یکپارچه" }}
                            placeholder=""
                        />
                        <ProfessionalSelect
                            options={dropdownSaleTotalTypeDetails(
                                saleTotalTypeDetails
                            )}
                            onChange={onChangeTotalTypeDetail}
                            value={totalTypeDetailSelect}
                            defaultValue={{ value: 0, label: "همه" }}
                            placeholder=""
                        />
                        <div className="flex justify-center items-center gap-8">
                            <button onClick={() => setIsOpen(true)}>
                                مشاهده جزئیات
                            </button>
                            <label className="flex items-center justify-center">
                                تعداد کل:{" "}
                                <span className="font-yekan_extrabold text-xl text-indigo-700 px-4">
                                    {calculateTotalCount}
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-4 my-2">
                        <div>
                            <RadioGroupSaleType
                                onChange={onChangeRadioSelect}
                                id="saleTotalTypeProduct"
                                key="saleTotalTypeProduct"
                            />
                        </div>
                        <div>
                            <ProfessionalSelect
                                options={dropdownSaleTotalWinnerType(
                                    saleWinnerType
                                )}
                                onChange={onChangeTotalWinnerType}
                                value={totalWinnerTypeSelect}
                                defaultValue={{ value: 0, label: "همه" }}
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div>
                        <VerticalCharts
                            data={saleProduct?.map((item: any) => item.cnt)}
                            categories={saleProduct?.map(
                                (item: any) => item.car_type_desc
                            )}
                            isLoading={isLoading}
                            isError={isError}
                            text=""
                        />
                    </div>
                </div>
            </Card6>
            <SaleTotalModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default SaleByProductReport;
