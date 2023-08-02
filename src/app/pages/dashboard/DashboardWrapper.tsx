/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { PageTitle } from "../../../_cloner/layout/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
    chart: {
        type: "column",
    },
    title: {
        text: "Vertical Bar Chart Example",
    },
    xAxis: {
        categories: [
            "Category 1",
            "Category 2",
            "Category 3",
        ],
    },
    yAxis: {
        title: {
            text: "Value",
        },
    },
    series: [
        {
            name: "Data",
            data: [10, 20, 30],
        },
    ],
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
            },
        },
    },
    colors: ["#008000", "#0000FF", "#FF0000"], // Specify the colors here
};

const DashboardWrapper: FC = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>{"Dashboard"}</PageTitle>
            <HighchartsReact
                allowChartUpdate={true}
                highcharts={Highcharts}
                options={options}
            />
        </>
    );
};

export { DashboardWrapper };
