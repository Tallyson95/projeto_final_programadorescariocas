import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";



export default function Card(props) {
    const [open, setOpen] = React.useState(false);







    return (
        <div className="cardd">
            <FormDialog
                open={open}
                setOpen={setOpen}
                title={props.name}
                description={props.description}
                developers={props.developers}
                category={props.category}
                repository={props.repository}
                view={props.view}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            <div className="carddd">
                <div className="card-container" id="card-container" onClick={() => setOpen(true)}>
                    <h1 className="card-title">{props.name}</h1>
                    <h3 className="card-category">{props.category}</h3>
                    <h4 className="card-developers">Desenvolvedores:<br />{props.developers}</h4>
                    <br />
                    <h4 className="card-description">Descrição:<br />{props.description}</h4>
                </div>
                <div className="card-container" id="card-container1">
                    <h5><a href={`https://${props.repository}`} target="_blank">Link de Visualização: <br></br> {props.repository}</a></h5>
                    <br />
                    <h5><a href={`https://${props.view}`} target="_blank">Link de Visualização: <br></br> {props.view}</a></h5>
                </div>
            </div>

        </div>
    );
}
