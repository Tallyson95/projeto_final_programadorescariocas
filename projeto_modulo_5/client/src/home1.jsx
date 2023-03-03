import "./mainnav.css"
import "./font-awesome.css"
import "./teste.css"
import { Link } from "react-router-dom";
import './App.css';
import foto from './components/img/foto.jpeg'
import prog3 from './components/img/prog3.jpeg'




function Paginahome() {

    return (
        <div>
            <div className="container">
                <ul id="sublinhado">
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/projetos">PROJETOS</Link></li>
                </ul>
            </div>

            <div className="app-container">
                <div id='titulo'>
                    <h1>VitrineDev</h1>
                </div>
                <ul class="social_team">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
                <a href="#grid"><div id="seta"></div></a>
                <div className="card-grid" id="grid"></div>
            </div>
            <h1 id='contats' className="sobre">SOBRE</h1>
            <div className="about-grid">
                <p className="about-paragraph"><strong className="about-grid-p1">O que é VitrineDev?</strong><br></br><br></br> É uma plataforma que permite que os Programadores Cariocas possam fazer postagens de portfólio, incluindo informações sobre seus projetos, habilidades e experiências. Além disso, os alunos podem adicionar links para seus trabalhos e portfólios online, permitindo que eles compartilhem facilmente seus projetos com o mundo. Acreditamos que esta plataforma poderá contribuir para que os alunos mostrem suas habilidades e alcancem novos patamares em suas carreiras como desenvolvedores web. Também é possível que Empresas possam obersar, bem como buscar talentos.</p><br></br>
                <figure><img width='550px' height='400px' src={foto} alt="" /></figure>
            </div>
            <div className="about-grid">
                <figure><img width='550px' height='400px' src={prog3} alt="" /></figure>
                <p className="about-paragraph"><strong className="about-grid-p1">O que é a iniciativa Programadores Cariocas?</strong><br></br><br></br>É uma iniciativa criada pela Prefeitura da Cidade do Rio de Janeiro que visa formar 5 mil novos programadores, dando prioridade a mulheres, pessoas negras, trans, LGBTQIAP+ e refugiados, oferecendo bolsas de 50% e/ou 100% aos egressos. O projeto possibilita que os segmentos mais vulneráveis da cidade possam se qualificar em uma das áreas que mais crescem e que possui muita demanda de profissionais. Além disso, o curso fornece uma bolsa-auxílio de R$500 durante 6 meses, e ao final do curso, o aluno ganha um notebook
                </p>

            </div>
            <div id="contact">
                <div className="container">
                    <h1 id='contats'>CONTATO</h1>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="caixamd">
                            <form class="caixamd1" name="formu">
                                <div class="caixamd2">
                                    <div class="caixamd3">
                                        <input class="contact" placeholder="Nome" type="text" name="Name" required />
                                    </div>
                                    <div class="caixamd3">
                                        <input class="contact" placeholder="Email" type="text" name="Email" required />
                                    </div>
                                    <div class="caixamd3">
                                        <input class="contact" placeholder="Telefone" type="type" name="Phone_Number" required />
                                    </div>
                                    <div class="caixamd3">
                                        <input class="contact" placeholder="Mensagem" type="type" Message="msg1" required />
                                    </div>
                                    <div class="caixamd3">
                                        <button class="send_btn">Enviar</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="caixafooter">
                <div className="caixafooter">
                    <div class="containerfooter">
                        <div class="row">
                            <div class="col-md-4inicio">
                                <h3>ACESSO RÁPIDO</h3>
                                <br />
                                <p>
                                    <a class='k' href="/">Início</a>
                                    <br />
                                    <a class="k" href="login">Login</a>
                                    <br />
                                    <a class="k" href="#contact">Contato</a>
                                    <br />
                                    <a class="k" href="projetos">Projetos</a>
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="fid_box">
                                    <div className="contactfooter">
                                        <h3>ENTRE EM CONTATO CONOSCO</h3>
                                        <ul class="location_icon">
                                            <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a><br />Rua Barcelo Domingos, 58<br />Campo Grande - RJ</li>
                                            <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a><br />(21) 912345678<br /> (21) 912345678</li>                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fid_box">
                                    <div>
                                        <h3>RECEBA NOVIDADES POR EMAIL:</h3>
                                        <form class="news_form">
                                            <input class="letter_form" placeholder=" Email" type="text" name="Email" />
                                            <button class="btnfooter">Inscrever-se</button>
                                        </form>
                                        <ul class="social_icon">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <div class="copycontainer">
                            <div class="row">
                                <div class="col-md-12">
                                    <p>© 2023 TODOS OS DIREITOS RESERVADOS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );

}

export default Paginahome;
