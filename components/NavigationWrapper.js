import {useState, useEffect} from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationWrapper({children}) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScroll = () => {
        setScroll(window.scrollY);
      }

      const updateScrollDirection = () => {
          const scrollY = window.pageYOffset;
          const direction = scrollY > lastScrollY ? "down" : "up";
          if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 1 ) {
            setScrollDirection(direction);
          }
          lastScrollY = scrollY > 0 ? scrollY : 0;
      };

      window.addEventListener("scroll", updateScrollDirection);
      window.addEventListener("scroll", updateScroll);
      return () => { window.removeEventListener("scroll", updateScrollDirection); } // clean up
  }, [scrollDirection]); // run when scroll direction changes

  return(
    <div className={classNames(scrollDirection == "up" && scroll > 10 ? 'fixed z-10 w-full' : '', '')}>
      {children}
    </div>
  )
}

// export default function NavigationWrapper({children}) {
//   const [scroll, setScroll] = useState(false);
  
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScroll(window.scrollY > 10);
//     });
//   }, []);

//   return(
//     <div className={classNames(scroll ? 'fixed z-10 w-full' : '', '')}>
//       {children}
//     </div>
//   )
// }