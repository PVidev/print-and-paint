import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title=' & Paint' caption='Print' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Начало
            </Link>
            <Link href='/about' className={activeLink == "/about" ? "activeLink" : "none"}>
              За Нас
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Екип
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Услуги
            </Link>
            <Link href='/gallery' className={activeLink == "/gallery" ? "activeLink" : "none"}>
              Галерия
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Контакти
            </Link>
            <Link href='/contact'>
              <button className='button-primary'>Запитване</button>
            </Link>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
