import React from "react";
import Header from "../../components/layout/Header/Header";
import { useNavigate } from "react-router-dom";
import Card from "../../components/common/Card/Card";
import Button from "../../components/common/Button/Button";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <main className='main'>
        <div className='container'>
          <Card />
        </div>
        <Button />
      </main>
    </div>
  );
};

export default Home;
