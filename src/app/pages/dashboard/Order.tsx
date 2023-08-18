import { useState } from "react";
import CustomDatepicker from "../../../_cloner/helpers/components/CustomDatepicker";
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";

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
                <div className="flex flex-row items-center gap-8">
                    <div className="w-50">
                        <ProfessionalSelect placeholder={"کالا / محصول"} />
                    </div>
                    <div className="w-50">
                        <ProfessionalSelect placeholder={"انبار"} />
                    </div>
                    <div className="w-50">
                        <CustomDatepicker placeholder={"تاریخ تسویه"} />
                    </div>
                    <div className="w-50">
                        {factorOptions.map((item: {
                            id: number;
                            title: string;
                        }) => {
                            return <label className="mx-4" key={item.id}>
                                <input className="mx-2 w-[16px] h-[16px]" type="radio" value={item.id} name="factorType" checked={factorType === item.id} onChange={handleRadio} />
                                <span className="">{item.title}</span>
                            </label>
                        })}

                    </div>
                </div>
            </Card6>
        </>
    );
};

export default Order;
