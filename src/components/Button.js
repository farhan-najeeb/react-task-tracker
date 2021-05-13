import PropTypes from 'prop-types'


function Button({ color,text,onClick}) {
    return( 
    <button 
    className='btn' 
    style={{backgroundColor:color}}
    onClick = {onClick} 
    >
        {text}
        </button>
    )
}

export default Button

Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes = {
    text : PropTypes.string,
    color: PropTypes.string
}