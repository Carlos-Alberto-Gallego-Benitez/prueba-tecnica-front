import React, { useState } from "react";


export default function Load({ visible } : any) {
    const state = 'block';
  return (
    <>
      <div className="div-load" style={{ display: visible ? state && "flex" : "none" }}></div>
    </>
  );
}