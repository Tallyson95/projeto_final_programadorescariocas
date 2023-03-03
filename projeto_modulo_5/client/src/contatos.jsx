import "./App.css";
import './mainnav.css';
import linkedin from "./components/img/linkedin.svg";
import github from "./components/img/github.svg";
import { Link } from "react-router-dom";


export function Contatos() {
    return (
        <div>
            <div className="container">
                <ul id="sublinhado">
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/cadastro">CADASTRAR</Link></li>
                    <li><Link to="/projetos">PROJETOS</Link></li>
                    <li><Link to='/contatos'>CONTATOS</Link></li>
                    <li><Link to='/sobre'>SOBRE</Link></li>
                </ul>
            </div>
            <div id="contato">
                <ul>
                    <figure><img src={linkedin} width="80px" alt="#" /></figure>
                    <figure><img src={github} width="80px" alt="#" /></figure>
                </ul>

            </div>
        </div>
    );
};
export default Contatos;