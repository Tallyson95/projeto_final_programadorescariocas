import './login.css';
import { Link } from 'react-router-dom';
import logoresilia from './components/img/logo5.png';



export function Login() {
    return (
        <div>
            <div class="blankLayoutWrapper">
                <div class="loginPage">
                    <Link to="/"><img class="logoImg" src={logoresilia} alt="Logo da Resilia" /></Link>
                    <div class="loginFormContainer">
                        <h2>VitrineDev | Resilia</h2>
                        <p>Faça login com sua conta resilia para</p>
                        <div class="formInputContainer darkMode">
                            <input type="text" name="E-mail" required="" />
                            <label for="E-mail">E-mail ou CPF</label>
                        </div>
                        <div class="formInputContainer darkMode">
                            <input type="password" name="password" required="" />
                            <label for="password">Senha</label>
                        </div>
                        <a href="/cadastro"><button class="defaultBtn">Entrar </button> </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login