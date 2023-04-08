import React, { useState, useEffect } from "react";

function Temp() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/predict", {
      method: "POST",
    })
      .then((res) => res.json().then())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error sending lists to server:", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Temp;
