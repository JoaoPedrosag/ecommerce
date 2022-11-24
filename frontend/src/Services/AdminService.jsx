import api from './api';

async function cadastrarProduto(dados) {
  const { data } = await api.post('veste', dados);
  return data;
}

export {cadastrarProduto}