import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Всеки велик проект започва с една смела стъпка.' /> <br />
            <TitleLogo title='Доверете ни се и нека превърнем визията ви в реалност!' />
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Banner
