import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Submitted from './Submitted';
import UserForm from './UserForm';
const App =() =>{
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserForm}/>
          <Route exact path="/submitted" component={Submitted}/>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
