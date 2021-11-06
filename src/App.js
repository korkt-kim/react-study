import React from 'react'
import {Route,Routes,Link} from  'react-router-dom'
const A1 = React.lazy(()=>import ('./components/A1'));
const A2 = React.lazy(()=>import ('./components/A2'));
const A3 = React.lazy(()=>import ('./components/A3'));

function App() {
  return (
    <div>
      <Link to="/1">A1</Link>
      <Link to="/2">A2</Link>
      <Link to="/3">A3</Link>
      <React.Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route path="/1" exact={true} element={<A1/>}></Route>
          <Route path="/2" exact={true} element={<A2/>}></Route>
          <Route path="/3" exact={true} element={<A3/>}></Route>
        </Routes>
      </React.Suspense>
    </div>
  )
}

export default App
