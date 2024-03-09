import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import AddBook from "./Components/AddBook";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrolltoTop";
import AllBooks from "./Components/AllBooks";
import { useState, useEffect } from "react";
import Spinner from "./Components/Spinner";
import QuranTafseer from "./Components/Quran/QuranTafseer";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let response = await fetch("https://iqbal-library.vercel.app/books");
      let result = await response.json();
      setData(result.data);
      // console.log(result.data,"as",data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    

    fetchData();
  },[])

  

  // useEffect(() => {
  //   let getData = async () => {
  //     await fetchData();
  //   };
  //   getData();
  // }, []);
  return (
    <div className="relative">
      {loading ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/addbook" element={<AddBook />}></Route>
            <Route path="/allbooks" element={<AllBooks data={data} />}></Route>
            <Route
              path="/tafseer"
              element={<QuranTafseer data={data} />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>

    // <div>
    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    //   <Route path="/" element={<h1>Hassan</h1>}></Route>
    // </Routes>
    // </BrowserRouter>
    // </div>
  );
}

export default App;
