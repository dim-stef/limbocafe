import React from "react";
import {Helmet} from "react-helmet";
import DefaultLayout from "../layouts";
import "./generic.css";

function Faq(){
  return(
    <DefaultLayout dockNavigation={false}>
      <Helmet>
        <title>Limbocafe - FAQ</title>
        <meta name="description" content="Limbocafe συχνές ερωτήσεις" />
      </Helmet>
      <div className="small-container">
        <h1>Συχνές ερωτήσεις</h1>
        <p style={{marginBottom:0}}><b>Τα μεγαλύτερα πακέτα συμπεριλαμβανουν τα προηγούμενα?</b></p>
        <p>Βεβαίως, αν περάσετε το όριο των 300 κιλών θα έχετε πρόσβαση σε όλες τις υπηρεσίες μας (νομικές, λογιστικές, ασφαλιστικές).</p>
        <p style={{marginBottom:0}}><b>Υπάρχει όριο παραγγελιών?</b></p>
        <p>Όχι, δεχόμαστε παραγγελίες όλων των μεγεθών.</p>
        <p>Αν έχετε κάποια άλλη ερώτηση επικοινωνήστε μαζί μας στο info@limbocafe.gr</p>
      </div>
    </DefaultLayout>
  )
}

export default Faq;
