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
          path={'/stat/:viewType'}
          element={<Stat statData={data} />}  //Component={<Sat />}
        />
        <Route
          path={'/plan'}
          element={<Plan testProp={"Nick"} />}  //Component={<Plan />}
        />
        <Route
          path={'*'}
          element={<Main action={setData} />}  // если задан не существующий path
        />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export default App;
