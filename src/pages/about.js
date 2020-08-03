import React from "react";
import {Helmet} from "react-helmet";
import DefaultLayout from "../layouts";
import "./generic.css";

const Contact = () => {
  let text = `We are Limbocafe, a company which aims to deliver excellent quality coffee. We import and roast our coffee here in greece.
  After a certain threshold we also offer accounting, legal and insurance services.`
  text = `Είμαστε η Limbocafe, μια εταιρεία που στοχεύει την παραγωγή καφέ άριστης ποιότητας. Εισάγουμε και καβουρδίζουμε τον καφέ εδώ
  στην Ελλάδα. Μετά απο ένα όριο προσφέρουμε λογιστικές, νομικές και ασφαλιστηκές υπηρεσίες.`
  return(
    <DefaultLayout dockNavigation={false}>
      <Helmet>
        <title>Limbocafe - Σχετικά</title>
        <meta name="description" content="Limbocafe στοιχεία επικοινωνίας" />
      </Helmet>

      <div className="small-container">
        <h1>Σχετικά με εμάς</h1>
        {text}
      </div>
    </DefaultLayout>
  )
}

export default Contact