import React from 'react'
import TopBar from './TopBar';
import MainNavigation from './MainNavigation';

const Header = () => {
  return (
    <header className="shadow-md">
      <TopBar />
      <MainNavigation />
    </header>
  )
}

export default Header