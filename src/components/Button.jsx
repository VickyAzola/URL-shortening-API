import PropTypes from 'prop-types'

function Button(props) {

    const border = {
        rounded: 'rounded-full',
        square: 'rounded-md'
    }

    const buttonWidth = {
        widest:  'py-3 px-10',
        narrow: 'py-2.5 px-6'
    }

    return (
        <>
        <button  
            onClick={props.handleClick} 
            className={` bg-primaryCyan w-full py-3 text-white font-semibold hover:bg-cyan-200
            ${buttonWidth[props.variant]} 
            ${border[props.borderStyle]}`} 
        >
            {props.buttonText}
        </button>
        </>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    buttonText: PropTypes.string,
    variant: PropTypes.string,
    borderStyle: PropTypes.string,
}


export default Button
