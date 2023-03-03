import "./mainnav.css"
import "./font-awesome.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/cards/cards";


function LimparForm() {
    document.getElementById("name").value = "";
    document.getElementById("developers").value = "";
    document.getElementById("description").value = "";
    document.getElementById("repository").value = "";
    document.getElementById("view").value = "";
}

function Cadastro() {
    const [values, setValues] = useState();
    const [listCard, setListCard] = useState([]);
    console.log(listCard);
    const handleRegisterGame = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            developers: values.developers,
            description: values.description,
            category: values.category,
            repository: values.repository,
            view: values.view,
        }).then(() => {
            Axios.post("http://localhost:3001/search", {
                name: values.name,
                developers: values.developers,
                description: values.description,
                category: values.category,
                repository: values.repository,
                view: values.view,
            }).then((response) => {
                setListCard([
                    ...listCard,
                    {
                        id: response.data[0].id,
                        name: values.name,
                        developers: values.developers,
                        description: values.description,
                        category: values.category,
                        repository: values.repository,
                        view: values.view,
                    },
                ]);
            });
        });
        LimparForm();
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setListCard(response.data);
        });
    }, []);


    const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const getFormattedLink = () => {
    if (inputText.startsWith('http://') || inputText.startsWith('https://')) {
      return inputText;
    } else {
      return `http://${inputText}`;
    }
  };

  const handleButtonClick = () => {
    // Aqui você pode enviar o texto digitado para outro componente ou serviço
    console.log(inputText);
  };







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
                    <h1>Projetos</h1>
                </div>


                <ul class="social_team">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
                <a href="#grid"><div id="seta"></div></a>
                <div className="card-grid" id="grid">
                    {listCard.map((val) => (
                        <Card
                            listCard={listCard}
                            setListCard={setListCard}
                            key={val.id}
                            id={val.id}
                            name={val.name}
                            developers={val.developers}
                            description={val.description}
                            category={val.category}
                            repository={val.repository}
                            view={val.view}
                            />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Cadastro;
