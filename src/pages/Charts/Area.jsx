import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject, DateTime, Legend } from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";

const Area = () => {
    return (
        <div className="m-4 md:m-10 md-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Chart" title="Inflation In Percentage" />
            <div className="w-full">
                <ChartComponent id='area-chart' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
                    <Inject services={[Legend, SplineAreaSeries, DateTime]} />
                    <SeriesCollectionDirective>
                        {areaCustomSeries.map((item, index) => {
                            return <SeriesDirective key={index} {...item} />
                        })}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Area
