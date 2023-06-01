import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { register } from '../../axiosServices/AxiosServices';
import { useGlobalState } from '../../component/hooks/useGlobalState';

const Registrarse = () => {
    const {
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
        onChangeTelefono
    } = useGlobalState();
    const navigate = useNavigate();
    const regresar = () => {
        navigate('/inicio')
    };
    const sendRegister = async (e) =>{
        try {
          e.preventDefault()
          if(user === ""|| password === "" || cedula_cliente === "" || tipo_identificacion === "" || nombre_cliente === "" || apellido_cliente === "" || telefono === "" || correo === ""){
            alert("Debes completar todos los campos")
          }else{
            const dataUser = {user,password,cedula_cliente,tipo_identificacion,nombre_cliente,apellido_cliente,telefono,correo}
            const data = await register(dataUser)
            console.log(data)
            navigate('/')
          } 
        } catch (error) {
          console.log(error)
          new Error("No se pudo hacer el registro :(")
        }
      };

  return (
    <div className='container'>
        <h1 className='text-center text-light m-5'>Registro</h1>
        <div className='card'>
        <h3 className='text-center text-secondary'>Registrate</h3>
        <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-secondary'>Nuevo Usuario</Form.Label>
                <Form.Control type="email" placeholder="Nuevo User" onChange={onChangeUser}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Nuevo Password</Form.Label>
               <Form.Control type='password'  placeholder='Nuevo password' onChange={onChangePassword}/>
             </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Numero de documento</Form.Label>
               <Form.Control type='text'  placeholder='cedula' onChange={onChangeCedula_cliente}/>
             </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Tipo de identificacion</Form.Label>
               <Form.Control type='text'  placeholder='Ej: DNI, CI, PASAPORTE' onChange={onChangeTipo_identificacion}/>
             </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Nombre</Form.Label>
               <Form.Control type='text'  placeholder='Nombre' onChange={onChangeNombre_cliente}/>
             </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Apellido</Form.Label>
               <Form.Control type='text' placeholder='Apellido' onChange={onChangeApellido_cliente}/>
             </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Telefono</Form.Label>
               <Form.Control type='number'  placeholder='Telefono' onChange={onChangeTelefono}/>
             </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Correo</Form.Label>
               <Form.Control type='email'  placeholder='Email' onChange={onChangeCorreo}/>
             </Form.Group>
             <Button variant="secondary" onClick={(e)=>{sendRegister(e)}}>Guardar</Button>{' '}
             <Button variant="secondary" onClick={()=>{regresar()}}>Regresar</Button>{' '}
             
        </Form>
        </div>
    </div>
  )
}

export default Registrarse