import StyledForm from "./styles";

const RegisterForm = () => {
  return (
    <StyledForm className="RegisterForm">
      <div className="formInputs">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome..." />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email..." />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha..." />

        <label htmlFor="confirmPassword">Confirme a sua senha</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente sua senha..."
        />

        <label htmlFor="biography">Bio</label>
        <input type="text" id="biography" placeholder="Fale sobre você..." />

        <label htmlFor="telephone">Contato</label>
        <input type="tel" id="telephone" placeholder="Telefone para contato..." />

        <label htmlFor="moduleSelect">Módulo</label>
        <select name="" id="moduleSelect">
          <option value="0" selected disabled>
            Selecione o seu módulo
          </option>
          <option value="M1">Módulo 1</option>
          <option value="M2">Módulo 2</option>
          <option value="M3">Módulo 3</option>
          <option value="M4">Módulo 4</option>
          <option value="M5">Módulo 5</option>
          <option value="M6">Módulo 6</option>
        </select>
      </div>
      <button className="registerBttn">Cadastrar</button>
    </StyledForm>
  );
};

export default RegisterForm;
