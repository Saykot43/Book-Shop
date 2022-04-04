import React, { useEffect, useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
      {/* {datas.map((data, index) => (
        <Chart key={data.index} data={data} />
      ))} */}
      <div className=" border-2 p-11">
        <LineChart width={400} height={400} data={datas}>
          <Line type="monotone" dataKey="sell" sstroke="#8884d8" />
          <Line type="monotone" dataKey="investment" sstroke="#8884d8" />
          <Line type="monotone" dataKey="revenue" sstroke="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div className="border-2 p-11">
        <LineChart width={600} height={300} data={datas}>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div className="border-2 p-11">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={datas}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="month" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="investment"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="sell" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className=" border-2 p-11">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="revenue" data={datas} fill="#8884d8" label />
              <Pie dataKey="investment" data={datas} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
