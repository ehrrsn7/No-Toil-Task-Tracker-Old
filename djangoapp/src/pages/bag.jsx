import React from "react"

export default function Bag() {
   React.useEffect(() => {
      document.title = "Bag"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="Bag">
   
      bag - no count (just done button)

      barcode scan to remove items from the build list one by one
      anomalous scans (for example, rebags)

      <a href="https://solveforum.com/forums/threads/solved-using-usb-barcode-scanner-in-django.252306/">
      https://solveforum.com/forums/threads/solved-using-usb-barcode-scanner-in-django.252306/
      </a>

   </div>
}