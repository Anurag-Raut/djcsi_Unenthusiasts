import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Example = () => {
  const [fetchedData, setFetchedData] = useState([{}]);

  useEffect(() => {
    fetch("/predict", {
      method: "POST",
    })
      .then((res) => res.json())

      .then((data) => {
        setFetchedData([]);
        console.log(data);
        const a = [{}];
        for (let i = 0; i < 12; i++) {
          // const a = fetchedData;
          a.push({ name: i + 1, uv: data[i] });
        }
        setFetchedData([...a]);
        // console.log(data);

        // setFetchedData(data);
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error("Error sending lists to server:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={fetchedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Example;