import { useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AddPocket from "./pages/AddPocket"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>  
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/AddPocket" element={<AddPocket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
