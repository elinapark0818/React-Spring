import React from 'react';
import  { useSpring, animated} from 'react-spring';

function App() {
  const fade = useSpring({
    to: {opacity: 1, backgroundColor: 'blue', fontSize: '5em'},
    from: {opacity: 0},
  })
  return <animated.div style={fade}>밍구밍구~후밍구</animated.div>
}

export default App;