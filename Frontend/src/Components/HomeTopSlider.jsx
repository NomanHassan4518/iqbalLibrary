import React, { useState , useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
 
const HomeTopSlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(3);
  const numberOfItems = 5

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex(prevIndex => (prevIndex + 1) % numberOfItems);
    }, 3000); // Auto scroll interval in milliseconds

    return () => clearInterval(interval); // Cleanup function to clear the interval on unmount
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of cards based on the viewport width
      if (window.innerWidth >= 1200) {
        setNumberOfCards(3);
      } else if (window.innerWidth >= 768) {
        setNumberOfCards(2);
      } else {
        setNumberOfCards(1);
      }
    };

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chevronWidth = 10;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={10}
        infiniteLoop={true}
        interval={3000}
        // leftChevron={<button>{'<'}</button>}
        // rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgZstTBwtt237yB1cTudAJ6d57mgMjv0qHM-kilSSMYNPIQuI" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Quran Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2uV-Rnyqo_wNpIYDi9j5qk0H6TzfAoe8CA&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Hadith Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa1yTQh48ZhWOxfAqvTsHVxySMtMAlVMj8w&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>History Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxpsRcC9ixllUOUc5se8YwYYMebv77dQr9g&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Hajj & Umrah</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2Qoc3FaMF_7LSY_UCjwb94ntoUI5vv-XBg&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Iqbal Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZS-_OUfT3kfvMEWuHvrVujTb7Yr_zXEklgFXXcteMRXLER6EyWWOlPWMgEWc5S6nnaU&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Novels Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVftPJt4Tp48wRGfZTjlTx2gheuCpL4Vf9HA&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>News Section</span>
                </div>
      </ItemsCarousel>
    </div>
  );
};

export default HomeTopSlider