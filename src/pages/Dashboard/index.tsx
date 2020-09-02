import React from 'react';

import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard:  React.FC = () => {
  return (
    <>
    <img src={ logoImg } alt="GitHub Explorer"/>
    <Title>Explore repositórios no GitHub</Title>
  
  <Form >
    <input placeholder="Digite o nome do repositório"/>
    <button type="submit">Pesquisar</button>

  </Form>
  <Repositories>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/61422704?s=460&u=47cb5e8dabcaabc12f231f10c6169cc696d1f230&v=4" 
        alt="Marcelo Guimarães"/>
      <div>
        <strong>M-Guimaraes/Sequelize-relationship</strong>
        <p>Relacionamento de tabelas com o ORM Sequelize e o MySql rodando em um container no Docker. 
          Com o express e mysql2</p>
      </div>
      
      <FiChevronRight size={20}/>
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/61422704?s=460&u=47cb5e8dabcaabc12f231f10c6169cc696d1f230&v=4" 
        alt="Marcelo Guimarães"/>
      <div>
        <strong>M-Guimaraes/Sequelize-relationship</strong>
        <p>Relacionamento de tabelas com o ORM Sequelize e o MySql rodando em um container no Docker. 
          Com o express e mysql2</p>
      </div>
      
      <FiChevronRight size={20}/>
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/61422704?s=460&u=47cb5e8dabcaabc12f231f10c6169cc696d1f230&v=4" 
        alt="Marcelo Guimarães"/>
      <div>
        <strong>M-Guimaraes/Sequelize-relationship</strong>
        <p>Relacionamento de tabelas com o ORM Sequelize e o MySql rodando em um container no Docker. 
          Com o express e mysql2</p>
      </div>
      
      <FiChevronRight size={20}/>
      </a>
  </Repositories>
  </>
  )
}

export default Dashboard;