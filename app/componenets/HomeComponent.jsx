'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

// Sample data
const lineDataX = [
  { month: 'Jan', leaves: 30 },
  { month: 'Feb', leaves: 45 },
  { month: 'Mar', leaves: 60 },
  { month: 'Apr', leaves: 55 },
  { month: 'May', leaves: 75 },
  { month: 'Jun', leaves: 65 },
  { month: 'Jul', leaves: 55 },
  { month: 'Aug', leaves: 85 },
  { month: 'Sep', leaves: 95 },
  { month: 'Oct', leaves: 100 },
  { month: 'Nov', leaves: 110 },
  { month: 'Dec', leaves: 120 },
];

const pieDataX = [
  { name: 'Vacation', value: 400 },
  { name: 'Sick', value: 300 },
  { name: 'Maternity', value: 300 },
  { name: 'Other', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HomeComponent = () => {
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => { setPieData(pieDataX); setLineData(lineDataX) }, []);


  return (
    <div className="flex justify-between">
      <div>
        <h2>Annual Leave Overview</h2>
        <LineChart width={500} height={300} data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="leaves" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      <div>
        <h2>Leave Types Breakdown</h2>
        <PieChart width={400} height={400}>
          <Pie data={pieData} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label>
            {
              pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend verticalAlign="top" height={36} />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  )
}

export default HomeComponent;
