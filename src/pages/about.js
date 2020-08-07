import React from "react";
import {Helmet} from "react-helmet";
import FadeImage from '../components/FadeImage/FadeImage';
import DefaultLayout from "../layouts";
import Mulos from '../images/mulos-min.png';
import Roaster from '../images/roaster-min.png';
import "./generic.css";

const Contact = () => {
  let text = `We are Limbocafe ΑΕ, a company which aims to deliver excellent quality coffee. We import and roast our coffee here in greece.
  After a certain threshold we also offer accounting, legal and insurance services.`
  text = `Είμαστε η Limbocafe ΑΕ, μια εταιρεία που στοχεύει την παραγωγή καφέ άριστης ποιότητας. Εισάγουμε και καβουρδίζουμε τον καφέ εδώ
  στην Ελλάδα.`
  return(
    <DefaultLayout dockNavigation={false}>
      <Helmet>
        <title>Limbocafe - Σχετικά</title>
        <meta name="description" content="Limbocafe στοιχεία επικοινωνίας" />
      </Helmet>

      <div className="small-container">
        <h1>Σχετικά με εμάς</h1>
        <p style={{marginTop:0}}>
          Είμαστε η Limbocafe ΑΕ, μια εταιρεία που στοχεύει την παραγωγή καφέ άριστης ποιότητας. 
          Εισάγουμε και καβουρδίζουμε τον καφέ εδώ στην Ελλάδα.
          Μπορούμε να σας παρέχουμε τον απαραίτητο εξοπλισμό που χρειάζεστε! 
          Επιπλέον, μετά τη διέλευση συνδρομής τριών μηνών και αγορά ορισμένων κιλών οποιασδήποτε ποιότητας καφέ, 
          προσφέρουμε τα μπόνους των δωρεάν παρακάτω υπηρεσιών:
        </p>
        <p style={{margin:0}}>100 παραγγελίες</p>
        <ul>
          <li>Λογιστικές υπηρεσίες</li>
        </ul>
        <p style={{margin:0}}>200 παραγγελίες</p>
        <ul>
          <li>Νομικές υπηρεσίες</li>
        </ul>
        <p style={{margin:0}}>300 παραγγελίες</p>
        <ul>
          <li>Ασφαλιστηκές υπηρεσίες</li>
        </ul>
        <p>Θα χαρούμε πολύ να συνεργαστούμε μαζί σας!</p>
        <h1>Η παραγωγή μας</h1>
        <p style={{marginTop:0}}>Με τις εξής μηχανές επεξεργαζόμαστε τον καφέ μας ώστε να παρέχουμε 
        την καλύτερη δυνατή ποιότητα καφέ στους πελάτες μας.</p>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexFlow:'column'}}>
          <FadeImage src={Mulos} style={{width:'100%',objectFit:'cover'}}/>
          <p style={{color:'#737373',marginBottom:25,marginTop:15}}>Μύλος για άλεση του καφέ</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexFlow:'column'}}>
          <FadeImage src={Roaster} style={{width:'100%',objectFit:'cover'}}/>
          <p style={{color:'#737373',marginBottom:25,marginTop:15}}>Καβουρδιστήρι</p>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Contact