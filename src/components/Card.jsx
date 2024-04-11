

function Card() {

    return (
        <>
            <div className="bg-white relative px-4 lg:px-6 pb-6 pt-16 mt-6 mb-20 lg:mt-0 lg:mb-20 flex flex-col items-center lg:items-start lg:text-left  text-center mx-6 rounded-lg">
                <div className="absolute top-[-2.5rem] bg-primaryDarkViolet rounded-full h-20 w-20 grid place-content-center">
                <img 
                    src="/images/icon-brand-recognition.svg"
                    className="h-10 w-10"
                    alt="" 
                    />
                </div>
                <h3 className="font-bold text-2xl mb-4">Brand Recognition </h3>
                <p className="text-neutralGrayishViolet">
                Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                </p>
            </div>

            <div className="bg-white relative px-4 lg:px-6 pb-6 pt-16 my-20 lg:mb-10 lg:mt-10 flex flex-col items-center lg:items-start lg:text-left text-center mx-6 rounded-lg">
            <div className="lg:block hidden absolute h-2 w-12 left-[-3rem] top-[40%] bg-primaryCyan" />
                <div className="absolute top-[-5rem] h-10 w-2 bg-primaryCyan block lg:hidden" />
                    <div className="absolute top-[-2.5rem] bg-primaryDarkViolet rounded-full h-20 w-20 grid place-content-center">
                    <img 
                        src="/images/icon-detailed-records.svg"
                        className="h-10 w-10"
                        alt="" 
                        />
                    </div>
                <h3 className="font-bold text-2xl mb-4">Detailed Records </h3>
                <p className="text-neutralGrayishViolet">
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                </p>
            </div>

            <div className="bg-white relative px-4 lg:px-6 pb-6 pt-16 mt-20 lg:mt-20 lg:mb-0 mb-12 flex flex-col items-center lg:items-start lg:text-left  text-center mx-6 rounded-lg">
            <div className="lg:block hidden absolute h-2 w-12 left-[-3rem] top-[40%] bg-primaryCyan" />
                <div className="absolute top-[-5rem] h-12 w-2 bg-primaryCyan block lg:hidden" />
                    <div className="absolute top-[-2.5rem] bg-primaryDarkViolet rounded-full h-20 w-20 grid place-content-center">
                    <img 
                        src="/images/icon-fully-customizable.svg"
                        className="h-10 w-10"
                        alt="" 
                        />
                    </div>
                <h3 className="font-bold text-2xl mb-4">Fully Customizable </h3>
                <p className="text-neutralGrayishViolet">
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </p>
            </div>
        </>
    )
}

export default Card
