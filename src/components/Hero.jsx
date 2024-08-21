import React from 'react';
import banner from '../../public/banner/bannerimg/b320edd7-65e3-4297-9591-adcf2a3fe55c1709191612262-DESKTOP-MENS--BANNER-----8.jpg';
import discountbanner from "../../public/banner/bannerimg/da2ec458-c892-4d67-8558-2c16368d80dd1709191696010-FLAT-400-Off-on-1st-Purchase-Strip-----5.jpg"
import coupons from "../../public/banner/bannerimg/7f305074-ff06-4951-9794-1c34333656a01709191564322-COUPONS-CORNER-----5.jpg"
import couponsDiscount1 from '../../public/banner/bannerimg/1d662365-2b22-49fc-b5ff-e37e24a136081709191017933-MYNTRA200-----7.jpg'
import couponsDiscount2 from '../../public/banner/bannerimg/b3dbb935-67af-4262-9ae3-3b61c1e89dcb1709191327030-MYNTRA100-----6.jpg'
import knockOut from '../../public/banner/bannerimg/f15c73a7-d1ab-43e8-83c7-e128f5791c761709190632097-App-Install-Banner-----5.jpg'
import Home from './Home';
import Homeitem from '../Homeitem';
import { useSelector } from 'react-redux';
const Hero = () => {
    const items = useSelector(store=>store.items)
    console.log(items)
    return (
        <div>
            <img src={banner} alt="" />
            <img src={discountbanner} alt="" />
            <div>
                <img src={coupons} alt="" />
            </div>
            <div className='flex w-[100%] h-full '>
                <img src={couponsDiscount1} alt="" className='w-[50%]'/>
                <img src={couponsDiscount2} alt="" className='w-[50%]'/>

            </div>
            <Homeitem item={items[0]}/>
            <div>
                <img src={knockOut} alt="" />
            </div>
        </div>
    );
};

export default Hero;