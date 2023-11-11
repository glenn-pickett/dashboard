import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip } from "@syncfusion/ej2-react-charts";

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";

const Line = () => {
    
    return (
        <ChartComponent id='charts' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
            <Inject services={[Legend, LineSeries, Tooltip, DateTime]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => {
                    return <SeriesDirective key={index} {...item} />
                })}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Line
