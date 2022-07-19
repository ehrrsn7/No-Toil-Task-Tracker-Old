import React from "react"

export default function Example() {
   React.useEffect(() => {
      document.title = "Example"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="example">
      <p> Example Content </p>
      <p> </p>
      <p>"Hello"</p>
      <p> "there"</p>
      <p> "general"</p>
      <p> "grevious"</p>
      <p> "idek"</p>
      <p> "lol"</p>
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