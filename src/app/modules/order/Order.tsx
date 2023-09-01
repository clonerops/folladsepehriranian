import { useEffect, useReducer, useState } from "react";
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
import { useRetrieveBrands, useRetrieveProducts } from "../product/core/_hooks";
import { IProducts } from "../product/core/_models";
import { useFormik } from "formik";
import { sliceNumberPrice } from "../../../_cloner/helpers/sliceNumberPrice";
import { convertToPersianWord } from "../../../_cloner/helpers/convertPersian";
import { useCreateOrder } from "./core/_hooks";
import moment from "moment-jalaali";
import CreateCustomer from "../customer/components/CreateCustomer";
import { useGetCustomers } from "../customer/core/_hooks";
import { dropdownBrand } from "../product/helpers/dropdownConvert";
import { dropdownCustomer } from "./helpers/dropdowns";
import MyModal from "../../../_cloner/helpers/components/HeadlessModal";
import { exit, factor, purchaseInvoiceType, rent, send, stores } from "./helpers/fakeData";

const Order = () => {
    // Fetching Data
    const { data: customers, isLoading: customersLoading, isError: customersError, refetch } = useGetCustomers()
    const { data: products, isLoading: productLoading, isError: productError } = useRetrieveProducts()
    const { data: brands } = useRetrieveBrands();

    // States
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [factorType, setFactorType] = useState<number>(1);
    const [exitType, setExitType] = useState<number>(1);
    const [sendType, setSendType] = useState<number>(1);
    const [rentType, setRentType] = useState<number>(1);
    const [settlementDate, setSettlementDate] = useState();
    const [purchaseSettlementDate, setPurchaseSettlementDate] = useState();
    const [selectedProductOpen, setSelectedProductOpen] = useState<boolean>(false);
    const [selectProductFromModal, setSelectProductFromModal] = useState<IProducts>()
    const [searchQuery, setSearchQuery] = useState("");
    const [showProducts, setShowProducts] = useState(false);
    const [filteredData, setFilteredData] = useState<IProducts[]>();
    const [orders, setOrders] = useState<any>([])
    const [totalAmount, setTotalAmount] = useState(0);
    const [brandSelected, setBrandSelected] = useState<{ value: number | null, label: string | null }>();
    const [storeSelected, setStoreSelected] = useState<{ value: number | null, label: string | null }>();
    const [purchaseInvoiceTypeSelected, setPurchaseInvoiceTypeSelected] = useState<{ value: number | null, label: string | null }>();



    const handleFactorRadio = (e: React.ChangeEvent<HTMLInputElement>) => setFactorType(Number(e.target.value));
    const handleExitRadio = (e: React.ChangeEvent<HTMLInputElement>) => setExitType(Number(e.target.value));
    const handleSendRadio = (e: React.ChangeEvent<HTMLInputElement>) => setSendType(Number(e.target.value));
    const handleRentRadio = (e: React.ChangeEvent<HTMLInputElement>) => setRentType(Number(e.target.value));
    const handleBrandChange = (selectedOption: any) => setBrandSelected(selectedOption);
    const handleStoreChange = (selectedOption: any) => setStoreSelected(selectedOption);
    const handlepurchaseInvoiceTypeChange = (selectedOption: any) => setPurchaseInvoiceTypeSelected(selectedOption);

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
        }, 500);
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

    useEffect(() => {
        setFilteredData(products?.data)
    }, [products?.data])

    useEffect(() => {
        const prices = orders?.map((obj: any) => Number(obj.price));
        const newPrices = [...prices];
        const newTotal = newPrices.reduce((acc: any, item) => acc + item, 0);
        setTotalAmount(newTotal);
    }, [orders]);

    const initialValues = {
        productName: "",
        count: "",
        price: "",
        productDesc: "",
        sellerCompanyRow: "",
        buyPrice: "",
        rowId: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { resetForm }) => {
            const productOrder = {
                id: "",
                productName: searchQuery,
                productBrandId: brandSelected?.value,
                productBrandName: brandSelected?.label,
                warehouseId: storeSelected?.value,
                warehouseName: storeSelected?.label,
                productDesc: values.productDesc,
                buyPrice: values.buyPrice,
                purchaseSettlementDate: purchaseSettlementDate,
                purchaseInvoiceTypeId: purchaseInvoiceTypeSelected?.value,
                purchaseInvoiceTypeName: purchaseInvoiceTypeSelected?.label,
                sellerCompanyRow: values.sellerCompanyRow,
                count: values.count,
                price: values.price,
                rowId: values.rowId
            }

            setOrders([...orders, productOrder])
            resetForm()
            setSearchQuery("")
            setStoreSelected({ value: null, label: null })
            setBrandSelected({ value: null, label: null })

        }
    })


    // const [input, dispatch] = useReducer(
    //     (state: any, newState: any) => ({ ...state, ...newState }),
    //     {
    //         description: "",
    //     }
    // );

    // const handleChangeValue = (event: any) => {
    //     const inputName = event.target.name;
    //     const inputValue = event.target.value;

    //     dispatch({ [inputName]: inputValue });
    // };






    // const { mutate, data, isLoading, isError } = useCreateOrder()

    // const handleCreateOrder = () => {
    //     const formData = {
    //         customerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //         totalAmount: totalAmount,
    //         orderCode: 0,
    //         confirmedStatus: true,
    //         description: input.description,
    //         exitType: exitType,
    //         orderSendTypeId: sendType,
    //         paymentTypeId: 0,
    //         customerOfficialName: "string",
    //         invoiceTypeId: factorType,
    //         approvedDate: "string",
    //         freightName: "string",
    //         settlementDate: moment(settlementDate).format("jYYYY/jMM/jDD"),
    //         dischargePlaceAddress: "string",
    //         freightDriverName: "string",
    //         carPlaque: "string",
    //         details: orders?.map((item) => {
    //             return {
    //                 productId: item.productName
    //             }
    //         })
    //         // details: [
    //         //     {
    //         //         rowId: 0,
    //         //         productId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //         //         warehouseId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //         //         proximateAmount: 0,
    //         //         numberInPackage: 0,
    //         //         price: 0,
    //         //         cargoSendDate: "string",
    //         //         buyPrice: 0,
    //         //         purchaseInvoiceType: 0,
    //         //         purchaseSettlementDate: "string",
    //         //         sellerCompanyRow: "string"
    //         //     }
    //         // ]
    //     }
    //     console.log("formData", formData)
    //     // mutate(formData)
    // }

    return (
        <>
            <Card6 title="" image="">
                {/* Product Number and Submit Date */}
                <div className="tw-flex tw-justify-between">
                    <div className="tw-font-bold tw-font-yekan_bold tw-text-2xl">
                        <span className="tw-px-2">شماره سفارش</span>
                        <span className="tw-px-2 tw-text-green-700">35789</span>
                    </div>
                    {/* <div className="tw-font-bold tw-font-yekan_bold tw-text-xl">
                        <span className="tw-px-2">تاریخ سفارش</span>
                        <span className="tw-px-2">{moment(Date.now()).format("jYYYY/jMM/jDD").toString()}</span>
                    </div> */}
                </div>
                {/* Search Customer and Selected Facttor&Send&Exit&Rent */}
                <div className="tw-grid tw-grid-cols-6 tw-gap-x-4">
                    <div className="tw-col-span-2">
                        <Card6 image="" title="">
                            <div className="tw-pt-4">
                                <label className="tw-font-yekan_bold tw-text-lg">مشتری و تاریخ تسویه</label>
                                <div className="tw-mt-8">
                                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-x-4">
                                        <div
                                            className="tw-w-full md:tw-w-full"
                                        >
                                            <ProfessionalSelect
                                                options={dropdownCustomer(customers?.data)}
                                                placeholder="جستجو مشتری" />
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(true)}
                                            className="tw-flex tw-my-2 md:tw-my-0 tw-bg-green-600 tw-p-3 tw-rounded-md tw-text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            {/* <span>افزودن مشتری</span> */}
                                        </button>
                                    </div>
                                    <MyModal
                                        title="ایجاد مشتری جدید"
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                    >
                                        <CreateCustomer refetch={refetch} setIsCreateOpen={setIsOpen} />
                                    </MyModal>
                                </div>
                            </div>
                            <div className="tw-pt-4">
                                <CustomDatepicker
                                    onChange={(d: any) => setSettlementDate(d.value)}
                                    placeholder="تاریخ تسویه" />
                            </div>
                            <div className="tw-pt-4">
                                <CustomInput
                                    placeholder="توضیحات"
                                />
                            </div>

                        </Card6>
                    </div>

                    <Card6 image="" title="">
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold tw-text-lg">نوع فاکتور</label>
                            <div className="tw-mt-8">
                                <CusromRadioGroupButton className="tw-my-4" selected={factorType} handleRadio={handleFactorRadio} items={factor} name="factor" />
                            </div>
                        </div>
                    </Card6>

                    <Card6 image="" title="">
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold tw-text-lg">نوع خروج</label>
                            <div className="tw-mt-8">
                                <CusromRadioGroupButton className="tw-my-4" selected={exitType} handleRadio={handleExitRadio} items={exit} name="exit" />
                            </div>
                        </div>
                    </Card6>

                    <Card6 image="" title="">
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold tw-text-lg">نوع ارسال</label>
                            <div className="tw-mt-8">
                                <CusromRadioGroupButton className="tw-my-4" selected={sendType} handleRadio={handleSendRadio} items={send} name="send" />
                            </div>
                        </div>
                    </Card6>

                    <Card6 image="" title="">
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold tw-text-lg">نوع کرایه</label>
                            <div className="tw-mt-8">
                                <CusromRadioGroupButton className="tw-my-4" selected={rentType} handleRadio={handleRentRadio} items={rent} name="rent" />
                            </div>
                        </div>
                    </Card6>
                </div>
                {/* Selected Products */}
                <div className="md:tw-flex md:tw-justify-start md:tw-items-center tw-flex-wrap tw-gap-x-4">
                    <div className="tw-flex tw-justify-center tw-items-center tw-flex-row tw-flex-wrap tw-gap-4 md:tw-my-8 tw-mb-2">
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
                    </div>
                    <form onSubmit={formik.handleSubmit} className="md:tw-flex md:tw-items-center tw-flex-wrap md:tw-gap-x-8">
                        <div className="tw-relative tw-w-[20%] tw-my-2">
                            <input
                                onFocus={handleFocuse}
                                onBlur={handleBlur}
                                value={searchQuery}
                                onChange={handleInputChange}
                                placeholder="کالا / محصول"
                                type="text"
                                className="customInput tw-border tw-px-2 tw-border-gray-300 tw-rounded-md tw-py-2 tw-w-full tw-outline-none"
                            />

                            {showProducts && (
                                <div className="tw-border tw-w-[340px] tw-overflow-auto tw-max-h-[250px] tw-min-h-[48px] tw-absolute tw-top-[42px] tw-box-border tw-bg-white tw-shadow-md tw-z-[9999] tw-rounded-md">
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
                                                    className="tw-min-h-[60px] tw-cursor-pointer"
                                                >
                                                    <div className="tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                        <div className=" tw-relative tw-flex tw-flex-col tw-pt-4">
                                                            <span className="tw-text-sm tw-px-4">
                                                                {" "}
                                                                {item.productName}
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
                        <div className="tw-w-[20%] tw-my-2">
                            <ProfessionalSelect
                                options={dropdownBrand(brands)}
                                value={brandSelected}
                                onChange={handleBrandChange}
                                placeholder="برند"
                            />
                        </div>
                        <div className="tw-w-[20%] tw-my-2">
                            <ProfessionalSelect
                                options={stores}
                                value={storeSelected}
                                onChange={handleStoreChange}
                                placeholder="انبار"
                            />
                        </div>
                        <div className="tw-my-2 tw-w-[20%]">
                            <CustomInput
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.count}
                                errors={formik.errors.count}
                                name={"count"}
                                type="text"
                                placeholder="مقدار / تعداد"
                                formikInput={true} />
                        </div>
                        <div className="tw-my-2 tw-w-[20%]">
                            <CustomInput
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.price}
                                errors={formik.errors.price}
                                name={"price"}
                                type="text"
                                placeholder="قیمت"
                                formikInput={true} />
                        </div>
                        <div className="tw-my-2 tw-w-[20%]">
                            <CustomInput
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.productDesc}
                                errors={formik.errors.productDesc}
                                name={"productDesc"}
                                type="text"
                                placeholder="توضیحات"
                                formikInput={true} />
                        </div>
                        <div className="tw-my-2 tw-w-[20%]">
                            <CustomInput
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.rowId}
                                errors={formik.errors.rowId}
                                name={"rowId"}
                                type="text"
                                placeholder="ردیف فروش"
                                formikInput={true} />
                        </div>
                        {storeSelected?.value === 1 &&
                            <>
                                {/* <div className="tw-my-2 tw-w-[20%]">
                                    <CustomInput
                                        getFieldProps={formik.getFieldProps}
                                        touched={formik.touched.sellerCompanyRow}
                                        errors={formik.errors.sellerCompanyRow}
                                        name={"sellerCompanyRow"}
                                        type="text"
                                        placeholder="خرید از"
                                        formikInput={true} />
                                </div> */}
                                <div className="tw-my-2 tw-w-[20%]">
                                    <CustomInput
                                        getFieldProps={formik.getFieldProps}
                                        touched={formik.touched.buyPrice}
                                        errors={formik.errors.buyPrice}
                                        name={"buyPrice"}
                                        type="text"
                                        placeholder="قیمت خرید"
                                        formikInput={true} />
                                </div>

                                <div className="tw-my-2 tw-w-[20%]">
                                    <CustomDatepicker
                                        onChange={(d: any) => setPurchaseSettlementDate(d.value)}
                                        placeholder="تاریخ تسویه خرید" />
                                </div>
                                <div className="tw-w-[20%] tw-my-2">
                                    <ProfessionalSelect
                                        options={purchaseInvoiceType}
                                        value={purchaseInvoiceTypeSelected}
                                        onChange={handlepurchaseInvoiceTypeChange}
                                        placeholder="نوع فاکتور خرید"
                                    />
                                </div>
                                <div className="tw-my-2 tw-w-[20%]">
                                    <CustomInput
                                        getFieldProps={formik.getFieldProps}
                                        touched={formik.touched.sellerCompanyRow}
                                        errors={formik.errors.sellerCompanyRow}
                                        name={"sellerCompanyRow"}
                                        type="text"
                                        placeholder="ردیف بنگاه فروشگاه"
                                        formikInput={true} />
                                </div>

                            </>
                        }
                        <div className="tw-my-2 tw-flex tw-justify-end">
                            <button className="tw-py-2 tw-px-4 tw-rounded-md tw-bg-green-500 tw-text-white">
                                <span>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg> */}
                                    افزودن
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="tw-col-span-2 tw-mb-2">
                    <ProductSelectedList orders={orders} setOrders={setOrders} />
                </div>


                {/* Orders Submit UI2 */}
                {/* <div className="tw-col-span-2 tw-mb-2">
                    <ProductSelectedList orders={orders} setOrders={setOrders} />
                </div>
                <div className="">
                    <div className="tw-grid tw-grid-cols-4 tw-gap-4">
                        <div>
                            <CustomDatepicker
                                onChange={(d: any) => setSettlementDate(d.value)}
                                placeholder="تاریخ تسویه" />
                        </div>
                        <div className="tw-w-100 tw-col-span-3">
                            <CustomTextarea
                                name="description"
                                value={input.description}
                                onChange={handleChangeValue}
                                placeholder="توضیحات" />
                        </div>
                    </div>

                    <div className="tw-grid tw-grid-cols-3">
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع فاکتور</label>
                            <div>
                                <CusromRadioGroupButton selected={factorType} handleRadio={handleFactorRadio} items={factor} name="factor" />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع خروج</label>
                            <div>
                                <CusromRadioGroupButton selected={exitType} handleRadio={handleExitRadio} items={exit} name="exit" />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع ارسال</label>
                            <div>
                                <CusromRadioGroupButton selected={sendType} handleRadio={handleSendRadio} items={send} name="send" />
                            </div>
                        </div>
                    </div>

                    <div className="tw-flex tw-justify-between tw-pt-8">
                        <span className="tw-font-yekan_bold tw-text-2xl">قیمت کل</span>
                        <span className="tw-font-yekan_bold tw-text-2xl tw-text-green-500">
                            {sliceNumberPrice(totalAmount)} ریال
                        </span>
                    </div>
                    <div className="salefactor d-flex flex-column justify-content-between">
                        <span className="fonttw-font-yekan_bold">
                            {convertToPersianWord(totalAmount)} تومان
                        </span>
                    </div>
                    <div className="d-flex justify-content-end tw-mt-5">
                        <button onClick={handleCreateOrder} className="tw-bg-green-600 tw-text-white tw-px-8 tw-py-2 tw-rounded-md">
                            ثبت سفارش
                        </button>
                    </div>
                </div> */}
                {/* Orders Submit UI2 */}
                {/* <div className="tw-col-span-2 tw-mb-2">
                    <ProductSelectedList orders={orders} setOrders={setOrders} />
                </div> */}
                {/* <div className="">
                    <div className="tw-grid tw-grid-cols-4 tw-gap-4">
                        <div>
                            <CustomDatepicker
                                onChange={(d: any) => setSettlementDate(d.value)}
                                placeholder="تاریخ تسویه" />
                        </div>
                        <div className="tw-w-100 tw-col-span-3">
                            <CustomTextarea
                                name="description"
                                value={input.description}
                                onChange={handleChangeValue}
                                placeholder="توضیحات" />
                        </div>
                    </div>

                    <div className="tw-grid tw-grid-cols-3">
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع فاکتور</label>
                            <div>
                                <CusromRadioGroupButton selected={factorType} handleRadio={handleFactorRadio} items={factor} name="factor" />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع خروج</label>
                            <div>
                                <CusromRadioGroupButton selected={exitType} handleRadio={handleExitRadio} items={exit} name="exit" />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع ارسال</label>
                            <div>
                                <CusromRadioGroupButton selected={sendType} handleRadio={handleSendRadio} items={send} name="send" />
                            </div>
                        </div>
                    </div>

                    <div className="tw-flex tw-justify-between tw-pt-8">
                        <span className="tw-font-yekan_bold tw-text-2xl">قیمت کل</span>
                        <span className="tw-font-yekan_bold tw-text-2xl tw-text-green-500">
                            {sliceNumberPrice(totalAmount)} ریال
                        </span>
                    </div>
                    <div className="salefactor d-flex flex-column justify-content-between">
                        <span className="fonttw-font-yekan_bold">
                            {convertToPersianWord(totalAmount)} تومان
                        </span>
                    </div>
                    <div className="d-flex justify-content-end tw-mt-5">
                        <button onClick={handleCreateOrder} className="tw-bg-green-600 tw-text-white tw-px-8 tw-py-2 tw-rounded-md">
                            ثبت سفارش
                        </button>
                    </div>
                </div> */}
                {/* Orders Submit UI1 */}
                <div className="md:tw-grid md:tw-grid-cols-3 tw-gap-8">
                    {/* <div className="tw-col-span-2 tw-mb-2">
                        <ProductSelectedList orders={orders} setOrders={setOrders} />
                    </div> */}
                    {/* <div className="">
                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <CustomDatepicker
                                onChange={(d: any) => setSettlementDate(d.value)}
                                placeholder="تاریخ تسویه" />
                            <div className="tw-w-100">
                                <CustomTextarea
                                    name="description"
                                    value={input.description}
                                    onChange={handleChangeValue}
                                    placeholder="توضیحات" />
                            </div>
                        </div>

                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع فاکتور</label>
                            <div>
                                <CusromRadioGroupButton selected={factorType} handleRadio={handleFactorRadio} items={factor} name="factor" />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع خروج</label>
                            <div>
                                <CusromRadioGroupButton selected={exitType} handleRadio={handleExitRadio} items={exit} name="exit" />
                            </div>
                        </div>
                        <div className="tw-pt-4">
                            <label className="tw-font-yekan_bold">نوع ارسال</label>
                            <div>
                                <CusromRadioGroupButton selected={sendType} handleRadio={handleSendRadio} items={send} name="send" />
                            </div>
                        </div>

                        <div className="tw-flex tw-justify-between tw-pt-8">
                            <span className="tw-font-yekan_bold tw-text-2xl">قیمت کل</span>
                            <span className="tw-font-yekan_bold tw-text-2xl tw-text-green-500">
                                {sliceNumberPrice(totalAmount)} ریال
                            </span>
                        </div>
                        <div className="salefactor d-flex flex-column justify-content-between">
                            <span className="fonttw-font-yekan_bold">
                                {convertToPersianWord(totalAmount)} تومان
                            </span>
                        </div>
                        <div className="d-flex justify-content-end tw-mt-5">
                            <button onClick={handleCreateOrder} className="tw-bg-green-600 tw-text-white tw-px-8 tw-py-2 tw-rounded-md">
                                ثبت سفارش
                            </button>
                        </div>
                    </div> */}
                </div>
            </Card6>

            <div className="tw-mt-8">
                <Card6 image="" title="">
                    <div>
                        <div className="tw-flex tw-justify-between tw-pt-8">
                            <span className="tw-font-yekan_bold tw-text-2xl">قیمت کل</span>
                            <span className="tw-font-yekan_bold tw-text-2xl tw-text-green-500">
                                {sliceNumberPrice(totalAmount)} ریال
                            </span>
                        </div>
                        <div className="salefactor d-flex flex-column justify-content-between">
                            <span className="fonttw-font-yekan_bold">
                                {convertToPersianWord(totalAmount)} تومان
                            </span>
                        </div>

                        <div className="d-flex justify-content-end tw-mt-5">
                            <button className="tw-bg-green-600 tw-text-white tw-px-8 tw-py-2 tw-rounded-md">
                                ثبت سفارش
                            </button>
                        </div>
                    </div>
                </Card6>
            </div>

            {/* UI 3 */}
            {/* <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-5 tw-gap-4 tw-mt-4">
                <Card6 image="" title="">
                    <div className="tw-pt-4">
                        <label className="tw-font-yekan_bold tw-text-2xl">نوع فاکتور</label>
                        <div className="tw-mt-8">
                            <CusromRadioGroupButton className="tw-my-4" selected={factorType} handleRadio={handleFactorRadio} items={factor} name="factor" />
                        </div>
                    </div>
                </Card6>
                <Card6 image="" title="">
                    <div className="tw-pt-4">
                        <label className="tw-font-yekan_bold tw-text-2xl">نوع خروج</label>
                        <div className="tw-mt-8">
                            <CusromRadioGroupButton className="tw-my-4" selected={exitType} handleRadio={handleExitRadio} items={exit} name="exit" />
                        </div>
                    </div>
                </Card6>
                <Card6 image="" title="">
                    <div className="tw-pt-4">
                        <label className="tw-font-yekan_bold tw-text-2xl">نوع ارسال</label>
                        <div className="tw-mt-8">
                            <CusromRadioGroupButton className="tw-my-4" selected={sendType} handleRadio={handleSendRadio} items={send} name="send" />
                        </div>
                    </div>
                </Card6>
                <div className="md:tw-col-span-2">
                    <Card6 image="" title="">
                        <div className="tw-flex tw-flex-col">
                            <div className="tw-my-1">
                                <CustomDatepicker
                                    onChange={(d: any) => setSettlementDate(d.value)}
                                    placeholder="تاریخ تسویه" />
                            </div>
                            <div className="tw-w-100 tw-col-span-3 tw-my-1">
                                <CustomTextarea
                                    name="description"
                                    value={input.description}
                                    onChange={handleChangeValue}
                                    placeholder="توضیحات" />
                            </div>
                        </div>
                        <div>
                            <div className="tw-flex tw-justify-between tw-pt-8">
                                <span className="tw-font-yekan_bold tw-text-2xl">قیمت کل</span>
                                <span className="tw-font-yekan_bold tw-text-2xl tw-text-green-500">
                                    {sliceNumberPrice(totalAmount)} ریال
                                </span>
                            </div>
                            <div className="salefactor d-flex flex-column justify-content-between">
                                <span className="fonttw-font-yekan_bold">
                                    {convertToPersianWord(totalAmount)} تومان
                                </span>
                            </div>
                            <div className="d-flex justify-content-end tw-mt-5">
                                <button onClick={handleCreateOrder} className="tw-bg-green-600 tw-text-white tw-px-8 tw-py-2 tw-rounded-md">
                                    ثبت سفارش
                                </button>
                            </div>
                        </div>
                    </Card6>
                </div>
            </div> */}
        </>
    );
};

export default Order;