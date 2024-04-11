
import PropTypes from 'prop-types'
import Button from '/src/components/Button.jsx'

function ShortenLink(props) {

    return (
        <>
        <form
        onSubmit={props.handleSubmit} 
            className='p-5 lg:p-14 bg-primaryDarkViolet rounded-xl bg-[url("/images/bg-shorten-mobile.svg")] bg-cover bg-no-repeat bg-left
            lg:bg-[url("/images/bg-shorten-desktop.svg")] lg:flex lg:items-start lg:gap-x-4'
        >
            <label className='lg:flex-1'>
                <input 
                    placeholder='Shorten a link here...' 
                    className='w-full py-3 pl-3 mb-3 lg:mb-0 rounded-md overflow-scroll'
                    id={props.id} 
                    name={props.name}
                    value={props.value} 
                    onChange={props.handleChange}
                    required
                    />
            </label>
            
            <div className='lg:'>
                <Button
                    type="button"
                    buttonText='Shorten It!' 
                    borderStyle='square'
                    variant='narrow'
                />
            </div>
        </form>
        </>
    )
}

ShortenLink.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default ShortenLink
