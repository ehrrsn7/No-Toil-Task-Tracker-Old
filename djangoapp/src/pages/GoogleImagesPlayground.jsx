import React         from "react"
import axios         from "axios"
import ImageGallery  from "react-image-gallery"

const ImagesGallery = () => {

   React.useEffect(() => {
      axios.get(
         "https://photos.app.goo.gl/vE9Hd3AFTX9mL6sx6"
      ).then(response => {
         console.log(response)
         // response.data.forEach(element => {
         //    console.log(element)
         // })
      }).catch(error => console.warn(error))
   }, [])

   return <div>Images Gallery</div>
}

export default function GoogleImagesPlayground() {
   return <div>
      GoogleImagesPlayground

      <ImagesGallery />
   </div>
}