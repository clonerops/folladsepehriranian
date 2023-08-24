import { useEffect, useState } from "react";
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
import { useRetrieveProducts } from "../product/core/_hooks";
import { IProducts } from "../product/core/_models";
// import Inputs from "../../modules/auth/components/Inputs";
// import CustomInput from "../../../_cloner/helpers/components/CustomInput";

const Order = () => {
    const { data: products, isLoading: productLoading, isError: productError } = useRetrieveProducts()


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedProductOpen, setSelectedProductOpen] = useState<boolean>(false);
    const [selectProductFromModal, setSelectProductFromModal] = useState<IProducts>()
    const [searchQuery, setSearchQuery] = useState("");
    const [showProducts, setShowProducts] = useState(false);
    const [filteredData, setFilteredData] = useState<IProducts[]>();
    const [orders, setOrders] = useState<IProducts[]>([])

    useEffect(() => {
        setFilteredData(products?.data)
    }, [products?.data])


    // const [factorType, setFactorType] = useState<number>(1);
    // const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFactorType(Number(e.target.value));
    // };

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newInputValue = event.target.value;
        setSearchQuery(newInputValue);

        const searchWords = newInputValue.trim().toLowerCase().split(/\s+/); // Split into words

        const newProduct = products?.data.filter((item: any) => {
            return searchWords.every((word: any) =>
                item.productName.toLowerCase().includes(word)
            );
        });

        setFilteredData(newProduct);

        setShowProducts(true);
    }

    const handleFocuse = () => {
        setShowProducts(true);
    };
    const handleBlur = () => {
        setTimeout(() => {
            setShowProducts(false);
        }, 100);
    };

    const handleProductSelect = (item: IProducts) => {
        if (item.productName) {
            setSearchQuery(item?.productName.toString());
            setShowProducts(false);
        }
    };

    useEffect(() => {
        if (selectProductFromModal?.productName)
            setSearchQuery(selectProductFromModal?.productName);

    }, [selectProductFromModal])

    const handleOrders = () => {
        const ord = [{
            id: "wr",
            productName: searchQuery,
            productBrandId: 0,
            productSize: "w",
            approximateWeight: 0,
            numberInPackage: 0,
            size: "r",
            standard: "r",
            productState: "r",
            description: "r"
        }]
        setOrders(ord)
    }
    return (
        <>
            <Card6 title="" image="">
                {/* Search Customer */}
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-x-4">
                    <div
                        className="tw-w-full md:tw-w-[50%]"
                    >
                        <ProfessionalSelect placeholder="جستجو مشتری" />
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="tw-flex tw-my-2 md:tw-my-0 tw-bg-gray-600 tw-p-3 tw-rounded-sm tw-text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>افزودن مشتری</span>
                    </button>
                </div>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    reqular={true}
                    className="tw-w-[800px]"
                >
                    <CreateUser />
                </Modal>
                <div className="tw-flex tw-justify-start tw-items-center tw-gap-x-4">
                    <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-4 tw-my-8">
                        <div>
                            <button onClick={() => setSelectedProductOpen(true)} className="tw-flex tw-justify-center tw-bg-yellow-500 tw-rounded-md tw-px-16 tw-py-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>


                                <span>انتخاب کالا</span>
                            </button>
                            <Modal
                                isOpen={selectedProductOpen}
                                onClose={() => setSelectedProductOpen(false)}
                                reqular={true}
                                className="tw-w-[800px]"
                            >
                                <ProductSelectedListInModal
                                    products={products?.data}
                                    productLoading={productLoading}
                                    productError={productError}
                                    setSelectedProductOpen={setSelectedProductOpen}
                                    setSelectProductFromModal={setSelectProductFromModal} />
                            </Modal>
                        </div>
                        {/* <div className="tw-relative">
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
                                                    <div className="flex flex-row tw-justify-between items-center">
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
                        </div> */}
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
                    <div className="tw-flex tw-items-center tw-gap-x-8">
                        <div className="tw-relative">
                            <input
                                onFocus={handleFocuse}
                                onBlur={handleBlur}
                                value={searchQuery}
                                onChange={handleInputChange}
                                placeholder="کالا / محصول"
                                type="text"
                                className="tw-border tw-px-2 tw-border-gray-500 tw-rounded-md tw-py-2 tw-w-[340px]"
                            />

                            {showProducts && (
                                <div className="tw-border tw-w-[340px] tw-overflow-auto tw-max-h-[250px] tw-min-h-[48px] tw-absolute tw-top-[48px] tw-box-border tw-bg-white tw-shadow-md">
                                    <ul
                                        onClick={(e) => e.stopPropagation()}
                                        className="serach__product-lists"
                                    >
                                        {productLoading && <span>درحال بارگزاری محصولات</span>}
                                        {productError && <span>خطا هنگام بارگزاری محصولات رخ داده است!</span>}
                                        {filteredData?.map((item: IProducts, index: number) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => handleProductSelect(item)}
                                                    className="min-h-[67px] cursor-pointer"
                                                >
                                                    <div className="tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                        <div className=" tw-relative tw-flex tw-flex-col tw-pt-4">
                                                            <span className="tw-text-sm tw-px-4">
                                                                {" "}
                                                                {item.productName}
                                                            </span>
                                                            <span className="tw-text-red-500 tw-text-xs tw-px-4 tw-absolute tw-top-10 tw-right-0 ">
                                                                کیلوگرم
                                                            </span>
                                                        </div>
                                                        <span className="tw-text-xs tw-px-4">
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
                            <CustomInput placeholder="قیمت" />
                        </div>
                        <div>
                            <button onClick={handleOrders} className="tw-py-2 tw-px-4 tw-rounded-md tw-bg-green-500 tw-text-white">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tw-grid tw-grid-cols-3 tw-gap-8">
                    <div className="tw-col-span-2">
                        <ProductSelectedList orders={orders} setOrders={setOrders} />
                    </div>
                    <div className="">
                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <CustomDatepicker placeholder="تاریخ تسویه" />
                            <div className="tw-w-100">
                                <CustomTextarea placeholder="توضیحات" />
                            </div>
                        </div>

                        {/* <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع فاکتور</label>
                            <div>
                                <CusromRadioGroupButton items={factorType} />
                            </div>
                        </div> */}
                        {/* <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع خروج</label>
                            <div>
                                <CusromRadioGroupButton items={exitType} />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع ارسال</label>
                            <div>
                                <CusromRadioGroupButton items={sendType} />
                            </div>
                        </div> */}

                        <div className="tw-flex tw-justify-between tw-pt-8">
                            <span className="tw-font-weight-bold">قیمت کل</span>
                            <span className="tw-font-weight-bold">
                            </span>
                        </div>
                        <div className="salefactor d-flex flex-column justify-content-between">
                            <span className="font-weight-bold">
                            </span>
                        </div>
                        <div className="d-flex justify-content-end tw-mt-5">
                            <button className="tw-bg-green-600 tw-text-white tw-px-8 tw-py-2 tw-rounded-md">
                                ثبت سفارش
                            </button>
                        </div>
                    </div>
                </div>
            </Card6>
        </>
    );
};

export default Order;
