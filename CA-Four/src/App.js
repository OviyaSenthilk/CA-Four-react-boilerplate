import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {

  return (
    <div>
      <QuestionBox/>
      <Result/>
<questions/>

    </div>
  );
}

export default App;