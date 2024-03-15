
import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
import Cart from "./components/Cart/Cart"



function App() {

  const [cardsData, setCardsData ] = useState([])

  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res=> res.json())
    .then(data => setCardsData(data))
  },[])


  const handleCart = (id) =>{
    const newCard =[...cart, id]
    setCart(newCard)
  }
   


  return (
    
    <div className="bg-[#F3F3F3] ">

        <h1 className="text-center text-3xl font-semibold p-6 mx-5 md:mx-10">Course Registration</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-12 mx-10">
          <Cards cardsData={cardsData} handleCart={handleCart}></Cards>
          <Cart cart={cart}></Cart>
          
        </div>


    </div>
     
    
  )
}

export default App
