import React from 'react';
import '../styles/MyDataPage.css';

const MyDataPage = () => {
  return (
    <div className="my-data-container">
      <div className="profile-section-data">
        <div className="profile-pic-container">
          <img src="/perfil.png" alt="Foto de Perfil" className="profile-pic-data" />
          <button className="edit-pic-btn">Editar Foto</button>
        </div>
      </div>
      <form className="data-form">
        <div className="form-group">
          <label>Nome Completo</label>
          <input type="text" value="Shillya Rodge" disabled />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input type="text" value="Rua Exemplo, 123" disabled />
        </div>
        <div className="form-group">
          <label>Telefone para Contato</label>
          <input type="text" value="(11) 98765-4321" disabled />
        </div>
        <div className="form-group">
          <label>Sexo</label>
          <input type="text" value="Feminino" disabled />
        </div>
        <div className="form-group">
          <label>Data de Nascimento</label>
          <input type="text" value="01/01/1990" disabled />
        </div>
        <div className="form-group">
          <label>Seu Líder é</label>
          <input type="text" value="Nome do Líder" disabled />
        </div>
        <div className="form-group">
          <label>Seu discipulado são todas às</label>
          <input type="text" value="Quintas-feiras" disabled />
        </div>
      </form>
    </div>
  );
};

export default MyDataPage;