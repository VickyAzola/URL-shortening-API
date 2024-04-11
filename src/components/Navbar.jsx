import { useState } from 'react'
import Button from './Button'
import Logo from '/images/logo.svg'
import Hamburger from '/images/icon-menu.svg'
import Close from '/images/icon-close.svg'

function Navbar() {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
    const showNavbar = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        {id: 0, text: 'Features'},
        {id: 1, text: 'Pricing'},
        {id: 2, text: 'Resources'},
    ];

    return (
    <>
        <nav className='relative px-5 py-6 lg:pt-8 md:px-12 lg:px-28 md:flex md:items-center'>

        {/* Logo, Hamburger and Close mobile */}
        <div className='flex justify-between items-center'>
            <a href='/' aria-label='Logo'>
                <img className='' src={Logo} alt="Logo"/>
            </a>
            <button onClick={showNavbar} className='block md:hidden' aria-label="Open and Close Navigation">
                {nav 
                ? <img className='w-6 ease-in duration-700' src={Close} alt="Close Navigation"/>
                : <img className='w-6 ease-out duration-700' src={Hamburger} alt="Open Navigation"/> }
            </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center justify-between pl-10 w-full'>
            <ul className='flex items-center md:gap-x-4 lg:gap-x-8 h-full'>
                {navItems.map((item, index) => (
                <li key={index}
                className='font-semibold hover:cursor-pointer text-neutralGrayishViolet'>
                    <a 
                        href=''
                        className='text-DarkGrayishBlue hover:text-primaryDarkViolet h-full'>
                            {item.text}
                    </a>
                </li>
                ))}
            </ul>

            {/* Login and Sign Up */}
            <div className='flex items-center gap-x-6'>
                <button className='py-2 font-semibold text-neutralGrayishViolet hover:text-primaryDarkViolet'>Login</button>
                <Button 
                    buttonText='Sign Up'
                    borderStyle='rounded'
                    variant='narrow'
                />
            </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {nav &&
            <div className='bg-primaryDarkViolet z-10 fixed md:hidden top-20 inset-x-0 mx-auto 
                w-[90%] min-h-min ease-in-out duration-500 rounded-xl text-center p-6 text-white'>
                <ul className='pb-2'>
                {navItems.map((item, index) => (
                    <li key={index} className='my-3 w-full hover:cursor-pointer'>
                        <a href='' className='block w-full py-3 font-bold'>
                            {item.text}
                        </a>
                    </li>
                    ))
                }
                </ul>
                
                {/* Login and Sign Up */}
                <div className='flex flex-col items-center w-full gap-y-4 py-5 border-t border-t-neutralGrayishViolet'>
                    <button className='py-2 mb-1 font-semibold'>Login</button>
                    <Button 
                        buttonText='Sign Up'
                        borderStyle='rounded'
                        variant='widest'
                    />
                </div>
            </div>
        }
        </nav>
    </>
    )
}

export default Navbar
