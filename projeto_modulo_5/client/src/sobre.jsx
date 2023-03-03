import "./mainnav.css"
import "./font-awesome.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';


function Sobre() {

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

            <div className="app-container">
                <div id='titulo'>
                    <h1>Sobre</h1>
                </div>
                <ul class="social_team">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
                <a href="#"><div id="seta"></div></a>
                <div className="card-grid" id="grid"></div>
            </div>
            <div className="about-grid">
                <p className="about-paragraph">Este projeto foi concebido como parte de um programa de ensino para desenvolvedores web iniciantes, e tem como objetivo fornecer aos alunos uma plataforma para exibir seus trabalhos e habilidades em desenvolvimento web.</p>
                <p className="about-paragraph">Nosso projeto permite que os alunos criem suas próprias postagens de portfólio, incluindo informações sobre seus projetos, habilidades e experiência. Além disso, os alunos podem adicionar links para seus trabalhos e portfólios online, permitindo que eles compartilhem facilmente seus projetos com o mundo.</p>
                <p className="about-paragraph">Nossa equipe trabalhou duro para garantir que o projeto seja fácil de usar e personalizar, para que os alunos possam criar um portfólio atraente e funcional sem precisar de muita experiência em desenvolvimento web. Além disso, o projeto foi desenvolvido usando as últimas tecnologias em HTML, CSS e JavaScript, garantindo que os alunos estejam familiarizados com as ferramentas e tecnologias mais atualizadas do mercado.</p>
                <p className="about-paragraph">Nós acreditamos que este projeto será uma ótima oportunidade para os alunos mostrarem suas habilidades e alcançarem novos patamares em suas carreiras como desenvolvedores web. Se você está interessado em aprender mais sobre desenvolvimento web ou quer construir seu próprio portfólio, não hesite em se inscrever em nosso programa de ensino!</p>
            </div>
        </div>
    );
}

export default Sobre;
