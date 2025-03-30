import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { FaTiktok, FaYoutube } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title=' & Paint' caption='Print' className='logobg' />
              <br />
              <span>
                Ако имате въпроси,
                можете да ни потърсите <br />
                и ние ще ви отговорим
                в най-кратък срок.
              </span>
              <br />
              <br />
              <p>Пейо Видев</p>
              <h3><a href="tel:+359898624880" style={{ color: 'inherit', textDecoration: 'none' }}>+359 898 624 880</a></h3>
              <p>Христо Станилов</p>
              <h3><a href="tel:+359885852169" style={{ color: 'inherit', textDecoration: 'none' }}>+359 885 852 169</a></h3>
            </div>
            <ul>
              <h3>Полезни връзки:</h3>
              <li>
                <Link href='/about'>За Нас</Link>
              </li>
              <li>
                <Link href='/team'>Екип</Link>
              </li>
              <li>
                <Link href='/services'>Услуги</Link>
              </li>
              <li>
                <Link href='/gallery'>Галерия</Link>
              </li>
              <li>
                <Link href='/contact'>Контакти</Link>
              </li>
            </ul>
            <ul>
              <h3>Услуги:</h3>
              <li>
                <Link href='/'>Рисуване</Link>
              </li>
              <li>
                <Link href='/'>3D Принтиране</Link>
              </li>
              <li>
                <Link href='/'>3D Моделиране</Link>
              </li>
              <li>
                <Link href='/'>Лазерно гравиране</Link>
              </li>
            </ul>
            <ul>
              <h3>Открийте ни на:</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/profile.php?id=100075994116320' target="_blank" rel="noopener noreferrer">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.tiktok.com/@print.and.paint' target="_blank" rel="noopener noreferrer">
                    <FaTiktok size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/print.paint_/' target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.youtube.com/@Print-And-Paint' target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 <a href="https://pvidev-design.com/" target="_blank" rel="noopener noreferrer">PVidev Design</a> . ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <Link href="/cookie-policy">Правила за бисквитки</Link>
              <span> &nbsp; | &nbsp; </span>
              <Link href="/terms-of-use">Правила за ползване</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
