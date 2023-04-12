import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>

      <Navbar/>

      <hr />

    

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />
        {/* esta ruta utiliza el comodin /* para que cuando una ruta no exita se redirija a una ruta especifica*/}
        {/* se utiliza el navigate para evitar duplicar rutas */}
        {/* <Route path="/*" element={ <HomePage /> } /> */}
        <Route path="/*" element={ <Navigate to="/about" /> } />        

      </Routes>
    </UserProvider>
  )
}


