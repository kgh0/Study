import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux';

const Study = lazy(() => import('./Study'));


const MainContent = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Study" component={Study} />
                <Redirect to="/Study" />
            </Switch>
        </div>
    );
}



class Main extends React.Component {

    render() {
        debugger;
        return (
            <div>
                <Suspense fallback={<Spin size="small" />}>
                    <MainContent />
                </Suspense>
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    // debugger;
    // const { data, error } = state.main;
    // return { data, error };

    return  {};
}


const mapDispatchToProps = dispatch => ({

})

const temp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default temp;