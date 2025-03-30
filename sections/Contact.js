import { Title, TitleSm } from "@/components/common/Title"
import React, { useState } from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import Link from "next/link"
import { FaTiktok } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeframe: '',
    description: '',
    website: '' // Скрито поле за ботове
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Името е задължително'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email е задължителен'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Невалиден email формат'
    }
    
    if (!formData.budget.trim()) {
      newErrors.budget = 'Бюджетът е задължителен'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Описанието е задължително'
    }

    // Проверка за бот
    if (formData.website.trim()) {
      newErrors.bot = 'Изглежда сте бот. Моля, опитайте отново.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          timeframe: formData.timeframe,
          description: formData.description
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          budget: '',
          timeframe: '',
          description: '',
          website: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Изчистваме грешката при промяна
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Контакти' /> <br />
            <br />
            <Title title="Да започнем вашият проект сега!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3><a href="tel:+359898624880" style={{ color: 'inherit', textDecoration: 'none' }}>+359 898 624 880</a></h3>
                  <h3><a href="tel:+359885852169" style={{ color: 'inherit', textDecoration: 'none' }}>+359 885 852 169</a></h3>
                  <span>Ако имате въпроси,
                  можете да ни потърсите <br />
                  и ние ще ви отговорим
                  в най-кратък срок.</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>България</h3>
                  <span>София - П.К.: 1000</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>support@printpaintstudio.com</h3>
                  <span>Пишете ни по всяко време!</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <Link href='https://www.facebook.com/profile.php?id=100075994116320' target="_blank" rel="noopener noreferrer">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.tiktok.com/@print.and.paint' target="_blank" rel="noopener noreferrer">
                    <FaTiktok size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.instagram.com/print.paint_/' target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://www.youtube.com/@Print-And-Paint' target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Направете вашето онлайн запитване' />
              <p className='desc-p'>Имате въпроси? Идеи? Попълнете формата по-долу, за да получите нашето предложение. </p>

              <form onSubmit={handleSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Име и фамилия *</span>
                    <input 
                      type='text' 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className='inputs'>
                    <span>Email *</span>
                    <input 
                      type='email' 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Вашият бюджет *</span>
                    <input 
                      type='text' 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={errors.budget ? 'error' : ''}
                    />
                    {errors.budget && <span className="error-message">{errors.budget}</span>}
                  </div>
                  <div className='inputs'>
                    <span>Времева рамка</span>
                    <input 
                      type='text' 
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='inputs'>
                  <span>Опишете ни вашия проект. *</span>
                  <textarea 
                    cols='30' 
                    rows='10'
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={errors.description ? 'error' : ''}
                  ></textarea>
                  {errors.description && <span className="error-message">{errors.description}</span>}
                </div>
                {/* Скрито поле за ботове */}
                <div className="honeypot">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {errors.bot && <div className="error-message">{errors.bot}</div>}
                <button 
                  type="submit" 
                  className='button-primary'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Изпращане...' : 'Изпрати'}
                </button>
                {submitStatus === 'success' && (
                  <div className="success-message">
                    Съобщението е изпратено успешно! Ще се свържем с вас скоро.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">
                    Възникна грешка при изпращането. Моля, опитайте отново.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
