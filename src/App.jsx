import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SupportCardsContainer from "./components/SupportCardsContainer";
import Footer from "./components/Footer";



function App() {

  const [tickets,setTickets] = useState([]);

  useEffect(()=>{
    fetch('./tickets.json')
    .then(res => res.json())
    .then(data => setTickets(data))
    .catch(err => console.log(err))
  },[])
  
  // console.log(tickets)
  // const tickets = loadTickets();
  
  return (
    <>
    <div className="max-w-[1280px] mx-auto">
      <header className="py-3 px-3">
        <NavBar></NavBar>
      </header>
      <section>
        <SupportCardsContainer tickets={tickets}></SupportCardsContainer>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
      
    </>
  );
}

export default App;
