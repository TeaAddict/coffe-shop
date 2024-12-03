import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#121212] text-white py-5 px-20 divide-y-2">
      <div className="flex flex-col items-center gap-2 mb-5">
        <h1 className="text-4xl font-semibold my-10">Our Location</h1>
        <p>Ji. Bangkringan No 19, RT.11/RW.2 Kota Surabaya, 60124</p>
        <div>
          <span className="font-bold">Customer Service</span>
          <span>+6282-2876-6862</span>
        </div>
        <div>
          <span className="font-bold">We Are Open from </span>
          <span>Sun - Mon 10 AM - 22 PM</span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-4">
            <FaInstagram />
            <PiTiktokLogo />
            <CiYoutube />
            <CiTwitter />
            <RiTelegram2Line />
          </div>

          <div className="flex gap-4 items-center">
            <p>Delivery Order</p>
            <div className="flex gap-4 max-w-[20rem]">
              <img
                src="src/assets/images/appStore.png"
                className="h-[3rem] w-full"
              />
              <img
                src="src/assets/images/googlePlay.webp"
                className="h-[3rem] w-full"
              />
            </div>
          </div>
        </div>
        <div className="text-[#605750] flex justify-between">
          <p>© 2023 IMAJI COFFEE, ALL rights reserved</p>
          <p>Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
