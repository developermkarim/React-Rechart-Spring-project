import LineCharts from './Components/Charts/LineCharts';
import './App.css';
import SpecialChart from './Components/Axios/SpecialChart';
// import { LineChart } from 'recharts';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({ to: { opacity: 1 },
     from: { opacity: 0 } ,
     reset: true,
     reverse: flip,
     delay: 200,
     onRest: () => set(!flip)
    })

  // Number counting spring
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <animated.h1 style={props}>Hellow Mahmodul karim.
      Welcome to you Rachart and axios website</animated.h1>

      <animated.h1>{number.to(n => n.toFixed(2))}</animated.h1>
    <LineCharts></LineCharts>
    <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
