import style from '../styles/navBar.module.css'
import ListButton from '../reusable/listButton';

const NavBar = ()=> {
    return(
        <>
        <div>
            <div className={style.navbar}>
                <div className={style.listButtonDiv}>
                    <div className={style.listButton}>
                        <ListButton style={[style.buttonSize, style.firstLine, style.secondLine]} type="submit"/>
                    </div>
                    <div className={style.logoDiv}>
                        <img src="./src/assets/playlogo.png" alt=""/>
                        <h1>YouTube<sup className={style.ng}>NG</sup></h1>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

// function Home (){
//     return(
//         <div className={style.mainWrapper}>
//             <form action='home'>
//                 <input 
//                 type="text" 
//                 name='name'
//                 placeholder='search'
//                 />
//             </form>

//             <div>
//                 <searchBarButton style={style.btn} type="submi" textContent="submit"/>
//             </div>
//         </div>

//     )
// }


export default NavBar;