import React from "react";
import {Helmet} from "react-helmet";
import DefaultLayout from "../layouts";
import "./generic.css";

const Contact = () => {
  let text = `We are Limbocafe, a company which aims to deliver excellent quality coffee. We import and roast our coffee here in greece.
  After a certain threshold we also offer accounting, legal and insurance services.`
  return(
    <DefaultLayout dockNavigation={false}>
      <Helmet>
        <title>Limbocafe - About</title>
        <meta name="description" content="Limbocafe contact information" />
      </Helmet>

      <div className="small-container">
        <h1>About us</h1>
        {text}
      </div>
    </DefaultLayout>
  )
}

export default Contact