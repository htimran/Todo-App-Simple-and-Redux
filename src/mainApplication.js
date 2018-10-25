import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import todoimage from "./todomain.png";
import TodoSimple from "./components/todoSimple";
import TodowithRedux from "./components/TodowithRedux";
import history from "./History.js";

import { Router, Route } from "react-router-dom";
const imagestyle = {
    marginLeft: "5%"
}
const RootComponent = () => {
    
  return (
    <div>
      <h1>RootComponent</h1>
      <hr />
      <img src ={todoimage} alt="Mountain" 
      width="94%" 
      style={
        imagestyle
      }
        />
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <img src ={todoimage} alt="Mountain" 
      width="94%" 
      style={
        imagestyle
      }
      />
    </div>
  );
};
const Todoapp = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <hr />
      <TodoSimple />
    </div>
  );
};
const TodoRedux = ()=>{
  return (
    <div>
      <h1>Todo App With Redux</h1>
      <hr />
      <TodowithRedux />
    </div>
  );
};
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  render() {
    return (
      <div>        
        <Router history={history}>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={selected => {
                    const to = "/" + selected;                    
                    
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="todoapp">
                      <NavIcon>
                        <i
                          className="fa fas fa-tasks"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Todo Simple App</NavText>
                    </NavItem>
                    <NavItem eventKey="todoapp_redux">
                      <NavIcon>
                        <i
                          className="fa fas fa-tasks"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Todo App with Redux</NavText>
                    </NavItem>                    
                    {/* <NavItem eventKey="delete">
                      <NavIcon>
                        <i
                          className="fa fas fa-tasks"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Delete Item</NavText>
                    </NavItem> */}
                    
                  </SideNav.Nav>
                </SideNav>
                <main>
                  <Route
                    path="/"
                    exact
                    component={props => <RootComponent />}
                  />
                  <Route path="/home" component={props => <Home />} />
                  <Route path="/todoapp" component={props => <Todoapp />} />
                  <Route path="/todoapp_redux" component={props => <TodoRedux />} />                  
                </main>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}
export default TodoApp;
