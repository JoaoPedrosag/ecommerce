import React from "react";
import Button from '../../Components/Botao/index'
import Header from "../../Components/Header";
import { Container } from "../Login/styles";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import api from '../../Services/api';

const HomePage = () => {
   const navigate = useNavigate();
   const [data, setData] = useState([]);

   useEffect(() => {
      api.get('/shop/shops').then(function ({ data }) {
         setData(data.shops)
      })
   }, [])


   return (
      <Container>
         <div>
            <Header />
            <Button
               type='submit'
               text='Cadastrar Produtos'
               onClick={() => navigate('/cadastrar-produto')}
            />

            Acesse alguma das nossas lojas
            {data.map((shop) => (
                  <div key={shop._id}>
                     <button key={shop._id} onClick={() => api.get(`/veste/shop/` + shop.shop_name)}>{shop.shop_name}</button>
                  </div>
               ))}
         </div>
      </Container>
   );
}

export default HomePage;