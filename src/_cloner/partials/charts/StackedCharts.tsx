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
    isLoading?: boolean;
    isError?: boolean;
}

const StackedCharts: FC<IProps> = ({
    text,
    categories,
    data,
    isLoading,
    isError,
}) => {
    if (isLoading) {
        return <div>درحال بارگزاری...</div>;
    }

    if (isError) {
        return <div>داده ای برای نمایش یافت نشد</div>;
    }

    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: text,
        },
        xAxis: {
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
            stackLabels: {
                enabled: true,
                style: {
                    fontSize: "16px",
                    fontFamily: "Yekan_reqular",
                },
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
                name: "<span>فراخوان شده برای واریز</span>",
                data: data?.map((item: any) => item.emkanevariz),
                color: "#546E7A",
            },
            {
                name: "<span>فراخوان نشده</span>",
                data: data?.map((item: any) => item.montazer),
                color: "#d4526e",
            },
            {
                name: "<span>متقاضیان غیرمجاز</span>",
                data: data?.map((item: any) => item.motaghazi),
                color: "#13d8aa",
            },
        ],
        plotOptions: {
            series: {
                distributed: true,
                stacking: "normal",
                // colorByPoint: true, // Enable color by point
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
            enabled: false
            // useHTML: true,
            // style: {
            //     color: "#323130",
            //     direction: "rtl",
            // },
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

export { StackedCharts };
