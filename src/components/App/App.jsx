import './App.css'

import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SmthWrong from '../SmthWrong/SmthWrong'

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as authApi from '../../utils/ApiAuth';
import { mainApi } from '../../utils/MainApi';
import { eraseAll, loggedInStorage } from "../../utils/LocalStorage";
import ProtectedRoute from '../../utils/ProtectedRoute'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(loggedInStorage.get());
  const navigate = useNavigate();

  useEffect(() => {
    loggedInStorage.set(loggedIn);
    if (loggedIn) {
      if (!currentUser.name) {
        mainApi.getUserInfo()
          .then(info => {
            setCurrentUser(info._doc);
          })
          .catch(err => { console.error(err) })
      }
    }
  }, [loggedIn])

  useEffect(() => {
    authApi.checkToken()
      .then(data => {
        setCurrentUser(data._doc);
        setLoggedIn(true)
      })
      .catch(err => {
        setLoggedIn(false)
        setCurrentUser({});
      })
  }, [])

  async function handleLogin(dataLogin) {
    return authApi.authorize(dataLogin)
      .then(res => {
        setLoggedIn(true)
        navigate('/movies')
      })
  }

  async function handleRegister(dataLogin) {
    return authApi.register(dataLogin)
      .then(res => {
        return authApi.authorize({email: dataLogin.email, password: dataLogin.password})
          .then(res => {
            setLoggedIn(true)
            navigate('/movies')
          })
      })
  }

  async function handleEditProfile(data) {
    return mainApi.setUserInfo(data)
      .then(res => {
        setCurrentUser(res)
      });
  }



  function handleExit() {
    authApi.logout()
      .then(() => {
        setCurrentUser({})
        eraseAll();
        setLoggedIn(false);
        navigate('/');
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`App `}>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path='/' element={
            <Main />
          } />
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies />
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          } />
          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onExit={handleExit}
                onEdit={handleEditProfile} />
            </ProtectedRoute>
          } />

          <Route path='/signin' element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Login onLogin={handleLogin} />
            </ProtectedRoute>
          } />
          <Route path='signup' element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Register onRegister={handleRegister} />
            </ProtectedRoute>
          } />
          <Route path='*' element={
            <SmthWrong />
          } />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
