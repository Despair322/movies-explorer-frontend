import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Main() {
  return (<>
    <Header loggedIn={false}/>
    <main className='main'>Main</main>
    <Footer />
  </>)
}
