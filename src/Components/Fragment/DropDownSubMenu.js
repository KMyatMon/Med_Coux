import React from "react";
import { Link } from "react-router-dom";
const DropDownSubMenu = () => {
  return (
    <div id="leftMenu">
      {/* <details style={{ fontSize: "12px" }}>
        <summary className="summary">Injection</summary>
        <Link to="/">Injection IV</Link>
        <Link to="/oral">Oral Product</Link>
      </details> */}
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Vitamin Supplement & Sleep Aids</summary>
        <Link to="/menSupplement">Men Supplement </Link>
        <Link to="/womenSupplement">Women Supplement</Link>
        <Link to="/kidandteen">Kid & Teen Supplement </Link>
        <Link to="/sleepaids">Sleep Aids</Link>
      </details>
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Pain & Headache</summary>
        <Link to="/headacheanddizziness">Headache & Dizziness </Link>
        <Link to="/generalpain">General Pain</Link>
        <Link to="/injuryandbonepain">Injury & Bone Pain </Link>
        <Link to="/softtissueandnervepain">Soft Tissue & Nerve Pain</Link>
        <Link to="/inflammation">Inflammation</Link>
      </details>
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Common Cold & Fever</summary>
        <Link to="/fever">Fever</Link>
        <Link to="/cough">Cough</Link>
        <Link to="/sneezing">Sneezing</Link> 
        <Link to="/sinuscongestion">Sinus Congestion</Link>
      </details>
      <Link to="/Eye_Ear_Nose&Throat">Eye, Ear, Nose & Throat </Link>      
      <Link to="/infection"> Infection </Link>
      <Link to="/injection&disease"> Injection & Disease </Link>
      <Link to="/instrument&access"> Instruments & Accessories </Link>
      <Link to="/Myanmed"> Myanmar Traditional Medicine </Link>
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Allergic & Skin Disease</summary>
        <Link to="/allergy">Allergic</Link>
        <Link to="/skindisease">Skin Disease</Link>
      </details>
    </div>
  );
};

export default DropDownSubMenu;
