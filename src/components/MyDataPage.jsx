import React from 'react';
import '../styles/MyDataPage.css';

const MyDataPage = () => {
  return (
    <div className="my-data-container">
      <h1 className="welcome-message">Bem-Vindo(a), Sheila!</h1>
      <div className="profile-section-data">
        <div className="profile-pic-container">
          <img src="/paraperfil.jpg" alt="Foto de Perfil" className="profile-pic-data" />
          <button className="edit-pic-btn">Editar Foto</button>
        </div>
      </div>
      <form className="data-form">
        <div className="form-group">
          <label>Nome Completo</label>
          <input type="text" value="Sheila Rodrigues Madureira" disabled />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input type="text" value="Rua Garça Morena, 200 - Ap.12-B" disabled />
        </div>
        <div className="form-group">
          <label>Telefone para Contato</label>
          <input type="text" value="(11) 96636-1328" disabled />
        </div>
        <div className="form-group">
          <label>Sexo</label>
          <input type="text" value="Feminino" disabled />
        </div>
        <div className="form-group">
          <label>Data de Nascimento</label>
          <input type="text" value="12/09/1989" disabled />
        </div>
        <div className="form-group">
          <label>Seu Líder é</label>
          <input type="text" value="Daniel Mertz" disabled />
        </div>
        <div className="form-group">
          <label>Seu discipulado são todas às</label>
          <input type="text" value="Terças-feiras" disabled />
        </div>
      </form>
    </div>
  );
};

export default MyDataPage;