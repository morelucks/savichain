import bgImage from "../assets/SaviChain.png"
import bgImage2 from "../assets/image 7.png"
import Pointer from "../assets/Group.png"
import WhyUs from "../components/components/HomeComponents/WhyUs"
import HowItWorks from "../components/components/HomeComponents/HowItWorks"
const LandingPage = () => {
  return (
    <div className="md:px-36 pt-10">
        <div className="h-screen">
        <div className="md:w-[60%]">
            <h2 className="font-semibold text-5xl leading-10 font-wix">Save Smarter, Together or Individually.</h2>
            <p className="text-lg leading-6 mt-3 w-[80%] font-montserrat">Empower your financial journey with savings plans that work for you, whether you're saving solo or as part of a group.</p>
        </div>

        {/* image section */}
        <div>
             <div className="relative">
                <div className=" md:h-72">
                    <img src={bgImage} alt="bground image" className="object-fill w-full h-full"/>
                </div>

                <div className="absolute left-[30%] bottom-0 bg-transparent w-96 h-80">
                    <img src={bgImage2} alt="bground image" className="object-fill w-full h-full"/>
                </div>

             </div>
        </div>

        <div className="flex flex-row items-center">
            <button className="rounded-full bg-blue-900 text-white font-wix py-4 px-5">
            Connect your wallet
            </button>
            <button className="rounded-full bg-white text-blue-900 font-wix py-2 px-5 flex flex-row items-center border border-blue-900 ml-4">
            Learn more
            <div  className=" ml-2 bg-blue-900 p-3 rounded-full text-center flex items-center "> 
            <img src={Pointer} alt="" className="object-cover  text-white w-2 h-2"/>
            </div>
            
            </button>
        </div>
        </div>
        <WhyUs/>
        {/* <HowItWorks/> */}
    </div>
  )
}

export default LandingPage
