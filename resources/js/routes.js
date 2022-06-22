import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import News from './components/group_component/News';
import Home from './components/Home';
import protectedRoutes from './components/protectedRoutes';
import Welcome from './admin/Welcome';
import About from './components/group_component/About';
import Contact from './components/group_component/Contact';
import Eorthodontic from './components/group_component/Eorthodontic';
import Icustomer from './components/group_component/Icustomer';
import Service from './components/group_component/Service';
import Discount from './components/group_component/Discount';
import DiscountDetail from './components/group_component/detail/discountDetail';
import NewsDetail from './components/group_component/detail/newsDetail';
import ServiceDetail from './components/group_component/detail/serviceDetail';
import EoDetail from './components/group_component/detail/eodetail';
import CustomerDetail from './components/group_component/detail/customerDetail';
import Add from './admin/gallery/Add';
import View from './admin/gallery/View';
import Edit from './admin/gallery/Edit';
import ServiceViewList from './admin/service/ServiceViewList';
import ServiceCategoryView from './admin/service/ServiceCategoryView';
import EditServiceCategory from './admin/service/EditServiceCategory';
import EditService from './admin/service/EditService';
import AddNewService from './admin/service/AddNewService';
import AddNewServiceCategory from './admin/service/AddNewServiceCategory';
import ListContact from './admin/contact/ListContact';
import ViewNews from './admin/news/ViewNews';
import AddNews from './admin/news/AddNews';
import EditNews from './admin/news/EditNews';
import OView from './admin/orthodontic/OView';
import OAdd from './admin/orthodontic/OAdd';
import OEdit from './admin/orthodontic/OEdit';
import CView from './admin/customerquestion/CView';
import CAdd from './admin/customerquestion/CAdd';
import CEdit from './admin/customerquestion/CEdit';
import DisCountView from './admin/discount/DisCountView';
import AddDiscount from './admin/discount/AddDiscount';
import Login from './admin/user/Login';
import Register from './admin/user/Register';
import EditDiscount from './admin/discount/EditDiscount';
import { Routes,Route, Link, Switch, browserHistory, IndexRoute, useParams,Navigate } from 'react-router-dom';

export default function RouteClass(){

        return (
              <>
                    <Routes>
                        <Route index element={ <Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/news" element={<News/>} />
                        <Route path="/news_detail/:id" element={<NewsDetail/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/eorthodontic" element={ <Eorthodontic/>}/>
                        <Route path="/icustomer" element={ <Icustomer/>} />
                        <Route path="/service" element={ <Service/>}/>
                        <Route path="/discount" element={ <Discount/>} />
                        <Route path="/servicedetail/:id" element={ <ServiceDetail/>}/>
                        <Route path="/discountdetail/:id" element={ <DiscountDetail/>}/>
                        <Route path="/eodetail/:id" element={ <EoDetail/>}/>

                        <Route path="/index" element={ <Welcome/>} />
                        {/* gallery route */}
                        <Route path="/addimg" element={<Add/>}/>
                        <Route path="/galview" element={<View/>}/>
                        <Route path="/editgal/:id" element={<Edit/>}/>
                        {/* service router */}
                        <Route path="/serviceVL" element={<ServiceViewList/>}/>
                        <Route path="/editserviceCtg/:id" element={< EditServiceCategory/>}/>
                        <Route path="/serviceCtgV" element={<ServiceCategoryView/>} />
                        <Route path="/editSV/:id" element={<EditService/>} />
                        <Route path="/addSV" element={<AddNewService/>} />
                        <Route path="/addSVCTGR" element={<AddNewServiceCategory/>} />
                        {/*contactView  */}
                        <Route path="/contactVL" element= {<ListContact />} />
                        {/* News views */}
                        <Route path="/ViewNews" element={<ViewNews />} />
                        <Route path="/addNews" element={<AddNews />} />
                        <Route path="/editNews/:id" element={<EditNews />} />
                        {/* discount */}
                        <Route path="/discountView" element={<DisCountView />} />
                        <Route path="/edit_discount/:id" element={<EditDiscount />} />
                        <Route path="/add_discount" element={<AddDiscount />} />
                        {/* Orthodontic view */}
                        <Route path="/oView" element={<OView />} />
                        <Route path="/oAdd" element={<OAdd />} />
                        <Route path="/oEdit/:id" element={<OEdit />} />
                        {/* customer detail */}
                        <Route path="/customer_detail/:id" element={<CustomerDetail />} />
                        <Route path="/cView" element={<CView />} />
                        <Route path="/cAdd" element={<CAdd />} />
                        <Route path="/cEdit/:id" element={<CEdit />} />
                        {/* user */}
                        <Route path="/mylogin" element={<Login />} />
                        <Route path="/myregister" element={<Register />} />

                    </Routes>
              </>
        )
}
