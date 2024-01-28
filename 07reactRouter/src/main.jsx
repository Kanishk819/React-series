import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home/> 
//       },
//       {
//         path:"about",
//         element: <About/> 
//       },
//       {
//         path:"ContactUs",
//         element: <ContactUs/> 
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route 
        // loader={}
        // Loader : Agar koi bhi data fetch karna hai toh hum directly api calls yahi se maar sakte hai
        // Yahan pe jaise hi Github pe hover karenege toh data fetching pehle hi chalu ho jaayega
        // aur cache mein bhi bana rahega
        path='github'
         element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
