import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import News from './components/group_component/News';
import Home from './components/Home';
import About from './components/group_component/About';
import Contact from './components/group_component/Contact';
import Eorthodontic from './components/group_component/Eorthodontic';
import Icustomer from './components/group_component/Icustomer';
import Service from './components/group_component/Service';
import Discount from './components/group_component/Discount';
import DiscountDetail from './components/group_component/detail/discountDetail';
import ServiceDetail from './components/group_component/detail/serviceDetail';
import { Routes,Route, Link, Switch, browserHistory, IndexRoute, useParams } from 'react-router-dom';
export default function RouteClass(){
        return (
              <>
                    <Routes>
                        <Route exact path='/' element={ <Home/>}/>
                        <Route path="/about" element={<About/>} />
                        <Route path="/news" element={<News/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/eorthodontic" element={ <Eorthodontic/>}/>
                        <Route path="/icustomer" element={ <Icustomer/>}/>
                        <Route path="/service" element={ <Service/>}/>
                        <Route path="/discount" element={ <Discount/>} />
                        <Route path="/servicedetail/:id" element={ <ServiceDetail/>}/>
                        <Route path="/discountdetail/:id" element={ <DiscountDetail/>}/>
                    </Routes>
              </>
        )
}
