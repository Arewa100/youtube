const ListButton = (props)=> {
    const {style, onClick, type} = props
    return(
        <>
        <div>
            <button className={style[0]} onClick={onClick} type={type}>
                <p className={style[1]}></p>
                <p className={style[2]}></p>
                <p></p>
            </button>
        </div>
        <div></div>
        </>
    )
}
export default ListButton;