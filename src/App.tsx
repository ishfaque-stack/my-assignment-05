import { Suspense } from "react"
import Navbar from "./Cpmponents/Navbar"
import Banner from "./Cpmponents/Banner"
import Skilldata from "./Cpmponents/SkillCard/Skilldata"
import type { ISkill } from "./types/skilltype"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Cpmponents/Footer"


const skillfetch = async ():Promise<ISkill[]>=>{
       const res = await fetch('/skill.json')
       const data = await res.json()
       return data;
     }


function App() {
  const skillPromise = skillfetch();
     
  return (
    <>
    
    
        <Navbar></Navbar>
        <Banner></Banner>
        
         <Suspense fallback={<h2>Loading....</h2>}>
         <Skilldata skillPromise={skillPromise}></Skilldata>
         </Suspense>
           <ToastContainer position="top-right" />
           <Footer></Footer>
        </>  
      )
}

export default App
