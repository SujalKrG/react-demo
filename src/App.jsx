import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Person from './components/Person'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Person name={"Alexander"} age={200} />
      <Products name={"Biscuit"} price={50} />
      <Footer />
    </div>
  )
}

export default App