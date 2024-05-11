
// import Slider from '../components';

import ApproachCard from '../components/ApproachCard';

import icon_1 from '../assets/icons/challenge_icon.svg';

import icon_2 from '../assets/icons/approach_icon.svg';

import icon_3 from '../assets/icons/risk_icon.svg';

import arrow_left from '../assets/icons/arrow_left.svg';

import arrow_right from '../assets/icons/arrow_right.svg';

import { useState} from 'react';


const cards = [

    {
        icon: icon_1,
        title: "Addressing Challenges",
        body: "Aerthmetal was established to tackle mining investment challenges head-on. We strategically identify high-potential assets in their earliest stages, often with minimal exploration. we provide the  initial capital investment and technical support crucial for completing bankable feasibility studies."
    },

    {
        icon: icon_2,
        title: "Unlocking Full Potential",
        body: "Aerthmetal aims to unlock the full potential of undervalued and underdeveloped mining assets in Nigeria, contributing to the sustainable growth of the sector. Catalyze large-scale mining projects in Nigeria creating socio-economic development and improving the lives."
    },

    {
        icon: icon_3,
        title: "Mitigating Risks",
        body: "Recognizing the inherent risks in mineral exploration and development, we commit to strategic business decisions and a focus on viable exploration targets. Environmental and community consideration are at the forefront of our operations to ensure responsible and sustainable practices."
    },

]
  

const Approach = () => {

    // // Function to move the slider automatically
    // const moveAutomatically = () => {
    //     // Move right first
    //     moveSlider('right');
    // };

    // useEffect(() => {
    //     // Start moving the slider automatically when the component mounts
    //     const intervalId = setInterval(() => {
    //         moveAutomatically();
    //         // After a delay, move back to the left
    //         setTimeout(() => {
    //             moveSlider('left');
    //         }, 8000); // Change the delay as needed, here it's set to 3 seconds (3000 milliseconds)
    //     }, 6000); // Change the interval as needed, here it's set to 6 seconds (6000 milliseconds)
        
    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(intervalId);
    // }, []); // Run this effect only once when the component mounts



    const [position, setPosition] = useState(0); // Initial position of the slider
    // const totalCards = cards.length;

    // const [canMoveLeft, setCanMoveLeft] = useState(true); // State to track if left button can be clicked
    // const [canMoveRight, setCanMoveRight] = useState(true); // State to track if right button can be clicked


// Move Slider function
  const moveSlider = (direction) => {
  const newPosition = direction === 'left' ? position - 1 : position + 1;
    

    setPosition(newPosition);


    // if (direction === 'left') {
    //     setCanMoveLeft(false);
    //   } else {
    //         setCanMoveRight(false); // Disable right button
    //       }

    }
    


    return (

    <div className="py-20 h-[700px]">

        <div className="flex justify-between items-center px-20" data-aos = "fade-down" data-aos-duration = "1000">

            <div className="flex flex-col mb-1">
                <h1 className="font-bold text-[32px] text-primary-blue w-[500px] mt-12">
                Our Approach
                </h1>

                <p className="w-[700px] mt-5 text-[17px] leading-[30px]">
                At Aerthmetal, we believe that responsible and sustainable practices are essential to our success and the well-being of our stakeholders.
                </p>
            </div>

        </div>

        
        <div className=" w-screen h-[600px] flex flex-col padding bg-white">

            <div className="w-full overflow-x-hidden">
                <div className="flex gap-8 px-1 py-5 transition-transform duration-700" style={{ transform: `translateX(-${position * 25}%)` }}>
                        {cards.map((card, index) => (
                            <div className="w-2/5 flex-shrink-0" key={index}>
                            <ApproachCard
                                key ={index}
                                iconImg = {card.icon}
                                title = {card.title}
                                body = {card.body}
                            />
                            </div>
                        ))} 
                </div>
            </div>        
    

                <div className='flex flex-row gap-10 justify-between'>        
                <div className='mt-3 flex gap-8'>
                    <button
                        onClick={() => moveSlider('left')}  
                        // disabled={position === 0 || !canMoveLeft}
                    >
                    <img
                        src={arrow_left}
                        height={45} width={45}
                        className="bg-white p-3 rounded-full drop-shadow-lg"
                    />
                    </button>


                    <button
                      onClick={() => moveSlider('right')}  
                    //   disabled={position === totalCards - 1 || !canMoveRight}
                    >
                    <img
                        src={arrow_right}
                        height={45} width={45}
                        className="bg-white p-3 rounded-full drop-shadow-lg"
                    />
                    </button>
                </div>

                {/* <div className=''>
    
                            <div className="w-full">
                            <div className="overflow-hidden w-full">
                            <div className="flex transition-transform ease-in-out duration-300">
                            
                                <div className="w-64 flex-shrink-0 flex items-center justify-center bg-gray-200">
                                Slide 1
                                </div>
                                <div className="w-64 flex-shrink-0 flex items-center justify-center bg-gray-200">
                                Slide 2
                                </div>
                                <div className="w-64 flex-shrink-0 flex items-center justify-center bg-gray-200">
                                Slide 3
                                </div>
                            </div>
                            </div>
                        
                            
                        </div>
 
                </div> */}


                </div>
                    

        </div>
    </div>


        
    



         
        

  )
}

export default Approach