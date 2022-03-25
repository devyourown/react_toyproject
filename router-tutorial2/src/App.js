import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import WithRouterSample from './WithRouterSample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/profile/:username' element={<Profile/>}/>
      <Route path="/profiles/*" element={<Profiles/>}/>
      <Route path='/history' element={<WithRouterSample/>}/>
    </Routes>
    </div>
  );
};

export default App;
