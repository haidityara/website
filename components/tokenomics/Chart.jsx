import React from "react";
import {formatNumber} from "../../utils/money_format";
import {Area, ResponsiveContainer, Tooltip, XAxis, AreaChart} from "recharts";


export default function Chart(props) {
    const {data, title, dataKeyArea, dataKeyArea2, dataKeyXAxis, count, count2} = props;

    function CustomTooltip({active, payload, label}) {
        if (active) {
            return (
                <div className="price-group cst-tooltip d-flex flex-column">
                    <span className="price-card-title">
                        {`${formatNumber(payload[0].value)}`}{dataKeyArea2 ? ` : ${formatNumber(payload[1].value)}` : ''}
                    </span>
                    <span className="price-card-sub-title">{label}</span>
                </div>
            );
        }
        return null;
    }

    return (
        <div className="area col-md-6 mb-3">
            <div className="card-dark">
                <div className="d-flex price-group flex-column mb-5">
                    <span className="price-card-sub-title">{title}</span>
                    <span id={`tvlPrice`} className="price-card-title">
                        {formatNumber(count)} {dataKeyArea2 ? `: ${formatNumber(count2)}` : ''}
                    </span>
                </div>
                <ResponsiveContainer width="100%" height={223}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="color-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8ffce1" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8ffce1" stopOpacity={0}/>
                            </linearGradient>
                        </defs>

                        <defs>
                            <linearGradient id="color-pink" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fc009c" stopOpacity="0.5"/>
                                <stop offset="95%" stopColor="#fc009c" stopOpacity="0"/>
                            </linearGradient>
                        </defs>


                        <Area
                            dataKey={dataKeyArea}
                            stroke={`#8ffce1`}
                            fill="url(#color-grad)"
                        />

                        {
                            dataKeyArea2 ?
                                <Area
                                    dataKey={dataKeyArea2}
                                    stroke={`#fc009c`}
                                    fill="url(#color-pink)"
                                />
                                : null
                        }

                        <XAxis
                            dataKey={dataKeyXAxis}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            position={{x: 0, y: -90}}
                            cursor={false}
                            content={<CustomTooltip/>}
                        />
                        {/*<CartesianGrid opacity={0.1} vertical={false}/>*/}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}