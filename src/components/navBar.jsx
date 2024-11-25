import style from '../styles/navBar.module.css'
import ListButton from '../reusable/listButton';

const NavBar = ()=> {
    return(
        <>
        <div>
            <div className={style.navbar}>
                <ListButton/>
            </div>
        </div>
        </>
    )
}

export default NavBar;