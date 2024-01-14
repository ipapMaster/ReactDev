import React, { useEffect, useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { setData as setDataFromRedux } from './redux-state/reducers/data';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Header from './components/views/global/Header'
import Footer from './components/views/global/Footer';
import Stat from './components/pages/Stat';
import Plan from './components/pages/Plan';

function App() {

  const [setShowPage] = useState('main')
  const data = useSelector(state => state.dataReducer.data)
  const dispatch = useDispatch()

  const setData = (param) => dispatch(setDataFromRedux(param))

  useEffect(() => console.log(data), [data])

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
          element={<Plan statData={data} />}  //Component={<Plan />}
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
