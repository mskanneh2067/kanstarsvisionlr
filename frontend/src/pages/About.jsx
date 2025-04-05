import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/title/Title";
import NewsletterBox from "../components/newsletterbox/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
       <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quisquam, illum, quaerat aliquam, laborum fuga minus neque tenetur aut consequatur in iusto dignissimos veniam nobis quos modi dolorem. Veritatis omnis maiores libero ea, unde mollitia possimus doloremque cum molestias.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quisquam, illum, quaerat aliquam, laborum fuga minus neque tenetur aut consequatur in iusto dignissimos veniam nobis quos modi dolorem. Veritatis omnis maiores libero ea, unde mollitia possimus doloremque cum molestias.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quisquam, illum, quaerat aliquam, laborum fuga minus neque tenetur aut consequatur in iusto dignissimos veniam nobis quos modi dolorem. Veritatis omnis maiores libero ea, unde mollitia possimus doloremque cum molestias.
          </p>
          
        </div>
      </div>

      <div className="text-xl PY-4">
       <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div
          className="flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        "
        >
          <p className="text-xl font-bold">Expertise</p>
          <p>
         We are expert in what we do
          </p>
        </div>
        <div
          className="flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        "
        >
          <p className="text-xl font-bold">Efficient</p>
          <p>
          Time conscious
          </p>
        </div>
        <div
          className="flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        "
        >
          <p className="text-xl font-bold">Innovative</p>
          <p>
            We explore newer and better way to help our customers
          </p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default About;
