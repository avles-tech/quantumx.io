import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import { PieChart, Pie, Tooltip, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';

// Mock Data
const dataPie = [
    { name: 'Sick Leave', value: 400 },
    { name: 'Casual Leave', value: 300 },
    { name: 'Emergency Leave', value: 200 },
];

const dataBar = [
    { department: 'HR', leaves: 30 },
    { department: 'Engineering', leaves: 50 },
    { department: 'Sales', leaves: 20 },
];

const dataLine = [
    { month: 'Jan', leaves: 200 },
    { month: 'Feb', leaves: 250 },
    { month: 'Mar', leaves: 220 },
    // ...continue for all months
];

const dataBarRole = [
    { role: 'Manager', leaves: 45 },
    { role: 'Engineer', leaves: 30 },
    { role: 'Analyst', leaves: 25 },
    { role: 'Consultant', leaves: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <Card style={{ margin: '1em', flex: '0 0 40%' }}>
            <CardHeader title="Types of Leaves Taken" />
            <CardContent>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" isAnimationActive={false} data={dataPie} cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label>
                        {
                            dataPie.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </CardContent>
        </Card>
        <Card style={{ margin: '1em', flex: '0 0 40%' }}>
            <CardHeader title="Leaves by Department" />
            <CardContent>
                <BarChart width={400} height={300} data={dataBar}>
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="leaves" >
                        {
                            dataBar.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </CardContent>
        </Card>
        <Card style={{ margin: '1em', flex: '0 0 40%' }}>
            <CardHeader title="Trend in Leaves Taken" />
            <CardContent>
                <LineChart width={400} height={300} data={dataLine}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="leaves" stroke="#82ca9d" />
                    <Tooltip />
                </LineChart>
            </CardContent>
        </Card>
        <Card style={{ margin: '1em', flex: '0 0 40%' }}>
            <CardHeader title="Leaves by Role" />
            <CardContent>
                <BarChart width={400} height={300} data={dataBarRole}>
                    <XAxis dataKey="role" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="leaves">
                        {
                            dataBarRole.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </CardContent>
        </Card>

    </div>
);

export default Dashboard;
