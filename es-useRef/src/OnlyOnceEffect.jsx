import { useRef, useEffect } from "react";
const OnlyOnceEffect = () => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      console.log('Montato per la prima volta!');
      hasMounted.current = true;
    }
  }, []);

  return <div>Effetto eseguito una volta</div>;
}

export default OnlyOnceEffect