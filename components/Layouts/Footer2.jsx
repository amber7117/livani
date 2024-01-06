import Link from "next/link";
import React from 'react'

const Footer = () => {
  	let currentYear = new Date().getFullYear();
	return (
 
    <> 
    <div className='flex flex-col items-start justify-around w-full p-20 bg-gray-50 h-1/2 md:flex-row'>
      <div className='p-5'>
        <ul>
            <p className='pb-6 text-3xl font-bold text-gray-800'>
                Stream <span className='text-blue-600'>line</span>
            </p>
            <div className='flex gap-6 pb-5'>
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
				<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
				<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
				<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
        </ul>
      </div>
      <div className="p-5">
        <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Product</p>
            <li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
                Stocks
            </li>
            <li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
                Futures & Options
            </li>
            <li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
                Mutual Funds
            </li>
            <li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
                Fixed deposits
            </li>
        </ul>
      </div>
      <div className="p-5">
					<ul>
						<p className="pb-4 text-2xl font-bold text-gray-800">Company</p>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							About
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Products
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Pricing
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Careers
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Press & Media
						</li>
					</ul>
		</div>
        <div className="p-5">
					<ul>
						<p className="pb-4 text-2xl font-bold text-gray-800">Support</p>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Contact
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Support Portals
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							List Of Charges
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Downloads & Resources
						</li>
						<li className="pb-2 font-semibold text-gray-500 cursor-pointer text-md hover:text-blue-600">
							Videos
						</li>
					</ul>
				</div>
    </div>
    <div className="flex flex-col items-center justify-center p-5 text-center bg-gray-50">
				<h1 className="font-semibold text-gray-800 ">
					© 2019-2021 All rights reserved | Build with ❤ by{" "}
					© 2021-2022 All rights reserved | Build with ❤ by{" "}
					<span className="font-semibold cursor-pointer hover:text-blue-600">
						streamline{" "}
					</span>
                    </h1>
                    
    </div>       
    </>
  )
}
 
	);
};

export default Footer;
