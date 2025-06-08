import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-full  flex flex-wrap bg-red-200 gap overflow-x-hidden overflow-y-auto">
        <h1 className="text-gray-500 w-[2%] h-6 mt-[2%] ml-[48%]">Welcome</h1>
        <img
          className="w-[80%] h-[60%] ml-[9%] mt-[10px]"
          src="https://cdn.shopify.com/s/files/1/0070/7032/articles/how-to-write-an-about-us-wip1_0c84e275-f0f9-45c3-9f2f-e5843ad0f3d6.png?v=1743376078&originalWidth=1848&originalHeight=782&width=1800"
          alt=""
        />
        <p className=" bg-red-200 w-[60%] ml-[20%] mt-3">Welcome to my website, your one-stop destination for everything you love—right at your fingertips. Born from a passion for quality, style, and convenience, our mission is simple: to bring you a curated selection of products that inspire joy, simplify life, and elevate everyday experiences. Whether you're shopping for the latest fashion, innovative tech, home essentials, beauty must-haves, or unique gifts, we offer a wide range of handpicked items to suit every taste and lifestyle.

We believe that online shopping should be more than just convenient—it should be exciting, personal, and trustworthy. That’s why we go the extra mile to ensure our collections are not only trend-forward but also backed by top-tier quality and customer satisfaction. With fast, reliable shipping, secure payment options, and a customer support team that truly cares, we’re here to make your shopping experience smooth and enjoyable from start to finish.

At [Your Store Name], we’re not just selling products—we’re building a community. A place where value meets style, where innovation meets comfort, and where every purchase feels like a win. Join thousands of happy customers who trust us to deliver excellence every time they click “add to cart.”

Thank you for choosing us—we’re thrilled to be part of your journey.</p>
      </div>
    </>
  );
};

export default About;
