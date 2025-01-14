import React from 'react'
import UserHero from '../../components/UserHero'
import Category from '../../components/Category'
import Products from '../Products'

function Home() {
  return (
    <div>
        <UserHero/>
        <Category/>
        <Products/>
    </div>
  )
}

export default Home