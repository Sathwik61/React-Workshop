import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState({ fact: "", length: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCount(data);
        console.log("Fetched Data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>{count.fact}</p>
      <p>Length: {count.length}</p>
    </>
  );
}

export default App;
