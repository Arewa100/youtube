import React from 'react';
import style from '../styles/navBar.module.css'
import ListButton from '../reusable/listButton';

const NavBar = ()=> {
    return(
        <div className={style.navbar}>
            <div className={style.logoDiv}>
                <img src="./src/assets/playlogo.png" alt="Logo" />
                <h1>YouTube<sup className={style.ng}>BR</sup></h1>
            </div>
            <div className={style.searchDiv}>
                <input type="text" placeholder="Pesquisar" className={style.searchInput} />
                <button className={style.searchButton}>🔍</button>
            </div>
            <div className={style.listButtonDiv}>
                <ListButton style={[style.buttonSize]} type="submit" />
            </div>
        </div>
    )
}

export default NavBar;