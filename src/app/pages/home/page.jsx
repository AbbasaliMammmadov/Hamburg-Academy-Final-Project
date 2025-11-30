"use client";
import { FaPlayCircle } from "react-icons/fa";
import Header from "@/app/Components/header/Header";
import React, { useState } from "react";
import "./home.css";
import Image from "next/image";
import FatBurningCard from "@/app/Components/row/FatBurningCard";
import ScheduleSection from "@/app/Components/Schedule/ScheduleSection";
import { Dumbbell, Bike, ArrowUpRight } from "lucide-react";


const HomePage = () => {
  const [modal, setModal] = useState(false);

  return (
    <main>
      <section className="heroSection ">
        <div className="container flex justify-between w-[90%] m-auto">
          <div className="hero-left w-[40%]">
            <h2 className="text-yellow-300 text-4xl font-medium">STRENGTH </h2>
            <h2 className="text-yellow-300 text-4xl font-medium">UNLEASHED </h2>
            <h4 className="text-8xl font-black heroText">LIMITLESS </h4>
            <h4 className="text-8xl font-black heroText">POTENTIAL</h4>
            <form action="" className="">
              <label htmlFor="">Leave Your Email For Free Updates</label>
              <div className="flex flex-col my-3 relative justify-center w-[70%]">
                <input
                  className="p-[20px]  bg-black text-white rounded-[8px] border-white border-1 p-[5px]"
                  type="text"
                  required
                  placeholder="Enter your email "
                />
                <button className="hover:bg-white hover:text-black bg-yellow-400 absolute right-[10px] text-white p-[10px] rounded-2xl cursor-pointer">
                  Free Updates
                </button>
              </div>
            </form>
          </div>
          <div className="hero-right w-[30%] flex flex-col justify-between ">
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lectus ac sed purus
              ultrices diam eu scelerisque. Eu ipsum curabitur ultricies id vel
              lacus pellentesque tristique. Nunc amet semper turpis auctor
              rhoncus amet aliquet commodo.
            </p>

            <div className="rightHeroBg relative  z-30">
              <FaPlayCircle
                onClick={() => setModal(true)}
                className="text-3xl cursor-pointer text-amber-300 w-[20px] h-[20px] rounded-[50%]"
              />
            </div>
            {modal && (
              <div className="absolute top-0 left-0 w-full h-full bg-transparent bg-opacity-80 flex items-center justify-center z-50">
                <div className="relative w-[80%] h-[400px]">
                  <iframe
                    className="w-full h-[500px] rounded-lg"
                    src="https://www.youtube.com/embed/Yko3GMseY40"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => setModal(false)}
                    className="absolute -top-8 right-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="center-bg absolute w-[100%] h-[100%] flex items-end justify-center">
          <Image
            src="/heroimage.png"
            alt="FitNation Logo"
            width={500}
            height={500}
            className="w-[600px] object-cover h-[600px] "
            priority
          />
        </div>
      </section>
      <section className="about-card-section">
        <div className="about-cards ">
          <div className="left-card relative w-full h-[700px] overflow-hidden rounded-xl">
            <div className="overflow-hidden h-full w-full">
              <Image
                src="/boxing.png"
                alt="Boxing hero"
                fill
                className="object-cover cursor-pointer rounded-[10px] transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
            <div className="left-box">
              <div className="absolute cursor-pointer bottom-20 left-9 text-white">
                <p className="text-base tracking-widest mb-2">BOXING CLASSES</p>
                <h2 className="hover:text-[#D7FB00] text-5xl font-bold leading-tight">
                  Studio of
                </h2>
                <h2 className="hover:text-[#D7FB00] text-5xl font-bold leading-tight">
                  Martial Arts
                </h2>
              </div>
            </div>
          </div>
          <div className="right-card w-[100%] flex flex-col">
            <div className="flex flex-col gap-6">
              <div className="relative bg-amber-300 z-20 mt-9 h-[27rem] w-full overflow-hidden rounded-xl">
                <Image
                  src="/fitgirlimage.png"
                  alt="Intensive Body Evolution"
                  fill
                  className="object-cover cursor-pointer rounded-[10px] transition-transform duration-500 hover:scale-110"
                />
                {/* <div className=" inset-0 bg-black/20" /> */}
                <div className="absolute left-8 bottom-8 text-white">
                  <p className="uppercase text-black text-sm tracking-widest mb-2">
                    Special Deal
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-black hover:text-[#FAFAFA]">
                    Intensive Body Evolution <br /> for the Summer
                  </h2>
                  <button className="mt-4 bg-white text-black font-semibold px-5 py-2 rounded-md cursor-pointer hover:bg-[#D7FB00] transition-colors duration-300">
                    Get Now
                  </button>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="relative flex-1 bg-amber-300 z-20 rounded-2xl overflow-hidden w-full">
                  <Image
                    src="/rungirl.png"
                    alt="Outdoor Races and Marathons"
                    fill
                    className="object-cover cursor-pointer rounded-[10px] transition-transform duration-500 hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-black/30" /> */}
                  <div className="absolute left-6 bottom-6 text-white">
                    <p className="uppercase text-xs tracking-widest mb-1">
                      For Runners
                    </p>
                    <h3 className="text-lg hover:text-[#D7FB00] font-bold leading-tight">
                      Outdoor <br /> Races and Marathons
                    </h3>
                  </div>
                </div>
                {/* Правый бокс */}
                <div className="relative flex-1 h-[240px] rounded-2xl overflow-hidden">
                  <Image
                    src="/pressboy.png"
                    alt="Ripped Press in Just 2 Months"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-black/30" /> */}
                  <div className="absolute left-6 bottom-6 text-white">
                    <p className="uppercase text-xs tracking-widest mb-1">
                      Iron and Strong
                    </p>
                    <h3 className="hover:text-[#D7FB00] font-bold leading-tight">
                      Ripped Press <br /> in Just 2 Months
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0F0F0F] py-16 px-4 text-center cursor-pointer">
          <p className="text-[#FAF7F2] text-2xl md:text-3xl font-bold leading-snug max-w-[900px] mx-auto">
            <span className="text-[#D7FB00] transition-colors duration-300">
              A balanced diet
            </span>{" "}
            rich in fruits, vegetables, whole grains, and lean proteins provides
            essential nutrients
          </p>
        </div>
      </section>
      <FatBurningCard />
      <FatBurningCard />
      <FatBurningCard />
      <FatBurningCard />
    <section className="AboutSection bg-[#0F0F0F] py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-3/5">
          <div className="relative w-full sm:w-3/5 h-[450px] rounded-2xl overflow-hidden">
            <Image src="/benefits-1.png" alt="Man lifting weights" fill className="object-cover" />
          </div>
          <div className="relative w-full sm:w-3/5 h-[450px] rounded-2xl overflow-hidden">
            <Image src="/benefits-2.png" alt="Trainer helping woman" fill className="object-cover" />
          </div>
        </div>

        <div className="lg:w-1/2 text-white space-y-6">
          <p className="uppercase text-[#D7FB00] tracking-widest font-semibold">
            Our Benefits
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transform your mindset, <br /> transform your body
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Lectus ac sed purus ultrices diam eu scelerisque.
            Eu ipsum curabitur ultricies id vel lacus pellentesque tristique. Nunc amet semper turpis
            auctor rhoncus amet aliquet commodo.
          </p>

          <div className="flex flex-wrap gap-8 pt-6">
            <div>
              <h3 className="text-[#D7FB00] text-4xl font-bold">165+</h3>
              <p className="font-medium">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-[#D7FB00] text-4xl font-bold">98%</h3>
              <p className="font-medium">Efficiency</p>
            </div>
            <div>
              <h3 className="text-[#D7FB00] text-4xl font-bold">12+</h3>
              <p className="font-medium">Years Experience</p>
            </div>
          </div>

          <button className="bg-[#D7FB00] text-black font-semibold px-8 py-3 cursor-pointer rounded-md hover:bg-[#FAFAFA] transition-colors">
            MORE ABOUT
          </button>
        </div>
      </div>
    </section>
    <ScheduleSection />
    <section className="relative w-full bg-black text-white overflow-hidden py-20">

      {/* Фон-картинка справа */}
      <div className="absolute inset-0">
        <Image
          src="/inner-banner.png"   // <-- помести сюда свое фото (как на скрине)
          alt="Membership Background"
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* Тёмный градиент слева, чтобы текст лучше читался */}
      <div className="absolute inset-0 from-black/80 via-black/60 to-transparent" />

      <div className="relative z-10 w-[90%] mx-auto max-w-7xl">

        {/* Маленький текст */}
        <p className="uppercase tracking-[0.25em] text-sm text-[#D7FB00] mb-4">
          JOIN YOUR LOCAL !
        </p>

        {/* Заголовок */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#D7FB00]">
          WIZE MEMBERSHP <br /> GREAT VALUE EVERYDAY
        </h2>

        {/* Подзаголовок */}
        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Sed euismod justo volutpat malesuada.
          Purus in pellentesque a convallis morbi convallis.
        </p>

        {/* Иконки-фичи — три колонки */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">

          {/* 1 */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full">
              <Dumbbell size={32} className="text-black" />
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed euismod justo volutpat malesuada.
            </p>
          </div>

          {/* 2 */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full">
              <Bike size={32} className="text-black" />
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed euismod justo volutpat malesuada.
            </p>
          </div>

          {/* 3 */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight size={32} className="text-black" />
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed euismod justo volutpat malesuada.
            </p>
          </div>

        </div>
      </div>
    </section>
    </main>
  );
};

export default HomePage;
