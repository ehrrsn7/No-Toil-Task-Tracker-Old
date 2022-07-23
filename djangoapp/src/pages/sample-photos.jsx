import React from "react"
import { NoToilFilterView } from "../helperFunctions/noToilImages"

const imageURL = "https://lh3.googleusercontent.com/LEw-p1QVCqtau5fOfNKyD-IQWjxUh0ExySVQB8qTdY2lSYqTiOfe8wpm327MqQVSNfZLtdcqZdDwlwuKy2aweyS7aIMkDb6PGdTZ5aP55K1T0LyZ2cQCp5jENP9X3ktmNELxtEgRFpn2TQKwRxgadPjMobvOvdWvDA3guh9a8BkwDObYqua82KJ7m43jbB3hLaWJHylo7qRoUJYm4eQqDEi0CtvcVRQBY_FlNo1Ymaoj1kXB2-DSzJqOOu4i2iO4fQC4LEqJlf_knpBfkjOhyLHMvExUfCRO6IABuDBzYqBp4VFhMNEbS08avumemx9r5fapNLE9WYVqcm7PqupT5R_ZV_M-j9CnmmjM-jJZBgGqMwKIh3wTJ-MhKmysI2i4fqahedEefmnIzr46DrEjk6YI5jdhRZBXdhqED1oBu7EPFuSPNcw0si0OaZoWI4j8akah1N0FiyDNMfsAG5w2Z-iHBZ4K3K87E8Bcxg9titAFQQ2mjYl0qdIzn3-xJrdRnt16cdFyoiLG03nnUCuiReLxJxlvWddG22UtCppkEFc0mcImS6GhE_9AnNjVwESY0ybud4N7oYNLfCcfOCpna3LTYKzwY7HrDwJGDFmcVsP_povERKDysVhaiHKLIPl52KPIsFcFrkUMOjULxUbvFEYXYxkmnhbPyLUJgTWg19Ot6BUWPXQDwPv6QPmcAW0674VC3Tgo3p4EBf71QFFazA3ekFg6MJRkzxRFNbMAk70NJNKfEHNIEzoUMshRiIhovGwPI3Hduou3SA64_eW1DVhg_KGVUf8V=w1920-h1080-no?authuser=0"

export default function SamplePhotos() {
   React.useEffect(() => {
      document.title = "Sample Photos"
      document.querySelector("#headerTitle").innerText = document.title
      document.querySelector("title").textContent = document.title
   }, [])
   
   return <div id="SamplePhotos">
      {NoToilFilterView("3007")}
      {NoToilFilterView("300-07")}

   </div>
}