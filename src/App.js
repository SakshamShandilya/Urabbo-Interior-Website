import logo from './logo.svg';
import './App.css';
import RoutePages from './RoutePages';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./Home"
import Project from "./Project"
import Projects from "./Projects"
import Architecture from "./Architecture"
import Design from "./Design"
import Interior from "./Interior"
// import AboutUs from "./AboutUs"
import IndexHome from "./IndexHome"
import SearchResult from "./SearchResult"
import Contact from "./Contact"

function App() {
  return (
   <Routes>
      <Route  path="/" element={<IndexHome/>}></Route>
     <Route path="/projects" element={ <Projects/> }></Route>
     <Route path="/architecture" element={ <Architecture/> }></Route>
     <Route path="/design" element={ <Design/> }></Route>
     <Route path="/interior" element={ <Interior/> }></Route>
    {/*<Route  path="/projects/:projectId" element={<Project/>}></Route>*/}
		{/*<Route  path="/aboutus" element={<AboutUs/>}></Route>*/}
     <Route  path="/projects/search/:searchkey" element={<SearchResult/>}></Route>
     <Route  path="/contactus" element={<Contact/>}></Route>


   </Routes>
  );
}

export default App;
