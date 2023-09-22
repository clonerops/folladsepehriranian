import { toAbsoluteUrl } from "../../../_cloner/helpers";
import { Card7 } from "../../../_cloner/partials/content/cards/Card7";

const Dashboard = () => {
    return (
        <>
            <Card7 image="" title="">
                <div className="tw-flex tw-justify-center tw-items-center">
                    <img alt="sepehr logo" src={toAbsoluteUrl("/media/logos/folladlogo.png")} width={100} />
                </div>
                <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
                    <div className="tw-flex tw-flex-col tw-space-y-4">
                        <h3 className="tw-text-3xl tw-text-primary">کارخانه فولاد سپهر ایرانیان</h3>
                        <h3 className="tw-text-md">تولید کننده انواع میلگرد آجدار ، نبشی و ناودانی</h3>
                    </div>
                    <div className="tw-flex tw-flex-row tw-gap-x-4 tw-mx-auto tw-my-8">
                        <Card7 image="" title="">
                            <h3 className="tw-font-bold tw-text-2xl tw-text-green-600">میلگرد</h3>
                        </Card7>
                        <Card7 image="" title="">
                            <h3 className="tw-font-bold tw-text-2xl tw-text-red-600">نبشی</h3>
                        </Card7>
                        <Card7 image="" title="">
                            <h3 className="tw-font-bold tw-text-2xl tw-text-blue-600">ناودانی</h3>
                        </Card7>
                    </div>
                    <div className="tw-flex tw-flex-col tw-space-y-4">
                        <h3 className="tw-text-xl tw-text-justify tw-leading-10">
                            کارخانه فولاد سپهر ایرانیان شرکت فولاد سپهر ایرانیان (مسئولیت محدود) در سال 1388 به منظور تولید انواع میلگرد آجدار و ساده از شمش (بیلت) با طراحی مهندسان داخلی راه اندازی شد.

                            مزایای شرکت فولاد سپهر ایرانیان:

                            – واقع شدن در مرکز پایتخت ایران و دسترسی آسان، سریع و کم هزینه برای مشتریان

                            – کیفیت بالای محصولات و برخورداری از گواهینامه های استاندارد ملی

                            – تولید متنوع محصولات از سایز 8 الی 32 و برآورد کردن حداکثری نیاز های مشتریان

                            – قیمت های رقابتی به دلیل اعمال روشهای مدیریتی استاندارد جهت کاهش هزینه های تولید

                            – بسته بندی های استاندارد و یکسان



                            * در سال 1397 نبشی 3 و 4 به سبد کالای شرکت فولاد سپهر ایرانیان به همت مدیران و مهندسان داخلی افزوده شد.

                            * همچنین در سال 1398 گروه بازرگانی سپهر ایرانیان به منظور تامین حداکثری نیازهای مشتریان تاسیس گردید .
                        </h3>
                    </div>
                </div>
            </Card7>
        </>
    );
};

export default Dashboard;
