import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Wrapper from '../Wrapper';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from '../Pages';

import { SwapiServiceProvider } from '../SwapiServiceContext';
import StarshipDetails from '../SwComponents/starshipDetails';

// import cn from 'classnames';
import styles from './styles.module.scss';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof DummySwapiService
          ? SwapiService
          : DummySwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className={styles.stardbApp}>
              <Header />
              <div className={styles.section}>
                <Wrapper className={styles.wrapper}>
                  <RandomPlanet />

                  <Switch>
                    <Route
                      path="/"
                      render={() => <h2>Welcome to StarDB</h2>}
                      exact
                    />
                    <Route path="/people/:id?" component={PeoplePage} />
                    <Route path="/planets" component={PlanetsPage} />
                    <Route path="/starships" exact component={StarshipsPage} />
                    <Route
                      path="/starships/:id"
                      render={({ match }) => {
                        const { id } = match.params;
                        return <StarshipDetails itemId={id} />;
                      }}
                    />
                    <Route
                      path="/login"
                      render={() => (
                        <LoginPage
                          isLoggedIn={isLoggedIn}
                          onLogin={this.onLogin}
                        />
                      )}
                    />
                    <Route
                      path="/secret"
                      render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                    />
                    {/* <Redirect to="/" /> */}
                    <Route render={() => <h2>Page not found</h2>} />
                  </Switch>
                </Wrapper>
              </div>
              <Footer onServiceChange={this.onServiceChange} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
