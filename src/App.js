import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Favourites from './Pages/Favourites';
import ItemList from './Pages/ItemList';

function App() {
  return (
   <>
   <Router>
   <Switch>
       <Route exact path="/" component={ItemList} />
       <Route path="/favourites" component={Favourites} />
     </Switch>
   </Router>
   </>
  );
}

export default App;
