import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";
import "./dialog.css"

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.title,
        developers: props.developers,
        description: props.description,
        category: props.category,
        repository: props.repository,
        view: props.view,
    });

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleEditGame = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            name: editValues.name,
            developers: editValues.developers,
            description: editValues.description,
            category: editValues.category,
            repository: editValues.repository,
            view: editValues.view,

        }).then(() => {
            props.setListCard(
                props.listCard.map((value) => {
                    return value.idgames == editValues.idgames ?
                        {
                            id: editValues.id,
                            name: editValues.name,
                            developers: editValues.developers,
                            description: editValues.description,
                            category: editValues.category,
                            repository: editValues.repository,
                            view: editValues.view,
                        } : value;
                })
            );
        });
        handleClose();
        window.location.href = 'http://localhost:3000/projetos'
    };

    const handleDeleteGame = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
            props.setListCard(
                props.listCard.filter((value) => {
                    return value.id != editValues.id;
                })
            );
        });
        handleClose();

    };

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Editar</DialogTitle>

                <DialogContent className="form-dialog-body">
                    <TextField disabled margin="dense" id="id" label="id" defaultValue={props.id} type="text" fullWidth />
                    <label><strong>Nome do Projeto</strong></label>
                    
                    <TextField autofocus margin="dense" id="name" className="form-dialog-input" defaultValue={props.title} type="text" onChange={handleChangeValues} fullWidth />
                    <label><strong>Desenvolvedores</strong></label>
                    
                    <TextField autofocus margin="dense" id="developers" className="form-dialog-input" defaultValue={props.developers} type="text" onChange={handleChangeValues} fullWidth />
                    <label><strong>Descrição</strong></label>
                    
                    <TextField autofocus margin="dense" id="description" className="form-dialog-input" defaultValue={props.description} type="text" onChange={handleChangeValues} fullWidth />
                    <label><strong>Categoria</strong></label>
                    
                    <TextField autofocus margin="dense" id="category1" className="form-dialog-input" defaultValue={props.category} type="text" onChange={handleChangeValues} fullWidth />
                    <label><strong>Link do Repositório</strong></label>
                    
                    <TextField autofocus margin="dense" id="repository" className="form-dialog-input" defaultValue={props.repository} type="text" onChange={handleChangeValues} fullWidth />
                    <label><strong>Link de Visualização</strong></label>
                    <TextField autofocus margin="dense" id="view" className="form-dialog-input"  defaultValue={props.view} type="text" onChange={handleChangeValues} fullWidth />
                </DialogContent>

                <DialogActions className="form-dialog-footer">
                    <Button onClick={handleClose} color="primary">Cancelar</Button>

                    <Button onClick={() => handleDeleteGame()} color="primary">Excluir</Button>

                    <Button onClick={() => handleEditGame()} color="primary">Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}