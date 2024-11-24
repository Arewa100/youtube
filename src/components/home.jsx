import style from '../styles/home.module.css'
import NavBar from './navBar';

const Home = ()=> {
    return(
        <>
        <div className={style.wrapper}>
            <NavBar/>
        </div>
        </>
    )
}

export default Home;