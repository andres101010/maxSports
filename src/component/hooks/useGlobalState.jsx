import React from 'react'
import { useState } from 'react'
export const useGlobalState = () => {
   const [allowed, setIsAllowed] = useState(false);
   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");
   const [cedula_cliente, setCedulaCliente] = useState("");
   const [tipo_identificacion, setTipo_Identificacion] = useState("");
   const [nombre_cliente, setNombre_cliente] = useState("");
   const [apellido_cliente, setApellido_cliente] = useState("");
   const [telefono, setTelefono] = useState("");
   const [correo, setCorreo] = useState("");
   const [tipo, setTipo] = useState("");
   const [descripción_pqr, setDescripcion] = useState("");
   const [fecha, setFecha] = useState("");
 
   const onChangeUser = (event) => { setUser(event.target.value)} 
   const onChangePassword = (event) => { setPassword(event.target.value)} 
   const onChangeCedula_cliente = (event) => { setCedulaCliente(event.target.value)} 
   const onChangeTipo_identificacion = (event) => { setTipo_Identificacion(event.target.value)} 
   const onChangeNombre_cliente = (event) => { setNombre_cliente(event.target.value)} 
   const onChangeApellido_cliente = (event) => { setApellido_cliente(event.target.value)} 
   const onChangeTelefono = (event) => { setTelefono(event.target.value)} 
   const onChangeCorreo = (event) => { setCorreo(event.target.value)}
   const onChangeTipo = (event) => { setTipo(event.target.value)}
   const onChangeDescripcion = (event) => { setDescripcion(event.target.value)}
   const onChangeFecha = (event) => { setFecha(event.target.value)}
   
  
   const getDataAllowed = (value)=>{
    if(value === ""){
      setIsAllowed(false)
    }else{
      setIsAllowed(true)
    }
  };
  return {
    setIsAllowed,
    allowed,
    getDataAllowed,
    onChangeUser,
    onChangePassword,
    user,
    password,
    cedula_cliente,
    tipo_identificacion,
    nombre_cliente,
    apellido_cliente,
    telefono,
    correo,
    setUser,
    setPassword,
    setCedulaCliente,
    setTipo_Identificacion,
    setNombre_cliente,
    setApellido_cliente,
    setTelefono,
    setCorreo,
    onChangeApellido_cliente,
    onChangeTipo_identificacion,
    onChangeCedula_cliente,
    onChangeCorreo,
    onChangeNombre_cliente,
    onChangeTelefono,
    tipo,
    descripción_pqr,
    fecha,
    setTipo,
    setDescripcion,
    setFecha,
    onChangeTipo,
    onChangeDescripcion,
    onChangeFecha
  }
  
  
}
