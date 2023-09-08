import { useEffect, useState } from "react";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import Modal from "../../../_cloner/helpers/components/Modal";
import CustomInput from "../../../_cloner/helpers/components/CustomInput";
import ProductSelectedList from "./components/ProductSelectedList";
import CustomDatepicker from "../../../_cloner/helpers/components/CustomDatepicker";
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
import {
    dropdownCustomer,
    dropdownExitType,
    dropdownInvoiceType,
    dropdownOrderSendType,
    dropdownPurchaseInvoice,
    dropdownRentPaymentType,
    dropdownWarehouses,
} from "./helpers/dropdowns";
import { exit } from "./helpers/fakeData";
import { ICreateOrderDetails } from "./core/_models";
import {
    useGetInvoiceType,
    useGetPaymentTypes,
    useGetPurchaseInvoice,
    useGetSendTypes,
    useGetWarehouses,
} from "../../../_cloner/helpers/_hooks";
import Swal from "sweetalert2";

const Order = () => {
    // Fetching Data
    const {
        data: customers,
        refetch,
    } = useGetCustomers();
    const {
        data: products,
        isLoading: productLoading,
        isError: productError,
    } = useRetrieveProducts();
    const { data: brands } = useRetrieveBrands();
    const { data: orderSendType } = useGetSendTypes();
    const { data: rent } = useGetPaymentTypes();
    const { data: purchaseInvoiceType } = useGetPurchaseInvoice();
    const { data: factor } = useGetInvoiceType();
    // const { data: stores } = useGetWarehouseTypes()
    const { data: stores } = useGetWarehouses();

    // States
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [settlementDate, setSettlementDate] = useState();
    const [description, setDescription] = useState("");
    const [purchaseSettlementDate, setPurchaseSettlementDate] = useState();
    const [selectedProductOpen, setSelectedProductOpen] =
        useState<boolean>(false);
    const [selectProductFromModal, setSelectProductFromModal] =
        useState<IProducts>();
    const [searchQuery, setSearchQuery] = useState("");
    const [productSelected, setProductSelected] = useState<any>("");
    const [showProducts, setShowProducts] = useState(false);
    const [filteredData, setFilteredData] = useState<IProducts[]>();
    const [orders, setOrders] = useState<any>([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [brandSelected, setBrandSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();
    const [storeSelected, setStoreSelected] = useState<{
        value: number | null;
        label: string | null;
        warehouseTypeId: number | null;
    }>();
    const [customerSelect, setCustomerSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();

    const [orderSendTypeSelect, setOrderSendTypeSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();
    const [invoiceSelect, setInvoiceSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();
    const [purchaseInvoiceSelect, setPurchaseInvoiceSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();
    const [rentPaymentSelect, setRentPaymentSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();
    const [exitSelect, setExitSelected] = useState<{
        value: number | null;
        label: string | null;
    }>();

    const handleBrandChange = (selectedOption: any) =>
        setBrandSelected(selectedOption);
    const handleStoreChange = (selectedOption: any) =>
        setStoreSelected(selectedOption);
    const handleCustomerChange = (selectedOption: any) =>
        setCustomerSelected(selectedOption);

    const handleOrderSendType = (selectedOption: any) =>
        setOrderSendTypeSelected(selectedOption);
    const handleInvoiceSelect = (selectedOption: any) =>
        setInvoiceSelected(selectedOption);
    const handlePurchaseInvoice = (selectedOption: any) =>
        setPurchaseInvoiceSelected(selectedOption);
    const handleRentPayment = (selectedOption: any) =>
        setRentPaymentSelected(selectedOption);
    const handleExit = (selectedOption: any) => setExitSelected(selectedOption);

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
        setProductSelected(selectProductFromModal?.id);
    }, [selectProductFromModal]);

    useEffect(() => {
        setFilteredData(products?.data);
    }, [products?.data]);

    useEffect(() => {
        const prices = orders?.map((obj: any) => Number(obj.price));
        const newPrices = [...prices];
        const newTotal = newPrices.reduce((acc: any, item) => acc + item, 0);
        setTotalAmount(newTotal);
    }, [orders]);

    const initialValues = {
        productName: "",
        proximateAmount: "",
        price: "",
        productDesc: "",
        sellerCompanyRow: "",
        buyPrice: "",
        rowId: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { resetForm }) => {
            const productOrder = {
                id: productSelected,
                productName: searchQuery,
                productBrandId: brandSelected?.value,
                productBrandName: brandSelected?.label,
                warehouseId: storeSelected?.value,
                warehouseTypeId: storeSelected?.warehouseTypeId,
                warehouseName: storeSelected?.label,
                productDesc: values.productDesc,
                buyPrice: values.buyPrice,
                purchaseSettlementDate: purchaseSettlementDate,
                purchaseInvoiceTypeId: purchaseInvoiceSelect?.value,
                purchaseInvoiceTypeName: purchaseInvoiceSelect?.label,
                sellerCompanyRow: values.sellerCompanyRow,
                proximateAmount: values.proximateAmount,
                price: values.price,
                rowId: values.rowId,
            };

            setOrders([...orders, productOrder]);
            resetForm();
            setSearchQuery("");
            setStoreSelected({
                value: null,
                label: null,
                warehouseTypeId: null,
            });
            setBrandSelected({ value: null, label: null });
        },
    });

    const { mutate, isLoading } = useCreateOrder();

    const handleCreateOrder = () => {
        if (orders.length === 0) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: 'کالایی در لیست سفارشات موجود نمی باشد',
                showConfirmButton: false,
                timer: 8500,
            });
        } else {
            const formData = {
                customerId: customerSelect?.value?.toString(),
                totalAmount: totalAmount,
                orderCode: 0,
                confirmedStatus: true,
                description: description,
                exitType: exitSelect?.value,
                orderSendTypeId: orderSendTypeSelect?.value,
                paymentTypeId: rentPaymentSelect?.value,
                customerOfficialName: "string",
                invoiceTypeId: invoiceSelect?.value,
                freightName: "string",
                settlementDate: moment(settlementDate).format("jYYYY/jMM/jDD"),
                dischargePlaceAddress: "string",
                freightDriverName: "string",
                carPlaque: "string",
                details: orders?.map((item: ICreateOrderDetails) => {
                    return {
                        rowId: 0,
                        productId: item.id,
                        warehouseId: Number(item.warehouseId),
                        warehouseTypeId: Number(item.warehouseTypeId),
                        proximateAmount: Number(item.proximateAmount),
                        numberInPackage: Number(item.proximateAmount),
                        price: Number(item.price),
                        cargoSendDate: "1402/02/02",
                        buyPrice: Number(item.buyPrice),
                        purchaseInvoiceTypeId: item.purchaseInvoiceTypeId,
                        purchaserCustomerId: customerSelect?.value?.toString(),
                        purchaseSettlementDate: "1402/02/02",
                        sellerCompanyRow: "string",
                    };
                }),
            };
            mutate(formData, {
                onSuccess: (orderData) => {
                    orderData.succeeded === true
                        ? Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: orderData.message,
                            showConfirmButton: false,
                            timer: 8500,
                        })
                        : Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: orderData.data.Message,
                            showConfirmButton: false,
                            timer: 8500,
                        });
                },
            });
        }
    };
    return (
        <>
            <>
                {/* Product Number and Submit Date */}
                {/* <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-y-3 tw-justify-between">
                    <div className="tw-font-bold tw-font-yekan_bold tw-text-2xl">
                        <span className="tw-px-2">شماره سفارش</span>
                        <span className="tw-px-2 tw-text-green-700">35789</span>
                    </div>
                    <div className="tw-font-bold tw-font-yekan_bold tw-text-2xl">
                        <span className="tw-px-2">تاریخ سفارش</span>
                        <span className="tw-px-2 tw-text-slate-500">{moment(Date.now()).format("jYYYY/jMM/jDD").toString()}</span>
                    </div>
                </div> */}
                {/* Search Customer and Selected Facttor&Send&Exit&Rent */}
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-4">
                    <Card6 image="" title="">
                        <div className="tw-flex tw-justify-between tw-flex-col">
                            <div className="tw-pt-4">
                                <label className="tw-font-yekan_bold tw-text-lg">
                                    مشتری و تاریخ تسویه
                                </label>
                                <div className="tw-mt-8">
                                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-x-4">
                                        <div className="tw-w-full md:tw-w-full">
                                            <ProfessionalSelect
                                                options={dropdownCustomer(
                                                    customers?.data
                                                )}
                                                value={customerSelect}
                                                onChange={handleCustomerChange}
                                                placeholder="جستجو مشتری"
                                            />
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(true)}
                                            className="tw-flex tw-my-2 md:tw-my-0 tw-bg-green-600 tw-p-3 tw-rounded-md tw-text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="tw-w-6 tw-h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <Modal
                                        isOpen={isOpen}
                                        onClose={() => setIsOpen(false)}
                                    >
                                        <CreateCustomer
                                            refetch={refetch}
                                            setIsCreateOpen={setIsOpen}
                                        />
                                    </Modal>
                                </div>
                            </div>
                            <div className="tw-pt-4">
                                <CustomDatepicker
                                    onChange={(d: any) =>
                                        setSettlementDate(d.value)
                                    }
                                    placeholder="تاریخ تسویه"
                                />
                            </div>
                        </div>
                    </Card6>

                    <Card6 image="" title="">
                        <label className="tw-font-yekan_bold tw-text-lg tw-py-4">
                            مشخصه سفارش
                        </label>
                        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                            <div>
                                <ProfessionalSelect
                                    options={dropdownOrderSendType(
                                        orderSendType
                                    )}
                                    value={orderSendTypeSelect}
                                    onChange={handleOrderSendType}
                                    placeholder="نوع ارسال"
                                />
                            </div>
                            <div>
                                <ProfessionalSelect
                                    options={dropdownInvoiceType(factor)}
                                    value={invoiceSelect}
                                    onChange={handleInvoiceSelect}
                                    placeholder="نوع فاکتور"
                                />
                            </div>
                            <div>
                                <ProfessionalSelect
                                    options={dropdownRentPaymentType(rent)}
                                    value={rentPaymentSelect}
                                    onChange={handleRentPayment}
                                    placeholder="نوع کرایه"
                                />
                            </div>
                            <div>
                                <ProfessionalSelect
                                    options={dropdownExitType(exit)}
                                    value={exitSelect}
                                    onChange={handleExit}
                                    placeholder="نوع خروج"
                                />
                            </div>
                            <div className="tw-col-span-2">
                                <CustomInput
                                    placeholder="توضیحات"
                                    value={description}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </Card6>
                </div>
                {/* Selected Products */}
                <div className="tw-mt-8">
                    <Card6 image="" title="">
                        <div>
                            <div>
                                <button
                                    onClick={() => setSelectedProductOpen(true)}
                                    className="tw-flex tw-justify-center tw-bg-yellow-500 tw-rounded-md tw-px-16 tw-py-[8px]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="tw-w-6 tw-h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                        />
                                    </svg>

                                    <span>انتخاب کالا</span>
                                </button>
                                <Modal
                                    isOpen={selectedProductOpen}
                                    onClose={() =>
                                        setSelectedProductOpen(false)
                                    }
                                    className="tw-w-[800px]"
                                >
                                    <ProductSelectedListInModal
                                        products={products?.data}
                                        productLoading={productLoading}
                                        productError={productError}
                                        setSelectedProductOpen={
                                            setSelectedProductOpen
                                        }
                                        setSelectProductFromModal={
                                            setSelectProductFromModal
                                        }
                                    />
                                </Modal>
                            </div>
                        </div>

                        <div className="md:tw-flex md:tw-justify-start md:tw-items-center tw-flex-wrap tw-gap-x-4">
                            <form
                                onSubmit={formik.handleSubmit}
                                className="md:tw-flex md:tw-items-center tw-flex-wrap md:tw-gap-x-8"
                            >
                                <div className="tw-relative md:tw-w-[20%] tw-my-2">
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
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                className="serach__product-lists"
                                            >
                                                {productLoading && (
                                                    <span>
                                                        درحال بارگزاری محصولات
                                                    </span>
                                                )}
                                                {productError && (
                                                    <span>
                                                        خطا هنگام بارگزاری
                                                        محصولات رخ داده است!
                                                    </span>
                                                )}
                                                {filteredData?.map(
                                                    (
                                                        item: IProducts,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                onClick={() =>
                                                                    handleProductSelect(
                                                                        item
                                                                    )
                                                                }
                                                                className="tw-min-h-[60px] tw-cursor-pointer"
                                                            >
                                                                <div className="tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                                    <div className=" tw-relative tw-flex tw-flex-col tw-pt-4">
                                                                        <span className="tw-text-sm tw-px-4">
                                                                            {" "}
                                                                            {
                                                                                item.productName
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <span className="tw-text-xs tw-px-4">
                                                                        {" "}
                                                                        {
                                                                            item.brandName
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className="md:tw-w-[20%] tw-my-2">
                                    <ProfessionalSelect
                                        options={dropdownBrand(brands)}
                                        value={brandSelected}
                                        onChange={handleBrandChange}
                                        placeholder="برند"
                                    />
                                </div>
                                <div className="md:tw-w-[20%] tw-my-2">
                                    <ProfessionalSelect
                                        options={dropdownWarehouses(stores)}
                                        value={storeSelected}
                                        onChange={handleStoreChange}
                                        placeholder="انبار"
                                    />
                                </div>
                                <div className="tw-my-2 md:tw-w-[20%]">
                                    <div className="tw-flex tw-justify-center tw-items-center ">
                                        <CustomInput
                                            getFieldProps={formik.getFieldProps}
                                            touched={
                                                formik.touched.proximateAmount
                                            }
                                            errors={
                                                formik.errors.proximateAmount
                                            }
                                            name={"proximateAmount"}
                                            type="text"
                                            placeholder="مقدار"
                                            formikInput={true}
                                        />
                                        <span className="tw-text-sm tw-text-red-500 tw-pr-2">
                                            کیلوگرم
                                        </span>
                                    </div>
                                </div>
                                <div className="tw-my-2 md:tw-w-[20%]">
                                    <CustomInput
                                        getFieldProps={formik.getFieldProps}
                                        touched={formik.touched.price}
                                        errors={formik.errors.price}
                                        name={"price"}
                                        type="text"
                                        placeholder="قیمت"
                                        formikInput={true}
                                    />
                                </div>
                                <div className="tw-my-2 md:tw-w-[20%]">
                                    <CustomInput
                                        getFieldProps={formik.getFieldProps}
                                        touched={formik.touched.productDesc}
                                        errors={formik.errors.productDesc}
                                        name={"productDesc"}
                                        type="text"
                                        placeholder="توضیحات"
                                        formikInput={true}
                                    />
                                </div>
                                <div className="tw-my-2 md:tw-w-[20%]">
                                    <CustomInput
                                        getFieldProps={formik.getFieldProps}
                                        touched={formik.touched.rowId}
                                        errors={formik.errors.rowId}
                                        name={"rowId"}
                                        type="text"
                                        placeholder="ردیف فروش"
                                        formikInput={true}
                                    />
                                </div>
                                {storeSelected?.warehouseTypeId === 1 && (
                                    <>
                                        <div className="tw-my-2 md:tw-w-[20%]">
                                            <CustomInput
                                                getFieldProps={
                                                    formik.getFieldProps
                                                }
                                                touched={
                                                    formik.touched.buyPrice
                                                }
                                                errors={formik.errors.buyPrice}
                                                name={"buyPrice"}
                                                type="text"
                                                placeholder="قیمت خرید"
                                                formikInput={true}
                                            />
                                        </div>

                                        <div className="tw-my-2 md:tw-w-[20%]">
                                            <CustomDatepicker
                                                onChange={(d: any) =>
                                                    setPurchaseSettlementDate(
                                                        d.value
                                                    )
                                                }
                                                placeholder="تاریخ تسویه خرید"
                                            />
                                        </div>
                                        <div className="md:tw-w-[20%] tw-my-2">
                                            <ProfessionalSelect
                                                options={dropdownPurchaseInvoice(
                                                    purchaseInvoiceType
                                                )}
                                                value={purchaseInvoiceSelect}
                                                onChange={handlePurchaseInvoice}
                                                placeholder="نوع فاکتور خرید"
                                            />
                                        </div>
                                        <div className="tw-my-2 md:tw-w-[20%]">
                                            <CustomInput
                                                getFieldProps={
                                                    formik.getFieldProps
                                                }
                                                touched={
                                                    formik.touched
                                                        .sellerCompanyRow
                                                }
                                                errors={
                                                    formik.errors
                                                        .sellerCompanyRow
                                                }
                                                name={"sellerCompanyRow"}
                                                type="text"
                                                placeholder="ردیف بنگاه فروشگاه"
                                                formikInput={true}
                                            />
                                        </div>
                                    </>
                                )}
                                <div className="tw-my-2 tw-flex tw-justify-end">
                                    <button className="tw-flex tw-gap-x-2 tw-py-2 tw-px-4 tw-rounded-md tw-bg-green-500 tw-text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="tw-w-6 tw-h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                        </svg>
                                        <span>افزودن</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="tw-col-span-2 tw-mb-2">
                            <ProductSelectedList
                                orders={orders}
                                setOrders={setOrders}
                            />
                        </div>
                    </Card6>
                </div>
            </>

            <div className="tw-mt-8">
                <Card6 image="" title="">
                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3">
                        <div className="md:tw-border-l-2 md:tw-border-gray-300">
                            <span className="tw-font-yekan_bold tw-text-xl">
                                قیمت کل: <span className="tw-text-green-500 tw-text-2xl tw-font-bold tw-px-8">{sliceNumberPrice(totalAmount)} ریال</span>
                            </span>
                        </div>
                        <div className="md:tw-border-l-2 md:tw-border-gray-300 md:tw-pr-8">
                            <span className="tw-font-yekan_bold tw-text-xl">
                                قیمت به حروف: <span className="tw-text-green-500 tw-text-sm tw-font-bold tw-px-8">{convertToPersianWord(totalAmount)} تومان</span>
                            </span>
                        </div>
                        <div className="md:tw-pr-8">
                            <span className="tw-font-yekan_bold tw-text-xl">
                                قابل پرداخت: <span className="tw-text-green-500 tw-text-2xl tw-font-bold tw-px-8">{sliceNumberPrice(totalAmount)} ریال</span>
                            </span>
                        </div>
                    </div>
                </Card6>
                <div className="d-flex justify-content-end tw-mt-5">
                    <button
                        onClick={handleCreateOrder}
                        className="tw-bg-green-600 tw-text-white tw-px-28 tw-py-6 tw-rounded-md tw-text-xl"
                    >
                       {isLoading ? "درحال پردازش" : "ثبت سفارش"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Order;
