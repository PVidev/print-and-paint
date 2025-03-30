import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Print & Paint - 3D Принтиране и Художествени Услуги</title>
        <meta name="description" content="Print & Paint предлага професионално 3D принтиране, художествени услуги, лазерно гравиране и 3D моделиране. Превърнете вашите идеи в реалност с нашите креативни решения." />
        <meta name="keywords" content="3D принтиране, арт услуги, лазерно гравиране, 3D моделиране, рисуване, custom art, България" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Print & Paint - 3D Принтиране и Художествени Услуги" />
        <meta property="og:description" content="Професионално 3D принтиране, художествени услуги и лазерно гравиране. Превърнете вашите идеи в реалност." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://printandpaintstudio.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Bulgarian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Print & Paint" />
      </Head>
      <Hero />
    </>
  )
}
