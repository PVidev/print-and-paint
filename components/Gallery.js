import React, { useState, useEffect } from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"
import ImageModal from './common/ImageModal'

const Gallery = () => {
  const [randomItems, setRandomItems] = useState([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Функция за получаване на случайни елементи
    const getRandomItems = () => {
      const shuffled = [...showcase].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 3)
    }

    const updateItems = () => {
      setIsTransitioning(true)
      
      // Изчакваме анимацията да приключи преди да обновим съдържанието
      setTimeout(() => {
        setRandomItems(getRandomItems())
        setIsTransitioning(false)
      }, 500) // 500ms е продължителността на анимацията
    }

    // Първоначално показване
    setRandomItems(getRandomItems())

    // Интервал за обновяване
    const interval = setInterval(updateItems, 5000)

    // Почистване на интервала при unmount
    return () => clearInterval(interval)
  }, [])

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <section className='gallery'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Избрани проекти' />
          </div>
          <div className={`hero-content grid-3 py ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            {randomItems.map((item) => (
              <Card 
                data={item} 
                key={item.id} 
                onImageClick={handleImageClick}
              />
            ))}
          </div>
          <div className='card links'>
            <Link href='/gallery'>
              ВИЖ ВСИЧКИ ПРОЕКТИ <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>

      <ImageModal
        image={selectedImage}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </>
  )
}

export default Gallery
