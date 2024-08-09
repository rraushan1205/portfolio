import pfp from "../img/figma-1.png";
import html from "../img/html.png";
import abtme from "../img/abtme.png";
import mail from "../img/mail.png";
import media from "../img/media.png";
import './index.css'
function App() {
  return (
    <>
      <div className="bg-[#282C33] font-fira">
        <nav className="w-[1024px] flex justify-between ml-[171px] bg-[#282C33] h-[61px]">
          <span className="block font-bold text-white pt-6 pl-2 bottom-0">Raushan</span>
          <div className="gap-10 mx-32 flex items-end mb-2 text-[#ABB2BF]">
            <div className=""><span className="text-[#C778DD]">#</span>Home</div>
            <div><span className="text-[#C778DD]">#</span>works</div>
            <div><span className="text-[#C778DD]">#</span>about-me</div>
            <div><span className="text-[#C778DD]">#</span>contacts</div>
            <div className="bg-[#282C33]"><select className="bg-transparent" name="lang" id="lang">
              <option value="EN">EN</option>
              <option value="HI">HI</option>
              <option value="SP">SP</option>
              <option value="AEN">AEN</option>
            </select></div>
          </div>
        </nav>
        <div className="grid grid-cols-2 mx-[171px] mt-[62px]">
          <div className="">
            <div className="flex">
              <div className="mt-[74px] text-[32px] text-white"><span className="text-[#C778DD]"> Web designer</span> and <span className="text-[#C778DD]"> front-end developer</span></div></div>
            <div className="text-[16px] text-[#ABB2BF] mt-[32px] leading-6">crafts responsive websites where technologies meet creativity</div>
            <div className="flex items-center justify-center text-white text-[16px] w-[148px] h-[37px] border-[1px] border-[#C778DD] mt-[24px]">Contact Me !!</div>
          </div>
          <div className="w-[469px] h-[386px]">
            <img src={pfp} alt="" />
          </div>
        </div>
        <div className="mt-[112px] mx-[326px] text-white border-[1px] border-[#ABB2BF] text-[24px] pb-[16px] styled-div">With great power comes great responsibility</div>
        <div className="ml-[876px] mr-[326px] text-white border-[1px] border-[#ABB2BF] text-[24px] py-[8px]">- Dr. Who</div>
        <div className="flex mt-[47px] mx-[171px] text-white text-[32px]"><span className="text-[#C778DD]">#</span>
          <div>projects</div>
          <div className="flex justify-center items-center">
            <hr className="w-[511px] h-[2px] bg-[#C778DD] border-0 flex  mx-[10px]" />
          </div>
          <div className="text-[16px] mt-[5px] ml-[200px]">view all &#8594;</div>
        </div>
        <div className="ml-[171px] text-white mt-[48px] flex gap-10" >
          <div className="border-2 border-[#ABB2BF]">
            <img src={html} alt="" className="w-[330.58px] h-[210px]" />
            <div className="border-y-2 border-[#ABB2BF] px-3 text-[#ABB2BF]">HTML</div>
            <div className="py-2 px-5 text-[24px]">project title</div>
            <div className="text-[#ABB2BF] px-5">function</div>
            <button className="mx-5 my-4 rounded-sm px-2 py-1 text-[#ABB2BF] ring-2 ring-[#C778DD] min-w-fit">active link</button>
            {/* buttons */}
          </div>
          <div className="border-2 border-[#ABB2BF]">
            <img src={html} alt="" className="w-[330.58px] h-[210px]" />
            <div className="border-y-2 border-[#ABB2BF] px-3 text-[#ABB2BF]">HTML</div>
            <div className="py-2 px-5 text-[24px]">project title</div>
            <div className="text-[#ABB2BF] px-5">function</div>
            <button className="mx-5 my-4 rounded-sm px-2 py-1 text-[#ABB2BF] ring-2 ring-[#C778DD] min-w-fit">active link</button>
            {/* buttons */}
          </div>
          <div className="border-2 border-[#ABB2BF]">
            <img src={html} alt="" className="w-[330.58px] h-[210px]" />
            <div className="border-y-2 border-[#ABB2BF] px-3 text-[#ABB2BF]">HTML</div>
            <div className="py-2 px-5 text-[24px]">project title</div>
            <div className="text-[#ABB2BF] px-5">function</div>
            <button className="mx-5 my-4 rounded-sm px-2 py-1 text-[#ABB2BF] ring-2 ring-[#C778DD] min-w-fit">active link</button>
            {/* buttons */}
          </div>
        </div>
        <div className="flex mt-[47px] mx-[171px] text-white text-[32px]"><span className="text-[#C778DD]">#</span>
          <div>Skillls</div>
          <div className="flex justify-center items-center">
            <hr className="w-[511px] h-[2px] bg-[#C778DD] border-0 flex  mx-[10px]" />
          </div>
          {/* <div className="text-[16px] mt-[5px] ml-[200px]">view all &#8594;</div> */}
        </div>
        <div className="flex mx-[171px] justify-end gap-10 ">
          <div className="text-white mt-[50px] border-2 border-[#ABB2BF] h-fit">
            <div className="">Language Known</div>
            <div className="border-t-2 border-[#ABB2BF] text-[#ABB2BF] px-1">
              <div><span>Python</span>&nbsp;
                <span>C/C++</span>&nbsp;
                <span>Java</span>
              </div>
            </div>
          </div>
          <div className="text-white mt-[50px] border-2 border-[#ABB2BF] h-fit">
            <div className="">Database</div>
            <div className="border-t-2 border-[#ABB2BF] text-[#ABB2BF] px-1">
              <span>Mysql</span>&nbsp;
              <span>MpngoDb</span>
            </div>
          </div>
          <div>
            <div className="text-white mt-[50px] border-2 border-[#ABB2BF] h-fit">
              <div className="">Framework</div>
              <div className="border-t-2 border-[#ABB2BF] text-[#ABB2BF] px-1">
                <span>Reactjs</span>&nbsp;
                <span>Springboot</span>&nbsp; <br />
                <span>Django</span>&nbsp;
                <span>Nodejs</span>
              </div>
            </div>
            <div className="text-white mt-[50px] border-2 border-[#ABB2BF]">
              <div className="">Framework</div>
              <div className="border-t-2 border-[#ABB2BF] text-[#ABB2BF] px-1">
                <span>Reactjs</span>&nbsp;
                <span>Springboot</span>&nbsp; <br />
                <span>Django</span>&nbsp;
                <span>Nodejs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[47px] mx-[171px] text-white text-[32px]"><span className="text-[#C778DD]">#</span>
          <div>about-me</div>
          <div className="flex justify-center items-center">
            <hr className="w-[326px] h-[2px] bg-[#C778DD] border-0 flex  mx-[10px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 mx-[171px]">
          <div className=" text-[#ABB2BF]">
            <br />Hello, i’m Elias! <br /><br />

            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br /><br />

            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks. <br />
            <button className="mx-0 my-4 rounded-sm px-4 py-1 text-[#ABB2BF] ring-2 ring-[#C778DD]">Read more &#8594;</button>
          </div>
          <div className="">
            <img src={abtme} alt="" className="border-b-2 border-[#C778DD] mx-[170px] w-[343px] h-[490px]" />
          </div>

        </div>
        <div className="flex mt-[47px] mx-[171px] text-white text-[32px]"><span className="text-[#C778DD]">#</span>
          <div>contacts</div>
          <div className="flex justify-center items-center">
            <hr className="w-[127px] h-[2px] bg-[#C778DD] border-0 flex  mx-[10px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 mx-[171px]">
          <div className=" text-[#ABB2BF]">
            <br /><br /><br />I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
          </div>
          <div className=" text-[#ABB2BF] flex justify-center items-center ">
            <div className="border-2 border-[#ABB2BF] w-fit h-fit px-2 py-2 ml-[60px] mt-[100px]">
              <div className="text-white font-semibold text-base">message me here</div>
              <div className="flex my-2"><img src={mail} alt="" />&nbsp; raushanraj1205@gmail.com</div>
            </div>

          </div>
        </div>
        <hr className="w-full h-[2px] bg-[#ABB2BF] border-0 flex" />
        <div className="mx-[171px] py-[32px]">
          <div className="flex justify-between">
            <div><span className="text-white"> Raushan</span> &nbsp; <span className="text-[#ABB2BF]">rraushan1205</span></div>
            <div className="text-white">Media</div>
          </div>
          <div className="flex justify-between">
            <div className="text-white"> Web designer and front-end developer</div>
            <div className="flex">
              <img src={media} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;