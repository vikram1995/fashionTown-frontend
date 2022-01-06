import React from 'react';

import './App.less';

import {ApolloProvider} from "@apollo/client";
import { client } from "./services/apolloClient";
import Header from "./components/header/header";
import LandingPage from './components/landingPage/landingPage';

const App = () => (
  <ApolloProvider client={client}>
  <Header/>
  <LandingPage/>
</ApolloProvider>
);

export default App;