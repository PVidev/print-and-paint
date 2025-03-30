import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Услуги' />
            <p>Предлагаме ръчно рисувани картини, иновативно 3D принтиране и моделиране, както и прецизно лазерно гравиране. Всеки проект е изработен с внимание към детайла, вдъхновение и модерен подход.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='Виж още' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
