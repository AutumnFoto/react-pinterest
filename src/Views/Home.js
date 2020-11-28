import React from 'react';
import Auth from '../components/Auth';
import BoardContainer from '../components/BoardContainer';
// import Loader from '../components/Loader';

export default function Home({ user }) {
  const loadComponent = () => {
    let component = '';
    if (user) {
      component = <BoardContainer />;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div>
      <h1>Welcome to React-Pinterest</h1>
      {loadComponent()}
    </div>
  );
}
