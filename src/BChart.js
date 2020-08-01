import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

const BChart = ({ data }) =>
    <div>
        <div>
            <strong style={{ marginLeft: 100 }}>BTC_USD</strong>
        </div>
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer>
                <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 25, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='time' />
                    <YAxis dataKey="price" domain={['dataMin', 'dataMax']} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"
                        activeDot={{ r: 3 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>

export default BChart;