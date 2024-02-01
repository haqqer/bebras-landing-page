/* eslint-disable @next/next/no-img-element */
'use client'
import Head from "next/head";
import React, { useState } from "react";

export default function Landing() {
  const [menuBar, setMenuBar] = useState(false)

  const testimonial: any = [
    {
      "testimonial": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis accusamus officiis. Aliquam ducimus nihil architecto! Id reiciendis dolorum consectetur iure commodi illum corporis quae nulla? Enim, cum magni. Esse.",
      "name": "Melinda",
      "occupation": "Student",
      "profileUrl": "",
    },
    {
      "testimonial": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis accusamus officiis. Aliquam ducimus nihil architecto! Id reiciendis dolorum consectetur iure commodi illum corporis quae nulla? Enim, cum magni. Esse.",
      "name": "Ahmad Waluyo",
      "occupation": "Programmer",
      "profileUrl": "",
    },
    {
      "testimonial": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis accusamus officiis. Aliquam ducimus nihil architecto! Id reiciendis dolorum consectetur iure commodi illum corporis quae nulla? Enim, cum magni. Esse.",
      "name": "Siti Yuliati",
      "occupation": "Student",
      "profileUrl": "",
    },
    {
      "testimonial": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis accusamus officiis. Aliquam ducimus nihil architecto! Id reiciendis dolorum consectetur iure commodi illum corporis quae nulla? Enim, cum magni. Esse.",
      "name": "Abdurrosyid",
      "occupation": "Student",
      "profileUrl": "",
    },
    {
      "testimonial": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis accusamus officiis. Aliquam ducimus nihil architecto! Id reiciendis dolorum consectetur iure commodi illum corporis quae nulla? Enim, cum magni. Esse.",
      "name": "Azis",
      "occupation": "Professional",
      "profileUrl": "",
    },
  ]

  return (
    <>
    <Head>
      <title>Bebras Indonesia</title>
    </Head>
      <div className="absolute -z-10 right-0 hidden lg:flex md:flex sm:hidden">
          <img src="/assets/BackgroundWebsite/home.png" alt="" />
      </div>
      <nav className="absolute top-0 left-0 right-0 mx-auto py-4 px-4 md:px-16 w-full">
        <div className="container items-center flex justify-between">
          <a href="/" className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400">
            <span className="lg:text-4xl md:text-3xl text-2xl font-bold text-blue-400">Bebras</span>
            <span className="lg:text-4xl md:text-3xl text-2xl font-bold text-red-500">Indonesia</span>
          </a>
          <a className="px-10" href="">
            <img className="" src="/assets/Images/logo.png" alt="" />
          </a>
          <div role="menubar" className={`
            flex flex-col gap-4 absolute right-0 left-0 top-16  shadow-md text-center p-4 sm:text-base text-lg items-center
            lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between sm:bg-white lg:bg-transparent
            ${menuBar ? "bg-white" : "hidden"}
          `}>
            <a href="/" className="py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Tentang Bebras</a>
            <a href="/" className="py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Gerakan Pandai</a>
            <a href="/" className="py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Kegiatan</a>
            <a href="/" className="py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Kontak</a>
          </div>
          <button className="hidden lg:flex gap-4 my-5 bg-blue-500 py-2 px-6 text-white rounded-3xl font-medium">
            <span>Download aplikasinya </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>          
          <button onClick={() => setMenuBar(!menuBar)} id="menu" className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex justify-end sm:flex sm:justify-end  md:hidden lg:hidden">
        <img src="/assets/BackgroundApp/1.png" alt="" />
      </div>                      
      <header className="mx-auto pt-4 md:pt-32 px-4 md:px-16">
        <div className="container lg:w-1/2 md:w-full sm:w-full">
          <p className="lg:text-6xl lg:leading-snug leading-snug text-5xl font-bold">
            Kembangkan ketrampilan berpikir si kecil
          </p>
          <p className="font-light text-2xl leading-9 py-5">
            Tingkatkan kompetensi sosial dan emosional si kecil dan siapkan ia untuk mengarungi dunia.
          </p>
          <button className="flex gap-4 my-5 bg-yellow-400 py-3 px-8 text-amber-700 rounded-3xl font-medium">
            <span>Download aplikasi Bebras Pandai</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <div className="font-light text-lg pt-20 flex flex-col gap-8">
            <p className="leading-7">&quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem reiciendis suscipit, komentar komentar, sebuah tanda &ldquo;</p>
            <div className="flex flex-row gap-4">
              <div>
                <img className="w-12 rounded-full" src="https://i.pravatar.cc/300" alt="" />
              </div>
              <div>
                <div className="text-base">Rwanda Melfor</div>
                <div className="text-sm">bebrasindonesia.com</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto pt-28 w-full relative flex justify-center">
        <div className="flex flex-col gap-6 text-center px-4 md:px-24 lg:w-2/3 w-full">
          <div className="text-lg text-amber-500 tracking-wide font-semibold">TENTANG BEBRAS</div>
          <div className="text-3xl md:text-6xl font-semibold">Didukung Oleh Google</div>
          <div className="text-lg font-light">Kegiatan yang dilaksanakan oleh Bebras Indonesia untuk mengajarkan Computational Thinking merupakan cabang dari organisasi Bebras International.</div>
        </div>
      </main>
      <div className="-mt-10 md:-mt-48">
        <img className="w-full" src="/assets/BackgroundWebsite/tentangBebras.png" alt="" />
      </div>
      {/* Computational Thinking */}
      <section className="w-full flex flex-col-reverse gap-10 lg:flex-row pt-16">
        <div className="">
          <img className="w-full md:w-[1200px]" src="/assets/BackgroundWebsite/computationalThinking.png" alt="" />
        </div>
        <div className="flex flex-col gap-6 px-10">
          <div className="text-lg text-amber-500 tracking-wide font-semibold">COMPUTATIONAL THINKING</div>
          <div className="text-3xl md:text-5xl font-semibold">Berpikir runut itu mudah</div>
          <div className="text-lg font-light">Kenalkan cara penyelesaian masalah secara komputasional kepada anak sedari dini agar ia terbiasa mencari solusi yang efektif dan efisien.</div>  
          <div className="grid grid-cols-2 gap-10 md:gap-5">
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <div className="font-bold text-lg">
                Identifikasi Masalah
              </div>              
              <div className="text-base font-light">
                Si kecil akan belaiar untuk menganalisis masalah besar untuk dipecahkan meniadi lebih kecil sehingga lebih mudah untuk diselesaikan.
              </div>              
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
              <div className="font-bold text-lg">
                Pengenalan Pola
              </div>
              <div className="text-base font-light">
                Si kecil akan belajar mengidentifikasi pola atau persamaan tertentu yang terdapat di suatu masalah.
              </div>               
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
              </svg>
              <div className="font-bold text-lg">
                Pemecahan Masalah
              </div>
              <div className="text-base font-light">
                Si kecil akan belajar untuk mengidentifikasi informasi dan mensortir relevansi informasi yang tersedia untuk memecahkan masalah yang disajikan.
              </div>              
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595m7.173 3.876a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199m-8.999-.65a.5.5 0 1 1-.276-.96A7.6 7.6 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.6 6.6 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/>
              </svg>
              <div className="font-bold text-lg">
                Identifikasi Masalah
              </div>              
              <div className="text-base font-light">
                Si kecil akan belaiar mengembangkan sistem, membuat daftar petuniuk dan langkah-langkah pemecahan masalah secara efektif dan efisien.
              </div>              
            </div>
          </div>        
        </div>
      </section>
      {/* Aplikasi Bebras Pandai */}
      <section className="w-full flex flex-col gap-10 lg:flex-row pt-16">
        <div className="flex flex-col gap-6 px-10">
          <div className="text-lg text-amber-500 tracking-wide font-semibold">APLIKASI BEBRAS PANDAI</div>
          <div className="text-3xl md:text-5xl font-semibold">Bukan sembarang game</div>
          <div className="text-lg font-light">Belajar tidak harus selalu menjadi momok yang menakutkan. Bebras menggunakan pendekatan baru berstandar internasional.</div>  
          <div className="grid grid-cols-2 gap-10 md:gap-5">
            <div className="flex flex-col gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              <div className="font-bold text-lg">
                Mudah untuk dicerna
              </div>              
              <div className="text-base font-light">
                Soal-soal di Bebras App dapat dijawab tapa perlu belajar informatika terlebih dahulu, namun tetap mengajarkan konsep tertentu dalam informatika dan computational thinking.
              </div>              
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>
              <div className="font-bold text-lg">
                Visual yang menarik
              </div>
              <div className="text-base font-light">
                Disajikan dalam bentuk uraian persoalan yang dilengkapi dengan gambar yang menarik, sehingga si kecil dapat lebih mudah memahami soal.
              </div>               
            </div>
            <div className="flex flex-col gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
              </svg>
              <div className="font-bold text-lg">
                Kompetisi Bebras
              </div>
              <div className="text-base font-light">
                Setiap tahun, Bebras App menggelar acara skala besar bernama Bebras Challenge dimana semua pengguna dapat berkompetisi dengan satu sama lain.
              </div>              
            </div>
            <div className="flex flex-col gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <div className="font-bold text-lg">
                Tantangan mingguan
              </div>              
              <div className="text-base font-light">
                Untuk membangkitkan semangat kompetisi, Bebras App menyajikan tantangan mingguan yang beragam dan tidak membosankan.
              </div>              
            </div>
          </div>        
        </div>
        <div className="">
          <img className="w-full md:w-[1200px]" src="/assets/BackgroundWebsite/aplikasiBebrasPandai.png" alt="" />
        </div>        
      </section>
      {/* Testimonial */}
      <section className="w-full bg-[url('/assets/BackgroundWebsite/testimonial.png')] p-16">
        <div className="py-5 flex flex-col gap-4">
          <div className="text-lg text-amber-500 tracking-wide">TESTIMONIAL</div>
          <div className="text-3xl md:text-5xl font-semibold text-neutral-50">Apa kata mereka</div>
          <div className="text-lg font-light text-neutral-50">Bebras Pandai telah digunakan oleh 20,0000+ pengguna dari penjuru Indonesia.</div>          
        </div>
        <div className="pt-16">
          <button className="flex gap-4 my-5 bg-yellow-400 py-3 px-8 text-amber-700 rounded-3xl font-medium">
            <span>Download aplikasi Bebras Pandai</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>        
        </div>
        <div className="pt-16 flex gap-12 overflow-x-scroll">
          {testimonial.map((e: any) => (
            <div key={e.name} className="flex-none w-full sm:w-/12 md:w-1/3">
              <div className="p-8 bg-white rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="text-purple-700 w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                <div className="pt-5 font-light">
                  {e.testimonial}
                </div>
                <div className="pt-5 flex flex-row gap-4">
                  <img src="https://i.pravatar.cc/300" className="w-12 h-12 rounded-3xl" alt="" />
                  <div className="flex flex-col">
                    <div>
                      <div className="text-base">{e.name}</div>
                      <div className="text-sm">{e.occupation}</div>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="mx-auto py-3 px-4 md:px-16 w-full">
        <div className="container items-center flex justify-between flex-col sm:flex-col lg:flex-row gap-2">
          <a href="/" className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400">
            <span className="lg:text-4xl md:text-3xl text-2xl font-bold text-blue-400">Bebras</span>
            <span className="lg:text-4xl md:text-3xl text-2xl font-bold text-red-500">Indonesia</span>
          </a>
          <a className="px-3" href="">
            <img className="w-10" src="/assets/Images/logo.png" alt="" />
          </a>
          <a className="px-3" href="">
            <div className="font-light text-sm">@ Copyright 2024</div>
          </a>
          <div role="footer-menu" className={`
            flex flex-row gap-4 text-center p-3 sm:text-base text-lg items-center
            lg:flex lg:flex-row lg:static lg:justify-between sm:bg-white lg:bg-transparentbg-white}
          `}>
            <a href="/" className="font-light py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Beranda</a>
            <a href="/" className="font-light py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Privacy</a>
            <a href="/" className="font-light py-1 px-3 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-500 transition-colors">Kontak</a>
          </div>
          <div role="footer-socmed" className={`
            flex flex-row gap-4 text-center p-3 sm:text-base text-lg items-center
            lg:flex lg:flex-row lg:static lg:justify-between sm:bg-white lg:bg-transparentbg-white}
          `}>
            <a href="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>              
            </a>
            <a href="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>              
            </a>
            <a href="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg>              
            </a>
            <a href="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a href="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
          </div>
          <div role="footer-app" className={`
            flex flex-row gap-4 text-center p-3 sm:text-base text-lg items-center
            lg:flex lg:flex-row lg:static lg:justify-between sm:bg-white lg:bg-transparentbg-white}
          `}>
            <a href="/" className="w-24">
              <img src="/assets/icon/AppStore.png" alt="" />
            </a>
            <a href="/" className="w-24">
              <img src="/assets/icon/GooglePlay.png" alt="" />
            </a>
          </div>          
        </div>
      </footer>
    </>
  );
}
