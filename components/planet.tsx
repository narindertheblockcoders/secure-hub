import React from 'react'

const planet = () => {
  return (
    <>
      <div className="space-container">
  {/* <!-- stars --> */}
  <div className="star star-1"></div>
  <div className="star star-2"></div>
  <div className="star star-3"></div>
  {/* <!-- clouds --> */}
  <div className="cloud-group-1">
    <div className="cloud cloud-1"></div>
    <div className="cloud cloud-2"></div>
    <div className="cloud cloud-3"></div>
    <div className="cloud cloud-4"></div>
    <div className="cloud cloud-5"></div>
    <div className="cloud cloud-6"></div>
  </div>
  <div className="cloud-group-2">
    <div className="cloud cloud-1"></div>
    <div className="cloud cloud-2"></div>
    <div className="cloud cloud-3"></div>
    <div className="cloud cloud-4"></div>
    <div className="cloud cloud-5"></div>
    <div className="cloud cloud-6"></div>
  </div>
  <div className="cloud-group-3">
    <div className="cloud cloud-1"></div>
    <div className="cloud cloud-2"></div>
    <div className="cloud cloud-3"></div>
    <div className="cloud cloud-4"></div>
    <div className="cloud cloud-5"></div>
    <div className="cloud cloud-6"></div>
  </div>
  {/* <!-- orbits --> */}
  <div className="orbit orbit-1"></div>
  <div className="orbit orbit-2"></div>
  <div className="orbit orbit-3"></div>
  <div className="orbit orbit-4"></div>
  <div className="orbit orbit-5"></div>
  <div className="orbit orbit-6"></div>
  {/* <!-- main planet --> */}
  <div className="ring-before"></div>
  <div className="ring-bigger-before"></div>
  <div className="planet"></div>
  <div className="ring-after"></div>
  <div className="ring-bigger-after"></div>
  {/* <!-- sub planet --> */}
  <div className="sub-planet"></div>
</div>

    </>
  )
}

export default planet
