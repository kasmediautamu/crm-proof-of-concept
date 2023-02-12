import React,{Suspense} from 'react'
import {Route} from 'react-router';
import {Routes} from 'react-router-dom';
import './App.css'

// pages
const Landing = React.lazy(()=>import('./containers/landing'));
function App() {
  return (
    <>
    <Routes>
  
    <Route
    path='/'
    element={
      <Suspense fallback={<>Loading</>}>
        <Landing/>
      </Suspense>
    }
    />
  </Routes>
  </>
  )
}

export default App
