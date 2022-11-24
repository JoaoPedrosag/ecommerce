import React, { useState } from 'react'
import { Container, Form, SubContainerSign } from '../Login/styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { cadastrarProduto } from '../../Services/AdminService'
import { NavLink, useNavigate } from 'react-router-dom'
import { toastSuccess, toastError } from '../../Utils/toast'

const CadastroProduto = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([])
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const data = await cadastrarProduto({
        descricao: form.descricao,
        valor: form.valor,
        discurso_venda: form.discurso_venda,
        estoque: form.estoque,
        shop_name: form.shop_name,
      });
      if (data) {
        toastSuccess('Produto Cadastrado com Sucesso');
        navigate('/home')
      }
      setLoading(false)
    }
    catch (err) {
      toastError(err.response.data.message)
      setLoading(false);
    }
  }

  const handleChange = (event) => {
    console.log({ [event.target.name]: event.target.value })
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <Container>
      <Form>
        <h1>Faça o Cadastro do seu produto 👕</h1>
        <Input
          name='descricao'
          placeholder='Descricao do produto'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='valor'
          placeholder='Digite o valor do produto'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='discurso_venda'
          placeholder='Discurso de vendas'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='estoque'
          placeholder='Estoque'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='shop_name'
          placeholder='Digite o nome de sua loja'
          onChange={handleChange}
          type='text'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true ? true : false}
        />

        <SubContainerSign>
          <NavLink to="/home">Home Page</NavLink>
        </SubContainerSign>
      </Form>
    </Container>

  )
}

export default CadastroProduto;