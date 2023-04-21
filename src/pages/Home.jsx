import React from 'react';
import '../styles/home.css';
import Header from '../components/Header'
import Banner from '../components/Banner'
import Galery from '../components/Gallery'
import Footer from '../components/Footer'

function HomePage() {
    return <div>
      <Header />
      <Banner />
      <Galery />
      <Footer />
      </div>
}
export default HomePage