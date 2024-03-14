import Cards from "./components/Cards/Cards"
import Cart from "./components/Cart/Cart"



function App() {


  return (
    <>
      <h1 className="text-center text-3xl font-semibold p-6">Course Registration</h1>

      <div>
        <Cards></Cards>
        <Cart></Cart>
      </div>
     
    </>
  )
}

export default App
