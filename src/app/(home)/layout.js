import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className={"mt-[70px]"}>
      {children}
      <Footer/>
      </div>
    </div>
  )
}

export default layout
