import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Update from "./Components/Update";
import CrudNaveBar from "./Components/CrudNaveBar";


const App = () => {
  return (
    <>
      <div className="App">
        <CrudNaveBar/>
        <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/update" element={<Update />}/>
          </Routes>

        </BrowserRouter>
  
      </div>
    </>
  );
};

export default App;
