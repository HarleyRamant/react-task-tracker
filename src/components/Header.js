import PropTypes from 'prop-types'
import Button from './Button'

//You can deconstruct props =>     use "{ title }" instead of "props" so you can access "{title}" instead of "{props.title}"

//Inline CSS
const Header = (props) => {
    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
            <Button />
        </header>
    )
}


//When nothing is passed as argument of props, use the default value given below.
Header.defaultProps = {
    title: 'Task Tracker',
}

//Optionaly you can define what type the props properties have to be.
Header.propTypes = {
    title: PropTypes.string,
}

//To use inline css, add style={{color: 'red', backgroundColor: 'black'}} to the element.
//To use this style, add style={headingStyle} to the element
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
