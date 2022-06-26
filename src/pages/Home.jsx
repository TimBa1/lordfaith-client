import React from 'react'
import { Announcement } from '../components/Announcement'
import { Announcement2 } from '../components/Announcment2'
import Categories from '../components/Categories'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Promotions from '../components/Promotions'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
      <div>
          <Announcement/>
          <Navbar />
          <Announcement2/>
          <Slider/>
          <Categories/>
          <Products/>
          <Promotions/>
          <Footer/>
    </div>
  )
}
