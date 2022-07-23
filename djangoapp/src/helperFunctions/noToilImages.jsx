import React from "react"
import data from "../data/data"

// DRIVE SHARE LINK --> DRIVE ID
export function driveShareLinkToDriveID(sharelink) {
   if (sharelink === false) return sharelink
   // ex: "https://drive.google.com/file/d/1-Nocx_ZltvLvafxROaQ2k__je-s6EYAz/view?usp=sharing"
   // to "1-Nocx_ZltvLvafxROaQ2k__je-s6EYAz"
   const startSubstring = "https://drive.google.com/file/d/"
   const stopSubstring  = "/view"
   return sharelink.split(startSubstring).pop().split(stopSubstring)[0]
}

// Image <-- Google Drive [ID] Link
export function GoogleDriveImage(fileId, maxwidth=300) {
   if (fileId === false) return <img alt="error: nothing found when trying to find google drive image for the no toil filter" />
   const baseurl = "https://drive.google.com/uc?id="
   // console.log(`${baseurl}${fileId}`)
   return <img src={`${baseurl}${fileId}`} width={maxwidth}/>
}

// ex: https://notoil.com/wp-content/uploads/2016/05/3205-1024x1024.jpg
// Image <-- No Toil wp_content[part-number]
export function NoToilFilterImage(partNumber, width=300, yearprefix="2016", monthprefix="05", dimensionsuffix="1024x1024") {
   const imgURL = `https://notoil.com/wp-content/uploads/${yearprefix}/${monthprefix}/${partNumber}-${dimensionsuffix}.jpg`
   return <img src={imgURL} width={width} alt="no toil filter image" />
}

// <a [notoil.com/product]> <-- Part Number
export function NoToilPartURL(partNumber) {
   // https://notoil.com/product/pre-oiled-air-filter-3002/
   let productType = "pre-oiled-air-filter" // default

   // https://notoil.com/product/standard-air-filter-190-09/
   if (String(partNumber).includes('-'))
      productType = "standard-air-filter"

      // https://notoil.com/product/extreme-condition-filter-x300-02/
   if (String(partNumber).toLowerCase().includes('x'))
      productType = "extreme-condition-filter"

   const productURL = `https://notoil.com/product/${productType}-${partNumber}/`

   return <div>
      <a href={productURL} target="_blank">
         <h1 className="bold">{partNumber}</h1>
      </a>
   </div>
}

// All in one
export function NoToilFilterView(props) {
   return <div id="NoToilFilterView" style={{border: "1px solid gray", margin: "1em", padding: "1em", maxWidth: "500px"}}>
      {NoToilPartURL(props.partNumber)}
      {NoToilFilterImage(props.partNumber)}
      <p>Special Spraying Instructions: {data.filterBible[props.partNumber]?.instructions.spray}</p>
      <p>Special Stamping Instructions: {data.filterBible[props.partNumber]?.instructions.stamp}</p>
      <p>Special Checking Instructions: {data.filterBible[props.partNumber]?.instructions.check}</p>
      <p>Actual Size: {data.filterBible.get[props.partNumber]?.actualSize.toString()}</p>
   </div>
}
