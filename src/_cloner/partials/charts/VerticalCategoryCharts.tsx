/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

interface IProps {
    text: string;
    categories?: any;
    data?: any;
    data1?: any;
    isLoading?: boolean;
    isError?: boolean;
}

const VerticalCategoryCharts: FC<IProps> = ({
    text,
    categories,
    data,
    data1,
    isLoading,
    isError,
}) => {
    if (isLoading) {
        return <div>درحال بارگزاری...</div>;
    }

    if (isError) {
        return <div>داده ای برای نمایش یافت نشد</div>;
    }

    // const options = {
    //     chart: {
    //         type: 'column'
    //       },
    //       title: {
    //         text: 'Bar Chart with Persian RTL Support'
    //       },
    //       xAxis: {
    //         categories: ['دسته بندی 1', 'دسته بندی 2', 'دسته بندی 3']
    //       },
    //       yAxis: {
    //         title: {
    //           text: 'مقدار'
    //         }
    //       },
    //       series: [
    //         {
    //           name: 'ستون 1',
    //           data: [1890, 2110, 2030]
    //         }
    //       ],
    //       lang: {
    //         // Persian RTL configuration
    //         contextButtonTitle: 'دانلود',
    //         decimalPoint: '٫',
    //         downloadJPEG: 'دانلود تصویر JPEG',
    //         downloadPDF: 'دانلود فایل PDF',
    //         downloadPNG: 'دانلود تصویر PNG',
    //         downloadSVG: 'دانلود فایل SVG',
    //         drillUpText: 'برگشت به {series.name}',
    //         loading: 'بارگذاری...',
    //         months: [
    //           'ژانویه',
    //           'فوریه',
    //           'مارس',
    //           'آوریل',
    //           'مه',
    //           'ژوئن',
    //           'جولای',
    //           'آگوست',
    //           'سپتامبر',
    //           'اکتبر',
    //           'نوامبر',
    //           'دسامبر'
    //         ],
    //         noData: 'اطلاعاتی موجود نیست',
    //         numericSymbols: ['هزار', 'میلیون', 'میلیارد', 'تریلیون'],
    //         printChart: 'چاپ نمودار',
    //         resetZoom: 'بازنشانی بزرگنمایی',
    //         resetZoomTitle: 'بازنشانی بزرگنمایی به حالت اولیه',
    //         shortMonths: [
    //           'ژانویه',
    //           'فوریه',
    //           'مارس',
    //           'آوریل',
    //           'مه',
    //           'ژوئن',
    //           'جولای',
    //           'آگوست',
    //           'سپتامبر',
    //           'اکتبر',
    //           'نوامبر',
    //           'دسامبر'
    //         ],
    //         thousandsSep: ',',
    //         weekdays: [
    //           'یکشنبه',
    //           'دوشنبه',
    //           'سه‌شنبه',
    //           'چهارشنبه',
    //           'پنجشنبه',
    //           'جمعه',
    //           'شنبه'
    //         ],
    //         printTable: 'چاپ جدول'
    //     }
    // }

    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: text,
        },
        xAxis: {
            type: "category",
            categories: categories,
            labels: {
                style: {
                    fontFamily: "Yekan_reqular",
                },
            },
        },
        yAxis: {
            title: {
                text: "",
            },
            labels: {
                style: {
                    fontFamily: "Yekan_reqular",
                },
            },
        },
        fill: {
            opacity: 1,
        },
        series: [
            {
                name: "شکایت/درخواست",
                data: data,
                colors: ["#546E7A", "#d4526e", "#13d8aa", "#A5978B"],
            },
            {
                name: "تعداد مختومگی",
                data: data1,
                // data: data1,
                colors: ["#546E7A"],
            },
        ],
        plotOptions: {
            series: {
                colors: ["#546E7A", "#d4526e", "#13d8aa", "#A5978B"],
                distributed: true,
                colorByPoint: true, // Enable color by point
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: "14px",
                        fontFamily: "Yekan_reqular",
                    },
                },
            },
        },
        exporting: {
            enabled: true, // enable exporting
            buttons: {
                contextButton: {
                    menuItems: [
                        "downloadPNG", // enable PNG download
                        "downloadJPEG", // enable JPEG download
                        "downloadPDF", // enable PDF download
                        "downloadSVG", // enable SVG download
                    ],
                },
            },
        },
        tooltip: {
            enabeld: true,
            formatter: function (
                this: Highcharts.TooltipFormatterContextObject
            ) {
                console.log(this)
                if (this.series.name === "شکایت/درخواست") {
                    return `<b> ${this.x} <br /> شکایت/درخواست: ${this.y} </b>`;
                } else if (this.series.name === "تعداد مختومگی") {
                    return `<b> ${this.x} <br /> تعداد مختومگی: ${this.y} </b>`;
                }
            },
        },
    };

    return (
        <>
            <HighchartsReact
                allowChartUpdate={true}
                highcharts={Highcharts}
                options={options}
            />
        </>
    );
};

export { VerticalCategoryCharts };
