import React , {useEffect , useState} from 'react'

function useIdleHook() {
  
    // we will make thestate to keep the track of inactive or active 
    const [isIdle , setIsIdle] = useState(false);
    // we have listeners that will detect the movement of cursor on the screen 
    // if any of those listeners are being triggered then  user is in active state
    // if after certain pre-defined amt of tym if none of the event is being  triggered used is consider to be on inactive state 

    // we add the the listeners 
   useEffect(()=>{
       
      setUp();

  return(()=>{
      cleanUp();
  });
   });

    
}

export default useIdleHook