import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
import './style.css'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import RelationshipTimer from './components/RelationshipTimer'
import { memories } from './constants/photos'

function App() {
  return (
    <div className="bg-gray-900 h-[1724px]  w-screen text-center overflow-x-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {memories.map((memorie, index) => (
          <SwiperSlide key={index} className="relative group">
            <img
              src={memorie.image}
              alt={memorie.description}
              className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm px-4 py-2">
                {memorie.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex flex-col text-center mt-6">
        <h1 className="text-white font-semibold text-lg">
          Tempo em que estou apaixonado por você
        </h1>
        <RelationshipTimer startDate="2024-03-09T20:45:00" />
      </div>
      <div className="w-full flex flex-col text-center mt-6">
        <h1 className="text-white font-semibold text-lg">
          Tempo em que estamos de aliança
        </h1>
        <RelationshipTimer startDate="2024-10-18T00:10:00" />
      </div>
      <div className="w-full flex flex-col text-center mt-6">
        <h1 className="text-white font-semibold text-lg">Dias sem brigar</h1>
        <RelationshipTimer startDate="2024-12-23T14:20:00" />
      </div>
      <p className="text-white text-pretty font-medium m-2">
        Fiz isso aqui para lembrar algumas coisas, principalmente nossos bons
        momentos juntos, e como uma das diversas formas que tenho para dizer que
        amo você. Mas, nessa altura do campeonato, você já deve ter percebido
        que não há um único dia em que isso tenha mudado. Você é a mulher de
        quem me lembro como se fosse a primeira vez que ouvi rock e escutei um
        solo de guitarra. Grudou na minha mente de uma forma que não consigo
        parar de pensar desde o primeiro dia, e passei a desejar isso até os
        meus últimos dias. Não faltam qualidades em você; o que faltam são
        palavras para que eu consiga me expressar quando falo sobre você. Tudo é
        diferente de uma forma que eu nunca imaginei ser possível. De alguma
        forma, passei a acreditar novamente em tudo que eu tinha perdido as
        esperanças quando você apareceu na minha vida. Até aqueles vazios se
        preencheram com algo, ou melhor, com alguém. Você é minha pausa da
        mente, o refúgio dos meus pensamentos, a cor dos meus sonhos e o
        significado deles. E tudo foi tão intenso que, no meu dia mais louco, eu
        jamais poderia imaginar quão louco ficaria por você. Eu verdadeiramente
        te amo.
      </p>
      <h2 className="text-white">
        Feito com <span>&hearts;</span>
      </h2>
    </div>
  )
}

export default App
