import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { About } from './components/About'; //normal loading
import { Home } from './components/Home';
import { Navbar } from './components/navbar';
import { OrderSummary } from './components/OrderSummary';
import {NoMatch} from './components/NoMatch'
import {Products} from './components/Products'
import {FeaturedProducts} from './components/FeaturedProducts'
import {NewProducts} from './components/NewProducts'
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/Requireauth';
const LazyAbout = React.lazy(() => import('./components/About')) //Lazy loading

function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        {/* <Route path='about' element ={<About/>}/> */}
        <Route path='about' 
          element ={
          <React.Suspense fallback='Loading'>
            <LazyAbout/>
          </React.Suspense>}/>
        <Route path='order-summary' element ={<OrderSummary/>}/>

        <Route path = 'products' element={<Products/>}>{/* parent route  */}
          <Route index element = {<FeaturedProducts/>}/>{/* index route  */}
          <Route path='featured' element={<FeaturedProducts/>}/> {/* nested routes(children routes)  */}
          <Route path='new' element={<NewProducts/>}/>       
        </Route>

        <Route path='users' element= {<Users/>}> 
          {/* Nested routes */}
          <Route path='admin' element= {<Admin />}/>
          <Route path=':userId' element= {<UserDetails/>}/> {/* dynamic route */}
          {/* :userId is url param (which is received by useparams() hook in UserDetails) */}
        </Route>

        <Route path='profile' element= {<RequireAuth><Profile/></RequireAuth>}/>
        <Route path='login' element= {<Login />}/>

        <Route path='*' element ={<NoMatch />}/> {/* here * asterisk implies kunai aru path match vayena vane yo path match garne  */}
      </Routes>
    </AuthProvider> {/* easri wrap garexi now we have access to user, login/logout throughout our application   */}
    </>

    
  );
}

export default App;
