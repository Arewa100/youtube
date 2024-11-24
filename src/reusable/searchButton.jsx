import React from "react";

const searchBarButton = (props)=> {
    const {style , onClick, type , textContent ,}= props;
    return(
        
        <button className="{style}" onClick={onClick}  type={type}>
            {textContent}
        </button>
        
    )
}

export default searchBarButton ; 

