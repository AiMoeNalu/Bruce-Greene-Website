import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import Header from './components/header/header';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
 constructor(props){
   super(props);

   this.state = {
     currentUser: null
   }
 }

unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
    console.log(user);
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
      return (
      <div className='app'>
        <Router>
        <div className='app'>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact={true} path='/' component={HomePage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
