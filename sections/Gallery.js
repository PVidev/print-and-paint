import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React, { useState } from "react"
import ImageModal from '@/components/common/ImageModal'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('всички')

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const categories = ['всички', 'Рисуване', '3D Принтиране', '3D Моделиране', 'Лазерно гравиране']

  const filteredItems = selectedCategory === 'всички' 
    ? showcase 
    : showcase.filter(item => item.catgeory === selectedCategory)

  return (
    <>
      <section className='gallery bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ГАЛЕРИЯ' /> <br />
            <br />
            <Title title='Свежи идеи. Смел дизайн. Умна реализация.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='category-buttons'>
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <br />
          <div className='grid-3'>
            {filteredItems.map((item) => (
              <Card 
                data={item} 
                key={item.id} 
                caption={item.post}
                onImageClick={handleImageClick}
              />
            ))}
          </div><br />
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
