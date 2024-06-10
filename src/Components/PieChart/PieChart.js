import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./PieChart.css";



const COLORS = {food:"#A000FF",entertainment:"#FF9304",travel:"#FDE006"};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Piechart({data}) {

   console.log(data);
 
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <div style={{ width: '200px' ,height:"200px"}}>
        <ResponsiveContainer >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%" 
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
             {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.category]} />
            ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
       
        </div>
        <div className='Main'>
          {data.map((val,index)=> (<div className="Main1" key={index}><span className='span1' style={{background:COLORS[val.category]}}></span> 
          <span>{val.name}</span></div>))}
         
        </div>
        </div>
        
    );
  
}
