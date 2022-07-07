import './App.css';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import Story from './components/Story';

function App() {
  // const [docs, setDocs] = useState([]);
  // useEffect(() => {
  //   const url = "http://localhost:5000/"
  //   const config = {
  //     headers: {
  //       "Content-Type": "image/jpeg",
  //     }
  //   }
  //   axios.get(url, config).then((response) => {
  //     setDocs(response.data);
  //   });

  // }, [])

  //  const data = docs.map((item)=>{
  //   return(
  //     `http://localhost:5000/file/${item.filename}`
  //   )
  //  })
  return (
    <div className="App">
      <Header />
      <Story />
      {/* <Post imageUrl="https://preview.redd.it/gzj9gnczs9s51.png?auto=webp&s=e0cf145017f9b69208b6fcd02240f0c5e6844268"/>
      <Post imageUrl="https://w0.peakpx.com/wallpaper/906/854/HD-wallpaper-parvati-nair-actress-malayalam-tamil-actress-paro-nair.jpg"/> */}
      <Post />
      <Sidebar avatarUrl="https://content.reelit.io/reelit/dp/1381101303.jpeg" suggestedName="rasmika_mandanna" followerName="madhumita_sarcar" />

    </div>
  );
}

export default App;
