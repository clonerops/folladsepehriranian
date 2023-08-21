import { useState } from "react";
// import CustomDatepicker from "../../../_cloner/helpers/components/CustomDatepicker";
// import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import Modal from "../../../_cloner/helpers/components/Modal";
import CustomInput from "../../../_cloner/helpers/components/CustomInput";
import CreateUser from "../user/CreateUser";
import ProductSelectedList from "./components/ProductSelectedList";
import CustomTextarea from "../../../_cloner/helpers/components/CustomTextarea";
import CustomDatepicker from "../../../_cloner/helpers/components/CustomDatepicker";
import CusromRadioGroupButton from "../../../_cloner/helpers/components/CusromRadioGroupButton";
import ProductSelectedListInModal from "./components/ProductSelectedListInModal";
// import Inputs from "../../modules/auth/components/Inputs";
// import CustomInput from "../../../_cloner/helpers/components/CustomInput";

const Order = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedProductOpen, setSelectedProductOpen] =
        useState<boolean>(false);

    const data = [
        { id: 1, title: "ابوالفضل معصومی 23 ساله کارخانه" },
        { id: 2, title: "فرهاد معصومی 25 ساله کارخانه" },
        { id: 3, title: "Abolfazl 35 ساله" },
        { id: 4, title: "ابوالفضل معصومی 23 ابوالفضل محمدی 12 ساله" },
    ];

    const factorType = [
        { id: 1, title: "غیررسمی" },
        { id: 2, title: "رسمی مهفام" },
        { id: 3, title: "رسمی سپهر" },
    ];
    const exitType = [
        { id: 1, title: "عادی" },
        { id: 2, title: "بعد از تسویه" },
    ];
    const sendType = [
        { id: 1, title: "ارسال با مشتری" },
        { id: 2, title: "ارسال بازرگانی" },
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
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="min-w-[100%] md:min-w-[50%] my-2 md:my-0">
                        <ProfessionalSelect placeholder="جستجو مشتری" />
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn btn-primary my-2 md:my-0"
                    >
                        افزودن مشتری جدید
                    </button>
                </div>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    reqular={true}
                    className="w-[800px]"
                >
                    <CreateUser />
                </Modal>
                <div className="flex flex-row flex-wrap gap-4">
                    <div>
                        <button onClick={() => setSelectedProductOpen(true)} className="bg-yellow-500 rounded-md px-16 py-2">
                            <span>+ انتخاب کالا</span>
                        </button>
                        <Modal
                            isOpen={selectedProductOpen}
                            onClose={() => setSelectedProductOpen(false)}
                            reqular={true}
                            className="w-[800px]"
                        >
                            <ProductSelectedListInModal />
                        </Modal>
                    </div>
                    <div className="relative">
                        <input
                            onFocus={handleFocuse}
                            onBlur={handleBlur}
                            value={searchQuery}
                            onChange={handleInputChange}
                            placeholder="کالا / محصول"
                            type="text"
                            className="border px-2 border-gray-400 rounded-md py-2 w-[306px]"
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
                    {/* <div>
                        <CustomInput placeholder="مقدار / تعداد" />
                    </div>
                    <div>
                        <CustomInput placeholder="قیمت" />
                    </div> */}
                    {/* <div>
                        <button className="border-2 border-blue-500 py-2 px-16 rounded-md">
                            <span> + افزودن کالا</span>
                        </button>
                    </div> */}
                </div>
                {/* <div className="flex items-center gap-x-8 mt-8">
                    <div className="relative">
                        <input
                            onFocus={handleFocuse}
                            onBlur={handleBlur}
                            value={searchQuery}
                            onChange={handleInputChange}
                            placeholder="کالا / محصول"
                            type="text"
                            className="border px-2 border-gray-400 rounded-md py-2 w-[340px]"
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
                    <div>
                        <CustomInput placeholder="مقدار / تعداد" />
                    </div>
                    <div>
                        <button className="border-2 border-blue-500 py-2 px-16 rounded-md">
                            <span> + افزودن کالا</span>
                        </button>
                    </div>
                </div> */}
                {/* <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <ProductSelectedList />
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-4">
                            <CustomDatepicker placeholder="تاریخ تسویه" />
                            <div className="w-100">
                                <CustomTextarea placeholder="توضیحات" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <label className="font-yekan_bold">نوع فاکتور</label>
                            <div>
                                <CusromRadioGroupButton items={factorType} />
                            </div>
                        </div>
                        <div className="pt-4">
                            <label className="font-yekan_bold">نوع خروج</label>
                            <div>
                                <CusromRadioGroupButton items={exitType} />
                            </div>
                        </div>
                        <div className="pt-4">
                            <label className="font-yekan_bold">نوع ارسال</label>
                            <div>
                                <CusromRadioGroupButton items={sendType} />
                            </div>
                        </div>

                        <div className="flex justify-between pt-8">
                            <span className="font-weight-bold">قیمت کل</span>
                            <span className="font-weight-bold">
                            </span>
                        </div>
                        <div className="salefactor d-flex flex-column justify-content-between">
                            <span className="font-weight-bold">
                            </span>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <button className="bg-green-600 text-white px-8 py-2 rounded-md">
                                ثبت سفارش
                            </button>
                        </div>
                    </div>
                </div> */}
            </Card6>
        </>
    );
};

export default Order;
