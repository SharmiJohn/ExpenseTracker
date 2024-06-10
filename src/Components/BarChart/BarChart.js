import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import "./BarChart.css"

export default function Barchart({data}) {

    return (
      <div>
        <h3 className="barhead">Top Expenses</h3>

        <div style={{
          background: "#FFFFFF",
          marginBottom: "10px",
          width: " 600px",
          height: "250px",
          marginRight: "40px",
          borderRadius: "10px",
        }}
><ResponsiveContainer >
      <BarChart
      layout='vertical'
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
       
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name"  axisLine={false}
              tickLine={false}
              width={100}
              tick={{ fill: "black" }}/>
        <Bar dataKey="value" fill="#8884d8"  style={{borderRadius:"5px"}}/>
   
      </BarChart>
    </ResponsiveContainer>
  

</div></div>
      )}
      