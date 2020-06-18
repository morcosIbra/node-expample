import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import sty from './index.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from '../../Components/Layout';
import Home from '../Home';
import Booking from '../Booking';
import Popup from '../../Components/Popup';
import LoadingPage from '../../Components/LoadingPage';
import InfoBar from '../../Components/InfoBar';
import Header from '../../Components/Header';
import { getMetaData } from '../../store/actions/common';
import UnderConstruction from '../UnderConstruction';
function App({ action, loadingPage, response, getMetaData }) {
  useEffect(() => {
    getMetaData()
  }, [getMetaData])
  return (
    <Router>
      <Header />
      <Layout>
        asdasd {process.env.NODE_ENV}
        {action.needed ? <Popup {...action} /> : null}
        {loadingPage ? <LoadingPage /> : null}
        {response.code ? <InfoBar items={[response.status]} classes={sty.sidePage} /> : null}
        <Switch>
          <Route path="/booking" component={Booking} />
          {/* <Route path="/" component={Home} /> */}
          <Route path='/' component={UnderConstruction} />
        </Switch>
      </Layout>
    </Router >
  );
}
const mapStateToProps = state => ({
  action: state.common.action,
  loadingPage: state.common.loadingPage,
  response: state.common.response
})
const mapDispatchToProps = { getMetaData }

export default connect(mapStateToProps, mapDispatchToProps)(App);
