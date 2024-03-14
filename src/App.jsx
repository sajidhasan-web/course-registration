
import Cards from "./components/Cards/Cards"
import Cart from "./components/Cart/Cart"



function App() {


  return (
    
    <div className="bg-[#F3F3F3] ">

        <h1 className="text-center text-3xl font-semibold p-6 mx-5 md:mx-10">Course Registration</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-12 mx-10">
          <Cards></Cards>
          <Cart></Cart>
          
        </div>


    </div>
     
    
  )
}

export default App
