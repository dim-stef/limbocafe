import React from "react"
import DefaultLayout from "../layouts"

const PageNotFound = () => (
  <DefaultLayout dockNavigation={false}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexFlow:'column'}}>
      <h1 style={{marginTop:100}}>404</h1>
      <h2>Page not found</h2>
    </div>
  </DefaultLayout>
)

export default PageNotFound
