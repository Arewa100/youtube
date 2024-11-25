import style from '../styles/home.module.css'
import NavBar from './navBar';


const Home = ()=> {
    return(
       <>
        <div className={style.wrapper}>
            <NavBar/>

            <div className={style.mainBodyContainer}>
              <button><h1>MUSIC</h1></button>
              
            </div>

        </div>

       </>
    )
}


export default Home;