import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import {connect} from 'react-redux';
import TaskPage from "./components/TaskPage/TaskPage";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import TaskEditor from "./components/TaskEditor/TaskEditor";

class App extends Component {
    render() {

        let routes = (
            <Switch>
                <Route path="/" exact component={TaskPage}/>
                <Route path="/create" component={TaskCreator}/>
                <Route path="/edit" component={TaskEditor}/>
            </Switch>
        );

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
