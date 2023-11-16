import React, { useState } from "react"
import './styles/App.css';
import Navbar from './Components/NavBar/Navbar';
import { Products } from './Components/products';
import contents from './Components/contents';
import { Login } from "./Pages/Login";
import {Register} from "./Pagess/Register";
import {Feedback} from "./Components/feedback";

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <Navbar />
      <div className='App'>
        {contents.map(contents => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
          />
        ))}
      </div>
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }

      </div>
    </div>
  );
}

export default App;
