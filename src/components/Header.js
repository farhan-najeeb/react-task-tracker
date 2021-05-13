import PropTypes from 'prop-types'
import Button from './Button'
// impt is emmet


const Header = ({ title ,  onAdd ,showAdd}) => { // destructuring
    return (
        <header className='header'>
            <h1 >{title}</h1> 
            {/* <h1 style={headingStyle} >{title}</h1> */}
            <Button color={showAdd ? 'red':'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick = {onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string ,
    onClick: PropTypes.func,
}

// const headingStyle = {
//      color : 'red', backgroundColor : 'black' ,  
    
// }
export default Header
