import Triangle from '../assets/image/triangle.png';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

function HomeFirstPage() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  const [isBouncing, setIsBouncing] = useState(false);

  const bounceAnimation = useSpring({
    transform: isBouncing ? 'translateY(-10px)' : 'translateY(0px)',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing((prevIsBouncing) => !prevIsBouncing);
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">       
      <section className="bg-center bg-no-repeat bg-[url('https://rare-gallery.com/resol/1920x1080/393412-pokemon-unite-moba-game-pokemon-4k-pc-wallpaper.jpg')] bg-neutral-700 bg-blend-multiply min-h-screen w-full">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-32 lg:py-64">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Carbon IT <br />l'entreprise qui vous accompagne</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Un réseaux riche de plus de 130 consultants IT, Digital et Métiers du numérique</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <button onClick={handleClick} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#00BB7E] focus:ring-4">
                      Voir nos consultants
                      <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
          </div>
          <div className="flex justify-center items-center absolute inset-x-0 bottom-0 w-28 h-14 rounded-t-full bg-[#00BB7E] text-white mx-auto">
            <div className="pt-5" onClick={handleClick}>
              <span className="text-2xl font-bold">
                <animated.img 
                  width="25" 
                  height="25"
                  src={Triangle}
                  style={{ ...bounceAnimation }}
                />
              </span>
            </div>
          </div>
      </section>
    </div>
  );
}

export { HomeFirstPage };