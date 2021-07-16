import React, { useState, useEffect } from 'react'
import Home from './screens/home/index';
import ScrollToTop from './components/ScrollToTop'
import { toggle } from './utils/toggles';

function App() {
  const [isVisibleScrollToTop, setIsVisibleScrollToTop] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      setIsVisibleScrollToTop(toggle(200))
    })
  }, [])
  return (
    <div className="App">
      {isVisibleScrollToTop && <ScrollToTop />}
      <Home />
    </div>
  );
}

export default App;
