import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from "@syncfusion/ej2-react-charts/src"
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";

const Stacked = ({ width, height, color, currentColor, currentMode }) => {
    const styles = {
        0: [
            currentColor
        ],
        1: [
            'dark-gray'
        ],
        2: [
            'lightblue'
        ],
        3: [
            'pink'
        ],
    }
    return (
        <ChartComponent width={width} height={height} id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ background: 'white' }}>
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => {
                    return <SeriesDirective key={index} {...item} fill={styles[index]} shadow='black' color='white'/>
                })}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked