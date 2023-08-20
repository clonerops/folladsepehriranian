import { useState } from "react";
// import CustomDatepicker from "../../../_cloner/helpers/components/CustomDatepicker";
// import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";
// import Inputs from "../../modules/auth/components/Inputs";
// import CustomInput from "../../../_cloner/helpers/components/CustomInput";

const Order = () => {
    const data = [
        { id: 1, title: "ابوالفضل معصومی 23 ساله کارخانه" },
        { id: 2, title: "فرهاد معصومی 25 ساله کارخانه" },
        { id: 3, title: "Abolfazl 35 ساله" },
        { id: 4, title: "ابوالفضل معصومی 23 ابوالفضل محمدی 12 ساله" },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [showProducts, setShowProducts] = useState(false);

    function handleInputChange(event: any) {
        const newInputValue = event.target.value;
        setSearchQuery(newInputValue);

        const searchWords = newInputValue.trim().toLowerCase().split(/\s+/); // Split into words

        const newProduct = data.filter((item: any) => {
            return searchWords.every((word: any) =>
                item.title.toLowerCase().includes(word)
            );
        });
    
        setFilteredData(newProduct);

        setShowProducts(true);
    }

    const handleProductSelect = (item: any) => {
        console.log(item);
        setSearchQuery(item.title);
        setShowProducts(false);
    };

    // const factorOptions = [
    //     { id: 1, title: "رسمی سپهر" },
    //     { id: 2, title: "رسمی مهفام" },
    // ];

    // const [factorType, setFactorType] = useState<number>(1);
    // const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFactorType(Number(e.target.value));
    // };
    const handleFocuse = () => {
        setShowProducts(true);
    };
    const handleBlur = () => {
        setTimeout(() => {
            setShowProducts(false);
        }, 100);
    };
    return (
        <>
            <Card6 title="" image="">
                {/* Search Customer */}
                {/* <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="min-w-[100%] md:min-w-[50%] my-2 md:my-0">
                        <ProfessionalSelect
                            placeholder="جستجو مشتری"
                        />
                    </div>

                    <button className="btn btn-primary my-2 md:my-0">
                        افزودن مشتری جدید
                    </button>
                </div> */}
                <div className="relative">
                    <input
                        onFocus={handleFocuse}
                        onBlur={handleBlur}
                        value={searchQuery}
                        onChange={handleInputChange}
                        type="text"
                        className="border border-gray-400 rounded-md py-2 w-[340px]"
                    />

                    {showProducts && (
                        <div className="border w-[340px] overflow-auto max-h-[250px] min-h-[48px] absolute top-[48px] box-border bg-white shadow-md">
                            <ul
                                onClick={(e) => e.stopPropagation()}
                                className="serach__product-lists"
                            >
                                {filteredData.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleProductSelect(item)
                                            }
                                            className="min-h-[67px] cursor-pointer"
                                        >
                                            <div className="flex flex-row justify-between items-center">
                                                <div className=" relative flex flex-col pt-4">
                                                    <span className="text-sm px-4">
                                                        {" "}
                                                        {item.title}
                                                    </span>
                                                    <span className="text-red-500 text-xs px-4 absolute top-10 right-0 ">
                                                        کیلوگرم
                                                    </span>
                                                </div>
                                                <span className="text-xs px-4">
                                                    {" "}
                                                    کارخانه
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
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
