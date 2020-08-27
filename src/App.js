import React,{useState,Fragment} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import {useStateValue} from "./StateProvider"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';

function App() {
  const [{user},dispatch] = useStateValue();
  const [show,setShow] = useState(true);
  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login />
      ) : (
        <Fragment>
        {/* <Header toggleShow={setShow} /> */}
        <div className="app__body">
        {show && <Sidebar />}
            <Switch>
              <Route exact path="/room/:roomId" component={Chat} />
            </Switch>
        </div>
        </Fragment>
      )}
      </Router>
    </div>
  );
}

export default App;
