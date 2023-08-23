import { useState, useEffect, useRef } from "react";

function Gallery({ images, isVisible }) {

  const [selectedImage, setSelectedImage] = useState("");
  const selectedImageRef = useRef(selectedImage);
  const selectedImageIndex = images.indexOf(selectedImage);

  const handleChangeImage = (urlString) => {
    selectedImageRef.current = urlString;
    setSelectedImage(urlString)
  };

  // Handles clicking outside of the popup to close it
  const clickAnywhereToClose = (e) => {
    if (selectedImageRef && e.target.id === "popup") {
      handleChangeImage("");
    }
  };

  // Handles switching between prev/next image if popup is open
  const switchImage = (e) => {
    if (selectedImageRef.current) {
      const refIndex = images.indexOf(selectedImageRef.current);
      if (e.code === "ArrowLeft" && refIndex > 0) {
        handleChangeImage(images[refIndex - 1])
      }
      else if (e.code === "ArrowRight" && refIndex < images.length - 2) {
        handleChangeImage(images[refIndex + 1])
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", clickAnywhereToClose);
    document.addEventListener("keyup", switchImage);
  }, []);

  return (
    <div>

      <div className="row">
        <div className="gallery" style={{display: isVisible ? "block" : "none"}}>
          {images.map((img, i) => {
            return(
              <div 
                className="thumbnail" 
                key={i}
                onClick={() => handleChangeImage(img)} 
                style={{backgroundImage: `url('${img}')`}}>
                <div className="thumbnail-overlay"/>
              </div>
            )
          })}
        </div>
      </div>
    
      <div 
        className="overlay" 
        style={{display: selectedImage ? "block" : "none"}}
        onClick={() => handleChangeImage("")}/>

      <div id="popup" className="popup" style={{display: selectedImage ? "flex" : "none"}}>

        <div className="popup-content-container">
          <div className="control close" onClick={() => handleChangeImage("")}>
            <i className="bi bi-x"/>
          </div>
          <div className="popup-content">
            <div 
              className={`control prev ${selectedImageIndex > 0 ? "" : "hidden"}`} 
              onClick={() => handleChangeImage(images[selectedImageIndex - 1])}>
                <i className="bi bi-arrow-left-square-fill"/>
            </div>
            <div className="img-container">
              <img src={selectedImage} alt=""/>
            </div>
            <div 
              className={`control next ${selectedImageIndex < images.length - 2 ? "" : "hidden"}`} 
              onClick={() => handleChangeImage(images[selectedImageIndex + 1])}>
              <i className="bi bi-arrow-right-square-fill"/>
            </div>
          </div>
        </div>

      </div>

    </div>
        
  );
}

export default Gallery;
