import React from 'react'
import { Fragment } from 'react'
import Hero2 from "../../../partials/Hero2"
import Navbar3 from "../../../partials/Navbar3";
import Sections from "../../../partials/Sections"

export default function index() {
  return (
    <Fragment>
     <div className="relative">
      <Navbar3 />
      <Hero2 />
      <Sections />
      </div> 
    </Fragment>
  )
}
