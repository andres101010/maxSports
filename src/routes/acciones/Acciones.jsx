import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useGlobalState } from '../../component/hooks/useGlobalState';
import { pqr } from '../../axiosServices/AxiosServices';
const Acciones = () => {
   const {
    tipo,
    descripción_pqr,
    fecha,
    setTipo,
    setDescripcion,
    setFecha,
    onChangeTipo,
    onChangeDescripcion,
    onChangeFecha
   } = useGlobalState();

   const sendPqr = async (e) => {
    try {
      e.preventDefault;
      if(tipo === "" || descripción_pqr === "" || fecha === "" ){
        alert("Debes completar todos los campos")
      }else{
        const datapqr = {tipo, descripción_pqr, fecha};
        const data = await pqr(datapqr);
        console.log(data);
        alert("Datos enviados!!!")
        setTipo("")
        setDescripcion("")
        setFecha("")
      }
    } catch (error) {
      new Error("No se pudo hacer el envio :(")
    }
   }

  return (
    <div className='container'>
      <h1 className='m-5 text-light'>En esta seccion podras mandar una PETICION, QUEJA O RECLAMO</h1>
      <Form.Group className="mb-3">
        <Form.Label>Tipo</Form.Label>
        <Form.Select onChange={onChangeTipo}>
          <opcion>selecciona una</opcion>
          <option>Peticion</option>
          <option>Queja</option>
          <option>Reclamo</option>
        </Form.Select>

         <Form.Group className="mb-3">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type='text' placeholder="Descripcion" onChange={onChangeDescripcion}/>
      </Form.Group>
         <Form.Group className="mb-3">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type='Date' placeholder="Fecha" onChange={onChangeFecha}/>
      </Form.Group>
      <Button variant="secondary" onClick={(e)=>{sendPqr(e)}}>Enviar</Button>{' '}
         
      </Form.Group>


    </div>
  )
}

export default Acciones