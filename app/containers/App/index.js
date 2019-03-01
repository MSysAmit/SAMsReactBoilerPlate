/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomeFooter from '../../components/HomeFooter';
import Header from '../../components/Header';
import HomePage from '../../components/Home';
import GlobalViewPage from '../../components/GlobalView';
import FeaturePage from '../../components/Features';
import Lite from '../../containers/Lite';
import DownloadsPage from '../../components/Downloads';
import ContactPage from '../../components/Contact';
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';
import Orgs from '../Org';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/global-view" component={GlobalViewPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/lite" component={Lite} />
        <Route path="/downloads" component={DownloadsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/admin/orgs" component={Orgs} />
        <Route path="/admin/development" component={Orgs} />
        <Route path="/admin/global-view" component={Orgs} />
        <Route path="/admin/cloud-drive" component={Orgs} />
        <Route path="/admin/users" component={Orgs} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <HomeFooter />
    </div>
  );
}
