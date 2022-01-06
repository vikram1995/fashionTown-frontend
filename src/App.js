import React from 'react';
import './App.less';
import {ApolloProvider} from "@apollo/client";
import { client } from "./services/apolloClient";
import Header from "./components/header/header";
import LandingPage from './components/landingPage/landingPage';
import SignIn from './components/auth/signIn/signIn';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => (
  <ApolloProvider client={client}>
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter> 
</ApolloProvider>
);

export default App;