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

export default Home;