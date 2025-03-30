import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, budget, timeframe, description } = req.body

    // Конфигурация на email транспорта
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Създаване на email съобщение
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'support@printpaintstudio.com',
      subject: 'Нова заявка от контактна форма',
      html: `
        <h2>Нова заявка от контактна форма</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Бюджет:</strong> ${budget}</p>
        <p><strong>Времева рамка:</strong> ${timeframe || 'Не е посочена'}</p>
        <p><strong>Описание:</strong></p>
        <p>${description}</p>
      `,
    }

    // Изпращане на email
    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Error sending email' })
  }
} 