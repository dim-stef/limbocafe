import React from "react";
import {Helmet} from "react-helmet";
import DefaultLayout from "../layouts";
import "./generic.css";

const Contact = () => (
  <DefaultLayout dockNavigation={false}>
    <Helmet>
      <title>Limbocafe - Contact</title>
      <meta name="description" content="Limbocafe contact information" />
    </Helmet>

    <div className="small-container">
      <h1>Contact information</h1>
      <div><b>Phone number 1: </b><span>2109921631</span></div>
      <div><b>Phone number 2: </b><span>6970179506</span></div>
      <div><b>Email: </b><span>info@limbocafe.gr</span></div>

    </div>
  </DefaultLayout>
)

export default Contact
