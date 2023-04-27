import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBarComponent/SampleNav";
import { createContext, useState } from "react";
export const userContext = createContext();
function App() {
  const [data, setData] = useState([
    {
      name: "swarup",
      email: "lucky",
      mobile: "1234",
      address: "ndk",
      balance: "1000",
    },
  ]);
  return (
    <div className="App">
      <userContext.Provider value={[data, setData]}>
        <Header />
        <NavBar />
      </userContext.Provider>
    </div>
  );
}

export default App;
