import { Spotlight } from "./Spotlight";


const Hero = () => {
  return ( 
    <div className="pb-20 pt-36">
      <div> 
        <Spotlight className="-top-40 -left-10 
         md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] 
        w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80  h-[80vh] w-
        [50vw]" fill="blue" />
      </div>
    
<div className="h-screen w-full flex items-center justify-center
 bg-white bg-grid-black/[0.2] dark:bg-black-100 
  *:dark:bg-grid-white/[0.3]"
   
>
	<div className="absolute pointer-events-none 
  inset-0 flex items-center justify-center
   bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
  </div>

  <div className="flex justify-center relative my-20
  z-10" >
    <div className='max-w-[89w] md:max-w-2x1
    lg:max-w-[60w] flex flex-c items-center
    justify-center'>
      <h2 className="uppercase tracking-widest
      text-xs text-center text-blue-100 max-w-80">
        Dynamic Web Magic with Next.js
      </h2>

    </div>


  </div>

	</div>

 );
};

export default Hero;
