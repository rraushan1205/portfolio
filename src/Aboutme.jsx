import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import abtme from "../img/abtme.png";
import dot from "../img/dot.png";
import dot2 from "../img/dot2.png";
import dot3 from "../img/dot3.png";
import logozigi from "../img/logozigi.png";
function Aboutme() {
  return (
    <>
      <div className="bg-background font-fira">
        <Navbar/>
        <div className="flex mt-[47px] text-white text-[24px] lg:text-[32px] mx-10 lg:mx-[171px]">
          <span className="text-primary">/</span>
          <div>About-me</div>
        </div> 
        <div className="mx-10 lg:mx-[171px] text-white text-[14px]">
          <div className="my-5">Who am i?</div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="mt-10">
            Hello, i’m Elias!
            <br />
            <br />

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
<br />
<br />
Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </div>
            <div className="flex justify-center">
              <img
                src={dot}
                alt=""
                className="flex relative lg:left-[280px] left-[125px] h-fit top-10"
              />
              <img
                src={abtme}
                alt=""
                className="border-b-2 border-primary ml-10 lg:ml-[170px] lg:w-[280px] lg:h-[450px] w-[200px] h-300px lg:mt-0 mt-10"
              />
              <img
                src={dot3}
                alt=""
                className="flex relative h-fit bottom-[-250px] left-[-100px]"
              />
              <img
                src={dot}
                alt=""
                className="relative h-fit bottom-[-370px] left-[40px] xl:flex hidden"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:mx-[171px] ml-10 mt-[47px]  text-white text-[24px] lg:text-[32px]">
            <span className="text-primary">#</span>
            <div>Skillls</div>
            <div className="flex justify-center items-center">
              <hr className="lg:w-[511px] h-[2px] bg-primary border-0 flex  mx-[10px] " />
            </div>
            {/* <div className="text-[16px] mt-[5px] ml-[200px]">view all &#8594;</div> */}
          </div>
          <div className="lg:mx-[171px] ml-10 flex lg:gap-10 gap-5 flex-wrap md:flex-row flex-col w-fit">
            <div className="text-white lg:mt-[50px] mt-[20px] border-2 border-gray h-fit">
              <div className="">Language Known</div>
              <div className="border-t-2 border-gray text-gray px-1">
                <div>
                  <span>Python</span>&nbsp;
                  <span>C/C++</span>&nbsp;
                  <span>Java</span>
                </div>
              </div>
            </div>
            <div className=" text-white lg:mt-[50px] mt-[20px] border-2 border-gray h-fit">
              <div className="">Database</div>
              <div className="border-t-2 border-gray text-gray px-1">
                <span>Mysql</span>&nbsp;
                <span>MpngoDb</span>
              </div>
            </div>
            <div className="lg:flex gap-10">
              <div className=" text-white lg:mt-[50px] mt-[20px] border-2 border-gray h-fit">
                <div className="">Framework</div>
                <div className="border-t-2 border-gray text-gray px-1">
                  <span>Reactjs</span>&nbsp;
                  <span>Springboot</span>&nbsp; <br />
                  <span>Django</span>&nbsp;
                  <span>Nodejs</span>
                </div>
              </div>
              <div className="text-white lg:mt-[50px] mt-[20px] border-2 border-gray">
                <div className="">Framework</div>
                <div className="border-t-2 border-gray text-gray px-1">
                  <span>Reactjs</span>&nbsp;
                  <span>Springboot</span>&nbsp; <br />
                  <span>Django</span>&nbsp;
                  <span>Nodejs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white flex lg:mx-[171px] ml-10 mt-[47px]">
          <span className="text-primary">#</span>
            <div>my-fun-facts</div>
            <div className="flex justify-center items-center">
              <hr className="lg:w-[511px] h-[2px] bg-primary border-0 flex  mx-[10px] " />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 lg:mx-[171px] mt-8 mx-10">
            <div className="lg:col-span-2 flex flex-wrap gap-3 h-fit">
            <div className="border-2 w-fit border-gray text-gray px-1">I like Coffee more than tea</div>
            <div className="border-2 w-fit border-gray text-gray px-1">Street food is better than restaurant foods</div>
            <div className="border-2 w-fit border-gray text-gray px-1">commits are meant to be comment of your PR</div>
            <div className="border-2 w-fit border-gray text-gray px-1">Github is not the garbage bag of your project</div>
            <div className="border-2 w-fit border-gray text-gray px-1">127.0.0.1 is myth irl</div>
            </div>
            <div className="ml-20 lg:ml-32 mt-10 lg:mt-0">
                <img src={dot2} alt="" /><img src={logozigi} alt="" className="ml-20"/>
            </div>
          </div>
        <Footer/>
      </div>
    </>
  )
}

export default Aboutme
