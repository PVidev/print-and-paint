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
            <Title title='Последната дигитална агенция, която ще ви трябва!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Превръщаме вашите бизнес идеи в умни дигитални продукти от 2001' />
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Години опит</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Успешни случаи</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Индустриални награди</h3>
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
              <p className='misson-p'>Fusce fringilla justo vel dui consectetur, fringilla maximus ante malesuada. Suspendisse facilisis nisl augue, ut sollicitudin lectus ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse vitae officia nostrum facere. Fugiat voluptates, expedita dolore at perferendis quae libero fuga consequatur veniam, eius non fugit nulla vitae?</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default About
