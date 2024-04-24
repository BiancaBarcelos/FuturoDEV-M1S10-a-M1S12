import { useEffect, useState } from "react";
import {TextField} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useForm} from "react-hook-form"
import './style.css'

// Poderia ser chamado essa página de RegisterProduct

function SignUp() {

    const [estado, setEstado] = useState('');
    const [dificuldade, setDificuldade] = useState('Iniciante');
    const [tipoTrilha, setTipoTrilha] = useState('Caminhada / Trekking')
    const {register, handleSubmit} = useForm();
    const handleEstado = (event) =>{
        setEstado(event.target.outerText)
    }
    const handleDificuldade = (event) =>{
        setDificuldade(event.target.outerText)
    }
    const handleTipo = (event) =>{
        setTipoTrilha(event.target.outerText)
    }


    function cadastrarTrilha(formValue) {
        console.log(formValue)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <div className="containerCadastro">
            <h1>Cadastro de nova trilha</h1>

            <form onSubmit={handleSubmit(cadastrarTrilha)}>
                <div className="formRow">
                    <TextField
                        id="nomeTrilha"
                        className="fullWidth"
                        margin="normal" 
                        label="Nome da Trilha" 
                        size="small" 
                        variant="outlined"
                        color="success"
                        {...register("nomeTrilha", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 100, message: "Máx. 100 caracteres"}
                        })}
                    />
                </div>
                <div className="formRow">
                    <TextField 
                        id="duracao"
                        className="halfWidth"
                        margin="normal" 
                        label="Duração estimada (min)" 
                        size="small" 
                        variant="outlined"
                        color="success"
                        {...register("duracao", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 100, message: "Máx. 100 caracteres"}
                        })}
                    />
                    <TextField 
                        id="trajeto"
                        className="halfWidth"
                        margin="normal" 
                        label="Trajeto (km)" 
                        size="small"
                        variant="outlined"
                        color="success"
                        {...register("trajeto", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 100, message: "Máx. 100 caracteres"}
                        })}
                    />
                </div>
                <div className="formRow">
                    <TextField 
                        id="cidade"
                        className="halfWidth"
                        margin="normal" 
                        label="Cidade" 
                        size="small"
                        variant="outlined"
                        color="success"
                        {...register("cidade", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 100, message: "Máx. 100 caracteres"}
                        })}
                    />
                    <FormControl className="halfWidth inputDefaultConf" size="small">
                        <InputLabel id="estado-label">Estado</InputLabel>
                        <Select
                            labelId="estado-label"
                            id="estado"
                            label="Estado"
                            className="fullWidth"
                            margin="none"
                            variant="outlined"
                            color="success"
                            value={estado}
                            {...register("estado", {
                                required: "Esse campo é obrigatório"})}
                            >
                                <MenuItem onClick={handleEstado} value={'SC'}>SC</MenuItem>
                                <MenuItem onClick={handleEstado} value={'PR'}>PR</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="formRow">
                    <TextField 
                        id="nomeUsuario"
                        className="halfWidth"
                        margin="normal" 
                        label="Nome completo usuário" 
                        size="small"
                        variant="outlined"
                        color="success"
                        {...register("nomeUsuario", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 100, message: "Máx. 100 caracteres"}
                        })}
                    />
                    <FormControl className="halfWidth inputDefaultConf" size="small">
                        <InputLabel id="dificuldade-label">Dificuldade</InputLabel>
                        <Select
                            labelId="dificuldade-label"
                            id="dificuldade"
                            label="Dificuldade"
                            className="fullWidth"
                            margin="none"
                            variant="outlined"
                            color="success"
                            value={dificuldade}
                            {...register("dificuldade", {
                                required: "Esse campo é obrigatório"})}
                            >
                                <MenuItem onClick={handleDificuldade} value={'Iniciante'}>Iniciante</MenuItem>
                                <MenuItem onClick={handleDificuldade} value={'Intermediário'}>Intermediário</MenuItem>
                                <MenuItem onClick={handleDificuldade} value={'Difícil'}>Difícil</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="formRow">
                    <FormControl className="fullWidth inputDefaultConf" size="small">
                        <InputLabel id="tipo-label">Tipo de trilha</InputLabel>
                        <Select
                            labelId="tipo-label"
                            id="tipo"
                            label="Tipo de trilha"
                            className="fullWidth"
                            margin="none"
                            variant="outlined"
                            color="success"
                            value={tipoTrilha}
                            {...register("tipo", {
                                required: "Esse campo é obrigatório"})}
                            >
                                <MenuItem onClick={handleTipo} value={'Caminhada / Trekking'}>Caminhada / Trekking</MenuItem>
                                <MenuItem onClick={handleTipo} value={'Ciclismo'}>Ciclismo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="formRow">
                    <TextField 
                        id="urlImagem"
                        className="fullWidth"
                        margin="normal" 
                        label="URL imagem da trilha" 
                        size="small"
                        variant="outlined"
                        color="success"
                        {...register("urlImagem", {
                            required: "Esse campo é obrigatório"
                        })}
                    />
                </div>
                <div className="formRow">
                    <button type="submit" className="btn btn1">Cadastrar</button>
                    <button type="reset" className="btn btn2" value="Reset">Limpar Campos</button>
                </div>
            </form>

        </div>
    )
   }
   export default SignUp;