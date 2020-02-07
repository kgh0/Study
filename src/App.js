import React from 'react';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import Main from "./pages/Main";

// import moment from 'moment';
// import 'moment/locale/zh-cn';

// moment.locale('zh-cn');

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
