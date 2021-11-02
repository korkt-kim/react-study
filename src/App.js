import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import useAxios from './useAxios.js'


function App() {
  const {loading,error,data,refetch} = useAxios({method:'get',url:`https://yts.am/api/v2/list_movies.json`});
  console.log(`Loading: ${loading}, error:${error}, data:${data}`);
  return (
    <div>
      {loading && <div>Loading</div>}
      {error &&  <div>{error}</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  )
}
export default App;
