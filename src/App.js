import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Header from './components/views/global/Header'
import Footer from './components/views/global/Footer';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan';

function App() {

  const [setShowPage] = useState('main')
  const [data, setData] = useState([])

  return (
    <React.Fragment>
      <Header action={setShowPage} />
      <Routes>
        <Route
          path={'/main'}
          element={<Main action={setData} />}  //Component={<Main />}
        />
        <Route
          path={'/stat'}
          element={<Stat statData={data} />}  //Component={<Sat />}
        />
        <Route
          path={'/plan/:demoParam'}
          element={<Plan />}  //Component={<Plan />}
        />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
