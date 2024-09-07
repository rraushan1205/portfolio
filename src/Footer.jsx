import React from 'react'
import media from "../img/media.png";

export default function Footer() {
  return (
    <>
     <hr className="w-full h-[2px] bg-gray border-0 flex mt-[100px]" />
        <div className="lg:mx-[171px] mx-5 py-[32px]">
          <div className="flex justify-between">
            <div>
              <span className="text-white"> Raushan</span> &nbsp;{" "}
              <span className="text-gray">rraushan1205</span>
            </div>
            <div className="text-white">Media</div>
          </div>
          <div className="flex justify-between">
            <div className="text-white text-wrap">
              
              Web designer and front-end developer
            </div>
            <div className="flex shrink-0">
              <img src={media} alt=""  className='h-fit'/>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 text-gray mb-0">
            © Copyright 2024. Made by Raushan
          </div>
        </div> 
    </>
  )
}
