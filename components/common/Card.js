import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path, onImageClick }) => {
  // Проверяваме дали имаме специален URL за Diablo 4
  const getLinkUrl = () => {
    if (data.url) {
      return data.url
    }
    return path ? `${path}/${data.id}` : '#'
  }

  const isExternalLink = data.url && (data.url.startsWith('http') || data.url.startsWith('https'))

  return (
    <>
      <div className='card'>
        <div className='card-img' onClick={() => onImageClick && onImageClick(data.cover)}>
          <img src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          <Link href={getLinkUrl()} className='title-link' target={isExternalLink ? "_blank" : "_self"}>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={getLinkUrl()} target={isExternalLink ? "_blank" : "_self"}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
