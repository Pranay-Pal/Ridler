import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Particle from './components/Particle/Particle';
import WebCursor from './components/WebCursor/WebCursor';
import FinalForm from './components/FinalForm';
import Nav from './components/Nav/Nav'
import img1 from "./assets/ImageFolder/1.png"
import img2 from "./assets/ImageFolder/2.png"
import img3 from "./assets/ImageFolder/3.png"
import img4 from "./assets/ImageFolder/4.png"
import img5 from "./assets/ImageFolder/5.png"
import img6 from "./assets/ImageFolder/6.png"
import img7 from "./assets/ImageFolder/7.png"

import QuizPage from './components/QuizPage';
function App() {

  return (
    <div className="App"><BrowserRouter>
    <Particle />
    <WebCursor />
    <Nav />
    <Routes>
    <Route path='*' element={<><h1>Not Found</h1></>}/>
    <Route path='/firstquestion' element={<QuizPage image={img1}/>}/>
    <Route path='/bribe' element={<QuizPage image={img2}/>}/>
    <Route path='/orphan' element={<QuizPage image={img3}/>}/>
    <Route path='/friend' element={<QuizPage image={img4}/>}/>
    <Route path='/tomorrow' element={<QuizPage image={img5}/>}/>
    <Route path='/shadow' element={<QuizPage image={img6}/>}/>
    <Route path='/vowels' element={<QuizPage image={img7}/>}/>
    <Route path='/brain' element={<FinalForm/>}/>

    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
