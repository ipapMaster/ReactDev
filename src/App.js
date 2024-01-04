import React, { useState } from 'react';
import Main from './components/pages/Main';
import Header from './components/views/global/Header'
import Footer from './components/views/global/Footer';
import Stat from './components/pages/Stat';

function App() {

  const [showPage, setShowPage] = useState('main')
  const [data, setData] = useState([])

  return (
    <React.Fragment>
      <Header action={setShowPage} />
      {showPage === 'main' ? <Main action={setData} /> : <Stat statData={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
