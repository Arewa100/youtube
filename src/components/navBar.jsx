import style from '../styles/navBar.module.css'
import ListButton from '../reusable/listButton';

const NavBar = ()=> {
    return(
        <>
        <div>
            <div className={style.navbar}>
                <div className={style.listButtonDiv}>
                    <ListButton style={[style.buttonSize, style.firstLine, style.secondLine]} type="submit"/>
                    <img src="./src/assets/youtube.svg" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;