import React, { useEffect, useState } from "react";
import { GlobalStore } from "redux-micro-frontend";

const Home = () => {
  const [driverValue, setDriverValue] = useState(0);
  const globalStore = GlobalStore.Get();

  useEffect(() => {
    setDriverValue(globalStore.GetGlobalState().CounterApp?.count);
  }, [globalStore]);

  return (
    <div>
      Home
      <p>nuevo valor: {driverValue}</p>
    </div>
  );
};

export default Home;
