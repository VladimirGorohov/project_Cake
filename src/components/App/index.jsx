import Header from "../Header";
import HomePage from "../pages/HomePage/index.jsx";
import BirthdayCake from "../pages/ Birthday cakes";
import ChildrensCake from "../pages/ChildrensCakes";
import CorporateCakes from "../pages/CorporateCakes";
import Cupcakes from "../pages/ Сupcakes";
import BentoCake from "../pages/BentoCakes";
import AdditionsCake from "../pages/AdditionsCakes";
import Feedback from "../UI/Feedback";
import { Route, Routes } from "react-router-dom";

import "./styles.css";
import { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="wrapper">
      <Header setModalActive={setModalActive} />
      <Feedback active={modalActive} setActive={setModalActive} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/birthdaycakes" element={<BirthdayCake />}></Route>
        <Route path="/childrencakes" element={<ChildrensCake />}></Route>
        <Route path="/corporatecakes" element={<CorporateCakes />}></Route>
        <Route path="/cupcakes" element={<Cupcakes />}></Route>
        <Route path="/bentocakes" element={<BentoCake />}></Route>
        <Route path="/additions" element={<AdditionsCake />}></Route>
      </Routes>
    </div>
  );
}

export default App;
