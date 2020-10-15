import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';


import useMouse from '@react-hook/mouse-position';

const Home = () => {
  const history = useHistory();
  const verticalMode = window.innerWidth>1000?true:false;
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })
  const mW: number = mouse.x?(mouse.x*100/window.innerWidth)-50:0;

  const moveMouse = {
    transform: 'translateX(' + -mW/2 + '%)'
  };

  return (
    <div className="homeContainer">
      <div className="links" ref={ref} style={verticalMode?moveMouse:{}} >
        <div className="link" onClick={() => (history.push('/photos'))}>PHOTOS</div>
        <div className="divider">{verticalMode?'-':''}</div>
        <div className="link" onClick={() => (history.push('/work'))}>WORK</div>
        <div className="divider">{verticalMode?'-':''}</div>
        <div className="link" onClick={() => (history.push('/contact'))}>CONTACT</div>
      </div>
    </div>
  )
}

export default Home;
