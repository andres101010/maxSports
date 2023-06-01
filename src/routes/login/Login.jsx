import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { sendLogin } from '../../axiosServices/AxiosServices';
import { useGlobalState } from '../../component/hooks/useGlobalState';

const Login = ({getDataAllowed}) => {

  const {
    user,
    password,
    onChangeUser,
    onChangePassword   
   } = useGlobalState()  

    const navigate = useNavigate();
    const goRegister = () => {
       navigate('/register');
    };

    const inicioSesion = async () =>{
      try {
        if(user === "" || password === "" ){
         alert("Debes completar todos los campos");
        }else{
          const dataUser = {user, password}
          const datos = await sendLogin(dataUser)
          getDataAllowed(datos)
          console.log(datos)
          navigate('/inicio')
          
        }
      } catch (error) {
       console.log(error)
        new Error("Fallo el inicio se sesion")
      }
   };
  return (
    <div className='container'>
        <h1 className='text-center text-light'>Bienvenidos a esta seccion PQR</h1>
       
        <div className='card m-5 p-4'>
            <h3 className='text-center text-secondary'>inicia sesion</h3>
        <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-secondary'>Usuario</Form.Label>
                <Form.Control type="email" placeholder="User" onChange={onChangeUser}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className='text-secondary'>Password</Form.Label>
               <Form.Control type='password' rows={3} placeholder='password' onChange={onChangePassword}/>
             </Form.Group>
             <Button variant="secondary" onClick={()=>{inicioSesion()}}>Iniciar sesion</Button>{' '}
             <Button variant="secondary" onClick={()=>{goRegister()}}>Registrarse</Button>{' '}
             
        </Form>
        </div>
    </div>
  )
}

export default Login