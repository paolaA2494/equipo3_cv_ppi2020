import { Component } from "react";
import React from 'react';

class Login extends Component{
    render(){
        return(
            <div className="card card-body">
                <form>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="text" name="User" className="form-control" placeholder="Su usuario"/>
                        <label>Contraseña</label>
                        <input type="password" name="Su clave" className="form-control" placeholder="Ingrese su contraseña"/> 
                    </div>
                    <div className="form-group">
                        <button type="Submit" className="btn-success">Ingresar</button>
                        <button type="reset" className="btn-info">Cancelar</button>
                    </div>
                </form>
            </div>  
        );
    }
    }

export default Login;