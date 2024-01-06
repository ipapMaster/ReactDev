import React, { useState } from 'react';
import Main from './components/pages/Main';
import Header from './components/views/global/Header'
import Footer from './components/views/global/Footer';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan';

function App() {

  const [showPage, setShowPage] = useState('main')
  const [data, setData] = useState([])

  return (
    <React.Fragment>
      <Header action={setShowPage} />
      {
        showPage === 'main'
          ? <Main action={setData} />
          : showPage === 'stat'
            ? <Stat statData={data} />
            : <Plan />
      }
      <Footer />
    </React.Fragment>
  );
}

export default App;
