import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextBody from './Components/TextBody';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import About from './Components/About';

function App() {

  let [mode, setMode] = useState('light');
  let [myAlert, setMyAlert] = useState(null);

  let showAlert = (message, type) => {
    setMyAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setMyAlert(null);
    }, 500);
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#030e2a";
      showAlert("Dark mode Enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "Success");
    }
  }
  return (

    <>
      {/* <BrowserRouter> */}

        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert myAlert={myAlert} />
        <div className='container my-1' >
                    {/* <Routes> */}
            {/* <Route path="/" element={<TextBody heading='Enter text to analyse here' showAlert={showAlert} mode={mode} />} /> */}
            {/* <Route path="/about" element={<About mode={mode}/>} /> */}
            <TextBody heading='Enter text to analyse here' showAlert={showAlert} mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}

    </>

  );
}

export default App;
