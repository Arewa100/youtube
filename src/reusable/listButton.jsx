import style from '../styles/listButton.module.css'
const ListButton = (props)=> {
    const {onClick, type} = props
    return(
        <>
        <div>
            <button className={style.buttonSize}>
                <p className={style.firstLine}></p>
                <p className={style.secondLine}></p>
                <p></p>
            </button>
        </div>
        </>
    )
}
export default ListButton;