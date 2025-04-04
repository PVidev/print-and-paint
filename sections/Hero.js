import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Gallery from "@/components/Gallery"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <main>
        <section className='hero' aria-label="Начална секция">
          <div className='container'>
            <TitleLogo title=' & Paint' caption='Print' className='logobg' />
            <h1 className='hero-title'>Тук изкуството се среща с технологиите.</h1>

            <div className='sub-heading' role="navigation" aria-label="Основни услуги">
              <TitleSm title='Рисуване' /> <span aria-hidden="true">.</span>
              <TitleSm title='3D Принтиране' /> <span aria-hidden="true">.</span>
              <TitleSm title='3D Моделиране' /> <span aria-hidden="true">.</span>
              <TitleSm title='Лазерно гравиране' />
            </div>
          </div>
        </section>
        
        <section className='hero-sec' aria-label="За нас">
          <div className='container'>
            <div className='heading-title'>
              <Title title='Всеки детайл е изкуство създаден с прецизност и страст!' />
              <p>В свят, пълен с масово производство и стандартни продукти, все повече хора търсят нещо уникално, което отразява тяхната индивидуалност и страст. Именно тук идва силата на "Print & Paint"- 3D принтиране и лазерно гравиране на продукти, които са не просто предмети – те са мост между технология, творчество и емоция.</p>
            </div>
            <div className='hero-content grid-4' role="list" aria-label="Нашите предимства">
              {home.map((item, i) => (
                <div className='box' key={i} role="listitem">
                  <span className='green' aria-hidden="true">{item.icon}</span>
                  <br />
                  <br />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Expertise />
        <Banner />
        <Gallery />
        <br />
      </main>
    </>
  )
}

export default Hero
