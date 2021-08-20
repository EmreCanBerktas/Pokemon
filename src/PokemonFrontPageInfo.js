import React from 'react'

export const PokemonFrontPageInfo = ({name,type,image}) => {
    const style =`info-card ${type}`
    return (
        <div className={style}>
            <div className="name-section">
                <h1>
                Name:{name.charAt(0).toUpperCase() + name.slice(1)}
                </h1>
                
            </div>
            <div>
                <img src={image} alt={name} style={{height:250,width:300}}/>
            </div>
            <div className="type-section">
                Type:{type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
        </div>
    )
}
export default PokemonFrontPageInfo