import { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Navbar from '/src/components/Navbar.jsx'
import Button from '/src/components/Button.jsx'
import ShortenLink from '/src/components/ShortenLink.jsx'
import Footer from '/src/components/Footer.jsx'
import Card from './components/Card'

function App() {

    //state to store the link provided from the user
    const [userInput, setUserInput] = useState('')

    //state to store all the userInput and shortendUrl in an array of objects
    const [allTinyUrls, setAllTinyUrls] = useState([{
        largeLink: '',
        newLink: ''
    }])

    //state to manage the visibility of the ui with the new links 
    const [showLinks, setShowLinks] = useState(false)

    //state to manage the index selected for the button copy
    const [selected, setSelected] = useState()

  //manage the input and set the userInput state to whats provided from the user
  function handleChange(event) {
    event.preventDefault()
    setUserInput(event.target.value)
  }

  //Call the API
  function getShortenUrl(event) {
    event.preventDefault()

    //start API call
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const urlAPI = "https://api.tinyurl.com/create?api_token=ba1TrtWVt7nGAng8Ib8NHat5kfrqw4G80nijwTwkdc9V1UImj4KssvZ56Ppx"
  
    fetch(urlAPI, 
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          "url": userInput,
          "description": "string"
        }),
        redirect: "follow"
      }
    )
    .then((response) => response.json())
    .then((result) => {
      if (showLinks == false) {
        setAllTinyUrls([ 
          {
            largeLink: userInput,
            newLink: result.data.tiny_url
          }
        ])
      } else {
        setAllTinyUrls(prevState => ([ 
          ...prevState, {
            largeLink: userInput,
            newLink: result.data.tiny_url
          }
        ]))
      }
    })
    .catch((error) => console.error(error));
    //end API call

    //show links if there is already a shortened response from the API
    if (allTinyUrls.newLink) {
      setShowLinks(true)
    } else {
      setTimeout(setShowLinks(true), 10000);
    }
  }

  //select the index of the button copy
  const onCopy = (index) => {
    setSelected(index)
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='text-[18px]'>
{/*Hero Section */}
        <section className='lg:min-h-[28rem] md:grid md:grid-cols-2 lg:mt-8 max-w-[90rem] mx-auto'>
          <div className='min-h-[20rem] bg-[center_right_-6rem] md:order-1 lg:min-h-[28rem] bg-[length:auto_95%] lg:bg-[center_right_-5rem] bg-[url("/images/illustration-working.svg")] bg-no-repeat' />
          
            <div className='mt-10 lg:my-auto flex flex-col items-center md:pl-12 lg:pl-28 md:items-start md:text-left text-center px-6'>
              <h1 className='primaryDarkViolet text-4xl lg:text-6xl font-bold mb-3'>
                More than just shorter links
              </h1>
              <p className='text-neutralGrayishViolet mb-6'>
                Build your brand’s recognition and get detailed insights 
                on how your links are performing.
              </p>
              <div>
              <Button 
                buttonText='Get Started' 
                borderStyle='rounded'
                variant='widest'
              />
            </div>
          </div>
        </section>

{/*ShortenLink Section */}
        <section className='mt-32 pb-28 bg-gray-100 relative'>
          <div className='absolute top-[-60%] inset-x-0 px-6 md:px-12 lg:px-28 max-w-[90rem] mx-auto'>
            <ShortenLink
                id="userInput"
                name="userInput"
                value={userInput}
                handleChange={handleChange}
                handleSubmit={getShortenUrl}
              />
          </div>
        </section>

{/*API response and copy links */}
          {showLinks &&
          <section className='bg-gray-100'>
              
            <div className='max-w-[90rem] mx-auto flex flex-col justify-center items-center md:px-12 lg:px-28 px-6 pb-8'>
              {allTinyUrls.map((item, index) => (
              <div key={index} className='w-full flex flex-col lg:flex-row items-center lg:justify-between lg:gap-x-20 my-2 bg-white p-4 lg:px-6 rounded-lg'>
                {/*link provided by the user */}
                <a 
                  href={item.largeLink} 
                  className='w-full text-sm border-b lg:border-none lg:lg:pb-0 pb-2'>
                    {item.largeLink} 
                </a>
                
                <div className='w-full lg:w-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-6'>
                   {/*shortened link */}
                  <a 
                    href={item.newLink} 
                    className='text-primaryCyan mt-3 lg:mt-0 text-base'>
                      {item.newLink} 
                  </a>

                 {/*button for copy */}
                  <CopyToClipboard onCopy={() => onCopy(index)} text={allTinyUrls[index].newLink}>
                    <button
                      key={index}
                      className={`${index == selected ? 'bg-primaryDarkViolet' : 'bg-primaryCyan hover:bg-cyan-200'} mt-3 lg:mt-0 text-white w-full px-6 py-2 rounded-md`}>
                      {index == selected ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              ))}
            </div>
          </section>}

{/*Advanced Statistics section */}
          <section className='text-center md:pt-8 lg:pt-16 px-6 bg-gray-100'>
            <div className='md:max-w-[30rem] mx-auto'>
              <h2 className='primaryDarkViolet text-3xl font-bold mb-3'>Advanced Statistics</h2>
              <p className='text-neutralGrayishViolet pb-6'>
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
              </p>
            </div>
          </section>

{/*Cards section */}
          <section className='bg-gray-100 '>
            <div className='max-w-[90rem] mx-auto py-10 md:px-20 lg:py-20 lg:px-28 lg:flex lg:justify-between'>
              <Card  />
            </div>
          </section>

{/*Boost your links section */}
        <section className='bg-primaryDarkViolet h-72 lg:h-64 flex flex-col items-center justify-center 
          bg-[url("/images/bg-boost-mobile.svg")] lg:bg-[url("/images/bg-boost-desktop.svg")] bg-cover bg-no-repeat bg-right'>
            <div className='max-w-[90rem] mx-auto'>
              <h4 className='text-white font-bold text-2xl lg:text-3xl mb-5 lg:mb-8'>Boost your links today</h4>
              <div className='max-w-[15rem] mx-auto'>
                <Button 
                  buttonText="Get Started" 
                  borderStyle='rounded'
                  variant='widest'
                />
              </div>
            </div>
        </section>

      </main>
      <Footer />
      
    </>
  )
}

export default App
