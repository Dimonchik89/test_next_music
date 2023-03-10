

const ButtonPlay = ({handleClick, styleClass, disabled=false}) => {

    return (
        <button 
            className={styleClass}
            onClick={handleClick}
            disabled={disabled}
        />
    )
}
export default ButtonPlay;