import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const About = () => {
  return (
    <>
      <section className='about bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ЗА НАС' /> <br />
            <br />
            <Title title='Вашият партньор в света на креативните технологии!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Създаваме уникални продукти чрез съчетание на изкуство и технологии' />
              <p className='desc-p'>Print & Paint Studio е място, където традиционното изкуство среща модерните технологии. Нашият екип от артисти и технически специалисти работи с страст и внимание към детайла, за да превърне вашите идеи в реалност. Специализирани сме в създаването на персонализирани продукти чрез 3D принтиране, художествено рисуване, 3D моделиране и лазерно гравиране. Независимо дали се нуждаете от уникален подарък, бизнес реклама или арт проект, ние сме тук, за да ви помогнем да постигнете желания резултат.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Години опит</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>100+</h1>
                  <h3>Доволни клиенти</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>100+</h1>
                  <h3>Завършени проекта</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Нашата мисия' />
              <br />
              <p className='misson-p'>В Print & Paint Studio вярваме, че всеки проект заслужава специално внимание и индивидуален подход. Нашата мисия е да предоставяме висококачествени услуги, които съчетават креативност с прецизност. Стремим се да бъдем иновативни в използването на новите технологии, като същевременно запазваме артистичния елемент във всеки проект. Работим с най-съвременно оборудване за 3D принтиране и лазерно гравиране, използваме качествени материали и разполагаме с талантливи художници, които могат да пресъздадат всяка ваша идея. Нашата цел е да надминем очакванията ви и да създадем продукти, които се отличават със своята уникалност и качество.</p>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default About
