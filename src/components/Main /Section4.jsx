import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/main.css';
// import required modules
import { Navigation } from 'swiper/modules';

import bemor1 from '../../assets/images/bemor.jpg'
import bemor2 from '../../assets/images/bemor2.jpg'
import bemor3 from '../../assets/images/bemor3.webp'
import operatsiya from '../../assets/images/laser.png'
import Accordion from './Accardion';


const Section4 = () => {
  return (
    <>
        <section className='container mt-[100px]'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-[24px] text-slate-700 font-bold'>Шарҳлар</h1>
                <p className='text-[40px] text-blue-950 '>Беморларимиздан шарҳлар</p>
            </div>
            <div className='mt-[80px] siwipers'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='flex items-center justify-around comments'>
                            <div className='ml-[60px] comment_title'>
                                <h1 className='text-blue-950 max-w-[500px] text-[20px] text-start comment_title'>Белимда Даҳшатли оғриқ бор эди ҳатто туришим ҳам қийин эди бунга менга соғлом ҳаёт килиникаси духтирлари катта ёрдам курсатди,бу килиникага мен уз миннатдорчилигимни билдираман..</h1>
                                <p className='text-blue-600 text-[16px] text-start mt-5 comment_text'>Бемор</p>
                            </div>
                            <div className='mr-[60px] comment_img_div'>
                                <img className='hover:shadow-2xl cursor-pointer max-w-[600px] h-[600px] comment_img' src={bemor1} alt="bemor" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex items-center justify-around comments'>
                            <div className='ml-[60px] comment_title'>
                                <h1 className='text-blue-950 max-w-[500px] text-[20px] text-start comment_title'>Мени ортиқчи вазин, нафас қисиши оёқларимда оғриқ ташвишга соларди. операциядан мамнунман, -  дейди жарроҳлик бўлимидаги беморимиз.</h1>
                                <p className='text-blue-600 text-[16px] text-start mt-5 comment_text'>Бемор</p>
                            </div>
                            <div className='mr-[60px] comment_img_div'>
                                <img className='hover:shadow-2xl cursor-pointer max-w-[600px] h-[600px] comment_img' src={bemor2} alt="bemor2" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex items-center justify-around comments'>
                            <div className='ml-[60px] comment_title'>
                                <h1 className='text-blue-950 max-w-[500px] text-[20px] text-start comment_title'>Кўзларим деярли кўрмай қолганди, мен сиз билан операция бўлдимва операция натижаларидан тўлиқ қониқдим, - дейди офтаматалогия бўлими беморимиз.</h1>
                                <p className='text-blue-600 text-[16px] text-start mt-5 comment_text'>Бемор</p>
                            </div>
                            <div className='mr-[60px] comment_img_div'>
                                <img className='hover:shadow-2xl cursor-pointer max-w-[600px] h-[600px] comment_img' src={bemor3} alt="bemor3" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <section className='container mt-[150px] questin'>
            <div className='flex justify-around questin'>
                <div> 
                    <img className='max-w-[650px] h-[600px] rounded-2xl questin_img' src={operatsiya} alt="operatsiya" />
                </div>
                <div className='mt-[30px] w-[100%] max-w-[620px] '>
                    <h1 className='text-slate-700 text-[18px] questin_title'>FAQS</h1>
                    <p className='text-blue-950 text-[38px]  mt-4 max-w-[500px] questin_title'>Доимо кўп сўраладиган саволлар</p>
                    <Accordion/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section4