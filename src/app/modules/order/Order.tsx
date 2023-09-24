import { useEffect, useState, useRef } from "react";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";
import Modal from "../../../_cloner/helpers/components/Modal";
import ProductSelectedList from "./components/ProductSelectedList";
import ProductSelectedListInModal from "./components/ProductSelectedListInModal";
import { useRetrieveProducts } from "../product/core/_hooks";
import { IProducts } from "../product/core/_models";
import { Form, Formik } from "formik";
import { sliceNumberPrice } from "../../../_cloner/helpers/sliceNumberPrice";
import { convertToPersianWord } from "../../../_cloner/helpers/convertPersian";
import { useCreateOrder } from "./core/_hooks";
import moment from "moment-jalaali";
import CreateCustomer from "../customer/components/CreateCustomer";
import { useGetCustomers } from "../customer/core/_hooks";
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
import FormikSelect from "../../../_cloner/helpers/components/FormikSelect";
import FormikDatepicker from "../../../_cloner/helpers/components/FormikDatepicker";
import SubmitButton from "../../../_cloner/helpers/components/SubmitButton";
import FormikInput from "../../../_cloner/helpers/components/FormikInput";
import MultiDatepickerCustom from "../../../_cloner/helpers/components/MultiDatepicker";
import { orderValidation } from "./validations/orderValidation";
import PageTitle from "../../../_cloner/helpers/components/PageTitle";

const Order = () => {
    // Fetching Data
    const { data: customers, refetch: refetchCustomers } = useGetCustomers();
    const {
        data: products,
        isLoading: productLoading,
        isError: productError,
    } = useRetrieveProducts();
    const { data: orderSendType } = useGetSendTypes();
    const { data: rent } = useGetPaymentTypes();
    const { data: purchaseInvoiceType } = useGetPurchaseInvoice();
    const { data: factor } = useGetInvoiceType();
    const { data: warehouse } = useGetWarehouses();
    // States
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
    const [warehouseSelected, setWarehouseSelected] = useState<{
        value: number | null;
        label: string | null;
        warehouseTypeId: number | null;
    }>();
    const [purchaseInvoiceTypeSelected, setPurchaseInvoiceTypeSelected] =
        useState<{
            value: number | null;
            label: string | null;
        }>();
    const [purchaseSettlementDate, setPurchaseSettlementDate] = useState<any>();

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
        if (item?.productIntegratedName) {
            setSearchQuery(item?.productIntegratedName.toString());
            setProductSelected(item?.id);
            setShowProducts(false);
        }
    };

    useEffect(() => {
        if (selectProductFromModal?.productIntegratedName)
            setSearchQuery(selectProductFromModal?.productIntegratedName);
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
        customerId: "",
        totalAmount: 0,
        description: "",
        exitType: "",
        orderSendTypeId: "",
        paymentTypeId: "",
        customerOfficialName: "",
        invoiceTypeId: "",
        freightName: "",
        settlementDate: "",
        dischargePlaceAddress: "",
        freightDriverName: "",
        carPlaque: "",
        rowId: "",
        productId: "",
        warehouseId: "",
        warehouseTypeId: "",
        proximateAmount: "",
        numberInPackage: "",
        price: "",
        cargoSendDate: "",
        buyPrice: "",
        purchaseInvoiceTypeId: "",
        purchaserCustomerId: "",
        purchaseSettlementDate: "",
        sellerCompanyRow: "",
    };
    const { mutate, isLoading } = useCreateOrder();

    const proximateAmountRef = useRef<any>();
    const priceRef = useRef<any>();
    const productDescRef = useRef<any>();
    const rowIdRef = useRef<any>();
    const sellerCompanyRowRef = useRef<any>();
    const buyPriceRef = useRef<any>();
    const [isBuy, setIsBuy] = useState<boolean>(false);

    const handleSelectWarehouse = (value: any) => {
        setWarehouseSelected(value);
        if (value.warehouseTypeId === 1) {
            setIsBuy(true);
        } else {
            setIsBuy(false);
        }
    };

    const handleOrder = () => {
        const productOrder = {
            productId: productSelected,
            productName: searchQuery,
            warehouseId: warehouseSelected?.value,
            warehouseTypeId: warehouseSelected?.warehouseTypeId,
            warehouseName: warehouseSelected?.label,
            productDesc: productDescRef.current?.value,
            buyPrice: buyPriceRef.current?.value,
            purchaseSettlementDate: moment(
                new Date(purchaseSettlementDate)
            ).format("jYYYY/jMM/jDD"),
            purchaseInvoiceTypeId: purchaseInvoiceTypeSelected?.value,
            purchaseInvoiceTypeName: purchaseInvoiceTypeSelected?.label,
            sellerCompanyRow: sellerCompanyRowRef.current?.value,
            proximateAmount: proximateAmountRef.current?.value,
            price: priceRef.current?.value,
            rowId: rowIdRef.current?.value,
        };
        setOrders([...orders, productOrder]);
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={orderValidation}
                onSubmit={async (values) => {
                    if (orders.length === 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "کالایی در لیست سفارشات موجود نمی باشد",
                            showConfirmButton: false,
                            timer: 8500,
                        });
                    } else {
                        const formData = {
                            customerId: values.customerId,
                            totalAmount: totalAmount,
                            description: values.description,
                            exitType: Number(values.exitType),
                            orderSendTypeId: Number(values.orderSendTypeId),
                            paymentTypeId: Number(values.paymentTypeId),
                            customerOfficialName: "string",
                            invoiceTypeId: Number(values.invoiceTypeId),
                            freightName: "string",
                            settlementDate: values.settlementDate,
                            dischargePlaceAddress: "string",
                            freightDriverName: "string",
                            carPlaque: "string",
                            details: orders?.map(
                                (item: ICreateOrderDetails) => {
                                    return {
                                        rowId: item.rowId,
                                        productId: item.productId,
                                        warehouseId: item.warehouseId
                                            ? Number(item.warehouseId)
                                            : null,
                                        // warehouseTypeId: item.warehouseTypeId
                                        //     ? Number(item.warehouseTypeId)
                                        //     : null,
                                        proximateAmount: item.proximateAmount
                                            ? Number(item.proximateAmount)
                                            : null,
                                        numberInPackage: item.proximateAmount
                                            ? Number(item.proximateAmount)
                                            : null,
                                        price: item.price
                                            ? Number(item.price)
                                            : null,
                                        cargoSendDate: "1402/01/01",
                                        buyPrice: item.buyPrice
                                            ? Number(item.buyPrice)
                                            : 0,
                                        purchaseInvoiceTypeId:
                                            item.purchaseInvoiceTypeId,
                                        purchaserCustomerId:
                                            item.purchaserCustomerId
                                                ? item.purchaserCustomerId
                                                : null,
                                        purchaseSettlementDate: "1402/01/01",
                                        sellerCompanyRow: item.sellerCompanyRow
                                            ? item.sellerCompanyRow
                                            : null,
                                    };
                                }
                            ),
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
                }}
            >
                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <PageTitle
                                title="ثبت سفارش"
                                image="/media/icons/duotune/Finance/fin006.svg"
                            />
                            <div className="tw-mb-4">
                                <Card6 image="" title="">
                                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3">
                                        <div className="md:tw-border-l-2 md:tw-border-gray-300">
                                            <span className="tw-font-yekan_bold tw-text-xl">
                                                قیمت کل:{" "}
                                                <span className="tw-text-green-500 tw-text-2xl tw-font-bold tw-px-8">
                                                    {sliceNumberPrice(
                                                        totalAmount
                                                    )}{" "}
                                                    ریال
                                                </span>
                                            </span>
                                        </div>
                                        <div className="md:tw-pr-8">
                                            <span className="tw-font-yekan_bold tw-text-xl">
                                                قیمت به حروف:{" "}
                                                <span className="tw-text-green-500 tw-text-sm tw-font-bold tw-px-8">
                                                    {convertToPersianWord(
                                                        totalAmount
                                                    )}{" "}
                                                    تومان
                                                </span>
                                            </span>
                                        </div>
                                        <SubmitButton
                                            isLoading={isLoading}
                                            title="ثبت"
                                        />
                                    </div>
                                </Card6>
                            </div>
                            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-4">
                                <Card6 image="" title="">
                                    <div className="tw-flex tw-justify-between tw-flex-col">
                                        <div className="tw-pt-2">
                                            <label className="tw-font-yekan_bold tw-text-lg">
                                                مشتری و تاریخ تسویه
                                            </label>
                                            <div className="tw-mt-2">
                                                <div className="tw-flex tw-flex-row tw-items-center tw-gap-x-4">
                                                    <div className="tw-w-full md:tw-w-full">
                                                        <FormikSelect
                                                            name="customerId"
                                                            placeholder="مشتری"
                                                            options={dropdownCustomer(
                                                                customers?.data
                                                            )}
                                                        />
                                                    </div>
                                                    <span
                                                        onClick={() =>
                                                            setIsOpen(true)
                                                        }
                                                        className="tw-flex tw-w-10 tw-my-2 md:tw-my-0 tw-bg-green-600 tw-p-3 tw-rounded-md tw-text-white tw-cursor-pointer"
                                                    >
                                                        {" "}
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
                                                    </span>
                                                </div>
                                                <div className="tw-mt-2">
                                                    <FormikDatepicker
                                                        name="settlementDate"
                                                        placeholder="تاریخ تسویه"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card6>
                                <Card6 image="" title="">
                                    <label className="tw-font-yekan_bold tw-text-lg tw-py-4">
                                        مشخصه سفارش
                                    </label>
                                    <div className="md:tw-grid md:tw-grid-cols-2 md:tw-gap-4">
                                        <FormikSelect
                                            name="orderSendTypeId"
                                            placeholder="نوع ارسال"
                                            options={dropdownOrderSendType(
                                                orderSendType
                                            )}
                                        />
                                        <FormikSelect
                                            name="invoiceTypeId"
                                            placeholder="نوع فاکتور"
                                            options={dropdownInvoiceType(
                                                factor
                                            )}
                                        />
                                        <FormikSelect
                                            name="paymentTypeId"
                                            placeholder="نوع پرداخت"
                                            options={dropdownRentPaymentType(
                                                rent
                                            )}
                                        />
                                        <FormikSelect
                                            name="exitType"
                                            placeholder="نوع خروج"
                                            options={dropdownExitType(exit)}
                                        />
                                    </div>
                                </Card6>
                            </div>
                            <div className="tw-mt-4">
                                <Card6 image="" title="">
                                    <div
                                        onClick={() =>
                                            setSelectedProductOpen(true)
                                        }
                                        className="tw-bg-indigo-500 tw-text-white tw-cursor-pointer tw-w-[18rem] tw-text-center tw-p-4 tw-rounded-lg"
                                    >
                                        انتخاب کالا
                                    </div>
                                    <Modal
                                        isOpen={selectedProductOpen}
                                        onClose={() =>
                                            setSelectedProductOpen(false)
                                        }
                                        className="tw-w-[800px]"
                                        title="انتخاب کالا"
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
                                    <div className="md:tw-flex md:tw-items-center tw-flex-wrap md:tw-gap-x-8">
                                        <div className="tw-relative md:tw-w-[20%] tw-my-2">
                                            <input
                                                onFocus={handleFocuse}
                                                onBlur={handleBlur}
                                                value={searchQuery}
                                                onChange={handleInputChange}
                                                placeholder="کالا / کالا"
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
                                                                درحال بارگزاری
                                                                کالاها
                                                            </span>
                                                        )}
                                                        {productError && (
                                                            <span>
                                                                خطا هنگام
                                                                بارگزاری کالاها
                                                                رخ داده است!
                                                            </span>
                                                        )}
                                                        {filteredData?.map(
                                                            (
                                                                item: IProducts,
                                                                index: number
                                                            ) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
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
                                                                                        item?.productIntegratedName
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                            <span className="tw-text-xs tw-px-4">
                                                                                {" "}
                                                                                {
                                                                                    item?.productState
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
                                            <FormikSelect
                                                customChange={true}
                                                value={warehouseSelected}
                                                onSelect={handleSelectWarehouse}
                                                name="warehouseId"
                                                placeholder="انبار"
                                                options={dropdownWarehouses(
                                                    warehouse
                                                )}
                                            />
                                        </div>
                                        <div className="md:tw-w-[20%] tw-my-2">
                                            <FormikInput
                                                ref={proximateAmountRef}
                                                name="proximateAmount"
                                                placeholder="مقدار (کیلوگرم)"
                                                type="text"
                                            />
                                        </div>
                                        <div className="md:tw-w-[20%] tw-my-2">
                                            <FormikInput
                                                ref={priceRef}
                                                name="price"
                                                placeholder="قیمت"
                                                type="text"
                                            />
                                        </div>
                                        <div className="md:tw-w-[20%] tw-my-2">
                                            <FormikInput
                                                ref={productDescRef}
                                                name="productDesc"
                                                placeholder="توضیحات کالا"
                                                type="text"
                                            />
                                        </div>
                                        <div className="md:tw-w-[20%] tw-my-2">
                                            <FormikInput
                                                ref={rowIdRef}
                                                name="rowId"
                                                placeholder="ردیف فروش"
                                                type="text"
                                            />
                                        </div>
                                        {isBuy && (
                                            <>
                                                <div className="md:tw-w-[20%] tw-my-2">
                                                    <FormikInput
                                                        ref={
                                                            sellerCompanyRowRef
                                                        }
                                                        name="sellerCompanyRow"
                                                        placeholder="خرید از"
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="md:tw-w-[20%] tw-my-2">
                                                    <FormikInput
                                                        ref={buyPriceRef}
                                                        name="buyPrice"
                                                        placeholder="قیمت خرید"
                                                        type="text"
                                                    />
                                                </div>
                                                <div className="md:tw-w-[20%] tw-my-2">
                                                    <FormikSelect
                                                        customChange={true}
                                                        value={
                                                            purchaseInvoiceTypeSelected
                                                        }
                                                        onSelect={(
                                                            value: any
                                                        ) =>
                                                            setPurchaseInvoiceTypeSelected(
                                                                value
                                                            )
                                                        }
                                                        name="purchaseInvoiceTypeId"
                                                        placeholder="نوع فاکتور خرید"
                                                        options={dropdownPurchaseInvoice(
                                                            purchaseInvoiceType
                                                        )}
                                                    />
                                                </div>
                                                <div className="md:tw-w-[20%] tw-my-2">
                                                    <MultiDatepickerCustom
                                                        value={
                                                            purchaseSettlementDate
                                                        }
                                                        onChange={(date: any) =>
                                                            setPurchaseSettlementDate(
                                                                date
                                                            )
                                                        }
                                                        placeholder="تاریخ تسویه خرید"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        <div
                                            onClick={handleOrder}
                                            className="md:tw-w-[10%] tw-my-2 tw-bg-green-500 tw-text-white tw-text-center tw-py-2 tw-rounded-lg tw-cursor-pointer"
                                        >
                                            افزودن
                                        </div>
                                    </div>
                                    <ProductSelectedList
                                        orders={orders}
                                        setOrders={setOrders}
                                    />
                                </Card6>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="ایجاد مشتری جدید"
            >
                <CreateCustomer
                    refetch={refetchCustomers}
                    setIsCreateOpen={setIsOpen}
                />
            </Modal>
        </>
    );
};

export default Order;
