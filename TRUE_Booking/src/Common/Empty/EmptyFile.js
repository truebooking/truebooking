/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./EmptyFile.css"

const EmptyFile = () => {
  return (
    <div className="fullscreen-image-container">
      <img
        src="https://example.com/image.jpg"
        alt="Full screen image"
        className="fullscreen-image"
      />
    </div>
  )
}

export default EmptyFile
