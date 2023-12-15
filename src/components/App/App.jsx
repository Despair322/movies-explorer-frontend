import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'

import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SmthWrong from '../SmthWrong/SmthWrong'

function App() {
  return (
    <div className="App">
      <Header loggedIn={true} />
      <Routes>
        <Route path='/' element={
          <Main />
        } />
        <Route path='/movies' element={
          <Movies />
        } />
        <Route path='/saved-movies' element={
          <SavedMovies />
        } />
        <Route path='/profile' element={
          <Profile />
        } />
        <Route path='/signin' element={
          <Login />
        } />
        <Route path='signup' element={
          <Register />
        } />
        <Route path='*' element={
          <SmthWrong />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
