import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './SearchPage.js'
import ProfileCard from './ProfileCard';
function App() {
  
  return (
<>
    <div className="App">
      <Router>
      
     <Routes>
     
     <Route
            
            exact
            path="/"
            element={[<Header/>,<Home/>,<Footer/>]} 
          ></Route>
    

<Route
            
            exact
            path="/search"
            element={[<Header/>,<SearchPage/>,<Footer></Footer>]}  
          ></Route>


<Route
            
            exact
            path="/profile"
            element={[<Header/>,<ProfileCard/>]} 
          ></Route>


    
    
    </Routes>
    </Router>

    </div>
  </>
  );
}

export default App;
