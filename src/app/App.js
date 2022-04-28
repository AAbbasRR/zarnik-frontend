import './styles/App.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/home/Home';
import Products from '../containers/products/Products';
import Page404 from '../containers/page_404/Page404';

function App() {
  return (
    <div className="App">
      <div className="backGroundImage" />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product' component={Products} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
