import React from 'react'

export const PokemonBackPageInfo = ({type,hp,attack,defense,special_attack,special_defense,speed}) => {
    const style = `info-card ${type}`
    return (
        <div className={style}>
            <div className="left-side-section">
                <div className="hp-section">
                    HP:{hp}
                </div>
                <div className="attack-section">
                    Attack:{attack}
                </div>
                <div className="defense">
                    Defense:{defense}
                </div>
            </div>
            <div className="right-side-section">
                <div className="special-attack-section">
                    Sp. Atk:{special_attack}
                </div>
                <div className="special-defense-section">
                    Sp. Def:{special_defense}
                </div>
                <div className="speed-section">
                    Speed:{speed}
                </div>
            </div>
            
        </div>
    )
}
export default PokemonBackPageInfo