import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import AanbodPage from "../../pages/AanbodPage";
import VraagPage from "../../pages/VraagPage";
import ContactPage from "../../pages/ContactPage";
import LoginPage from "../../pages/LoginPage";
// import Header from "../HeaderGeneral/Header";
// import Contact from "../Contact/Contact"
// import BtnSendContact from "../Buttons/BtnSendContact";


function App() {
  return (
    <Router>
        {/*<Header />*/}
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/">
                <AanbodPage />
            </Route>
            <Route path="/">
                <VraagPage />
            </Route>
            <Route path="/">
                <ContactPage />
            </Route>
            <Route path="/">
                <LoginPage />
            </Route>

        </Switch>

    </Router>
  );
};

export default App;
