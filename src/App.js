import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import TaskEditor from "./components/TaskEditor/TaskEditor";
import TaskList from "./components/TaskList/TaskList";
import Auth from "./components/Auth/Auth";

class App extends Component {
    render() {

        let routes = (
            <Switch>
                <Route path="/" exact component={TaskList}/>
                <Route path="/create" component={TaskCreator}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/edit/:id" component={TaskEditor}/>
                <Route render={() => <h1 style={{color: 'red', textAlign: 'center', marginTop: 50}}>404 not found</h1>}/>
            </Switch>
        );

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

export default withRouter(App);
