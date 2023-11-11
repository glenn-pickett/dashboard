import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";
import React from "react";


class Spark extends React.PureComponent {
    render() {
        const { id, height, width, data, type, currentColor } = this.props;
        return (
            <>
                {type && (
                    <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" border={{ color: currentColor, width: 2 }} fill={currentColor} dataSource={data} xName='x' yName='y' type='Line' tooltipSettings={{ visible: true, format: '${x} : data ${y}', trackLineSettings: { visible: true } }}>
                        <Inject services={[SparklineTooltip]} />
                    </SparklineComponent>
                )}
            </>
        )
    }
}

export default Spark