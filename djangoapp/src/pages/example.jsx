import React                     from "react"
import { documentTitleSuffix }   from "../App"
import { BackToDashboardButton } from "../components/buttons"

export default function Example() {
   const title = "Example"

   React.useEffect(() => {
      document.title = title + documentTitleSuffix
      document.querySelector("#headerTitle").innerText = title
      document.querySelector("title").textContent = title
   }, [])
   
   return <div id={title}>
      <BackToDashboardButton />
      <p> Example Content </p>
      <p> </p>
      <p>"Hello"</p>
      <p> "there"</p>
      <p> "general"</p>
      <p> "grevious"</p>
      <p> "idek"</p>
      <p> "lol"</p>
      <p> </p>
      <img src="../images/lamppost.jpg" alt="lamppost" />
      <p>"Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> </p>
      <p>"Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> </p>
      <p>"Hello"</p>
      <p> "Hello"</p>
      <p>  "Hello"</p>
      <p>  "Hello"</p>
      <p>  "Hello"</p>
      <p>  "Hello"</p>
      <p>  </p>
      <p>"Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> </p>
      <p>"Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
      <p> </p>
      <p>"Hello"</p>
      <p> "Hello"</p>
      <p> "Hello"</p>
   </div>
}