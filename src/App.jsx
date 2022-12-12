import Comp from "./Comp";
import logo from "./images/logo.svg"
import dash from "./images/dash.png"
import {FiFacebook} from 'react-icons/fi'
import {RxTwitterLogo} from "react-icons/rx"
import {BsInstagram} from "react-icons/bs"
function App() {
  return (
    <>
    <header>
      <img src={logo} alt="Ping Logo" />
      <h1>We are launching soon!</h1>
      <p> Subscribe and get notified </p>
    </header>
    <main>
     <Comp/>      
    </main>
    <div className="img">
      <img src={dash} alt="" />
    </div>
    <footer>
        <div className="flex">
          <div className="icon">
            <FiFacebook size="1.3rem"  />
          </div>
          <div className="icon">
            <RxTwitterLogo size="1.3rem"/>
          </div>
          <div className="icon">
            <BsInstagram  size="1.3rem"  />
          </div>
        </div>
      <p>
    &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
    </>
  );
}

export default App;
