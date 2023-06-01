import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './routes/inicio/Inicio'
import Login from './routes/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegador from './component/nav/Navegador';
import Registrarse from './routes/registrarse/Registrarse';
import { ProtectedRoute } from './component/protectedRoutes/ProtectedRoutes';
import MasInformacion from './routes/acciones/Acciones';
import { useGlobalState } from './component/hooks/useGlobalState';
function App() {
  const { getDataAllowed,
    allowed,
    setIsallowed,
    } = useGlobalState();
  return( 
     <div>
       <BrowserRouter>
       <Navegador />
        <Routes>
          <Route path='/' element={<Login getDataAllowed={getDataAllowed} allowed={allowed} setIsallowed={setIsallowed} />}></Route>
          <Route path='/register' element={<Registrarse />}></Route>
          <Route element={<ProtectedRoute allowed={allowed} />}>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/acciones' element={<MasInformacion />}></Route>
          </Route>
        </Routes>
       </BrowserRouter>
     </div>
    
  )
}

export default App
