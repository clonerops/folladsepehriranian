import { useState } from "react";
import CustomDatepicker from "../../../_cloner/helpers/components/CustomDatepicker";
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";
import Inputs from "../../modules/auth/components/Inputs";
import CustomInput from "../../../_cloner/helpers/components/CustomInput";

const Order = () => {

    const factorOptions = [
        { id: 1, title: "رسمی سپهر" },
        { id: 2, title: "رسمی مهفام" },
    ]

    const [factorType, setFactorType] = useState<number>(1)
    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFactorType(Number(e.target.value))
    }

    console.log(factorType)
    return (
        <>
            <Card6 title="" image="">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="min-w-[100%] md:min-w-[50%] my-2 md:my-0">
                        <ProfessionalSelect
                            placeholder="جستجو مشتری"
                        />
                    </div>

                    <button className="btn btn-primary my-2 md:my-0">
                        افزودن مشتری جدید
                    </button>
                </div>
                {/* <div className="grid grid-cols-4 items-center gap-8">
                        <div>
                            <ProfessionalSelect placeholder={"کالا / محصول"} />
                        </div>
                        <div>
                            <ProfessionalSelect placeholder={"انبار"} />
                        </div>
                        <div>
                            <CustomDatepicker placeholder={"تاریخ تسویه"} />
                        </div>
                        <div>
                            <CustomInput />
                        </div>
                        <div>
                            {factorOptions.map((item: {
                                id: number;
                                title: string;
                            }) => {
                                return <label className="ml-4" key={item.id}>
                                    <input className="mx-2 w-[16px] h-[16px]" type="radio" value={item.id} name="factorType" checked={factorType === item.id} onChange={handleRadio} />
                                    <span className="">{item.title}</span>
                                </label>
                            })}
                        </div>
                        <div>
                            <CustomInput />
                        </div>
                        <div>
                            <CustomInput />
                        </div>
                        <div>
                            <CustomInput />
                        </div>
                        <div>
                            <CustomInput />
                        </div>
                        <div className="">
                            {factorOptions.map((item: {
                                id: number;
                                title: string;
                            }) => {
                                return <label className="ml-4" key={item.id}>
                                    <input className="mx-2 w-[16px] h-[16px]" type="radio" value={item.id} name="factorType" checked={factorType === item.id} onChange={handleRadio} />
                                    <span className="">{item.title}</span>
                                </label>
                            })}
                        </div>
                    </div> */}
            </Card6>
        </>
    );
};

export default Order;
