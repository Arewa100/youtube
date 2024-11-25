import React from 'react';
import style from '../styles/home.module.css'
import NavBar from './navBar';
import RoutesLink from '../List_of_linkButton/linkButtonList';
const Home = ()=> {
    return (
      <>
        <div className={style.wrapper}>
          <NavBar />

          <div className={style.mainBodyContainer}>
            <RoutesLink />
          </div>
        </div>
      </>
    );
}


export default Home;