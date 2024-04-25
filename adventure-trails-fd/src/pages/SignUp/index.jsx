import { useEffect, useState, useContext } from "react";
import {TextField} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useForm} from "react-hook-form"
import './style.css'
import { TrilhasContext } from "../../context/TrilhasContext";
import { useNavigate } from "react-router-dom";


// Poderia ser chamado essa página de RegisterProduct

function SignUp() {

    const navigate = useNavigate();
    const { addTrilha, estadosBrasil, dificuldadeTrilha, categoriaTrilha } = useContext(TrilhasContext);
    const [estado, setEstado] = useState('');
    const [dificuldade, setDificuldade] = useState('');
    const [tipoTrilha, setTipoTrilha] = useState('')
    const {register, handleSubmit, formState: {errors}} = useForm();
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
        addTrilha({
            ...formValue,
            duracao: Number(formValue.duracao),
            trajeto: Number(formValue.trajeto)
           });

           navigate("/trilhas")
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
                        color={errors?.nomeTrilha ? "error" : "success"}
                        helperText={errors?.nomeTrilha && `${errors.nomeTrilha?.message}`}
                        
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
                        color={errors?.duracao ? "error" : "success"}
                        helperText={errors?.duracao && `${errors.duracao?.message}`}
    
                        {...register("duracao", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 4, message: "Máx. 4 caracteres"}
                        })}
                    />
                    <TextField 
                        id="trajeto"
                        className="halfWidth"
                        margin="normal" 
                        label="Trajeto (km)" 
                        size="small"
                        variant="outlined"
                        color={errors?.trajeto ? "error" : "success"}
                        helperText={errors?.trajeto && `${errors.trajeto?.message}`}

                        {...register("trajeto", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 5, message: "Máx. 5 caracteres"}
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
                        color={errors?.cidade ? "error" : "success"}
                        helperText={errors?.cidade && `${errors.cidade?.message}`}

                        {...register("cidade", {
                            required: "Esse campo é obrigatório",
                            maxLength: {value: 50, message: "Máx. 50 caracteres"}
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
                            MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                            value={estado}
                            {...register("estado", {
                                required: "Esse campo é obrigatório"})}
                            >
                                {
                                    estadosBrasil && estadosBrasil.map((estado, index) => {
                                        return (
                                            <MenuItem onClick={handleEstado} key={index} value={estado}>{estado}</MenuItem>
                                        )
                                    })
                                }
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
                        color={errors?.nomeUsuario ? "error" : "success"}
                        helperText={errors?.nomeUsuario && `${errors.nomeUsuario?.message}`}

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
                                {
                                    dificuldadeTrilha && dificuldadeTrilha.map((dificuldade, index) => {
                                        return (
                                            <MenuItem onClick={handleDificuldade} key={index} value={dificuldade}>{dificuldade}</MenuItem>
                                        )
                                    })
                                }
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
                                {
                                    categoriaTrilha && categoriaTrilha.map((tipoTrilha, index) => {
                                        return (
                                            <MenuItem onClick={handleTipo} key={index} value={tipoTrilha}>{tipoTrilha}</MenuItem>
                                        )
                                    })
                                }
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
                        color={errors?.urlImagem ? "error" : "success"}
                        helperText={errors?.urlImagem && `${errors.urlImagem?.message}`}

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