'use client'

import Image from 'next/image'
import '@styles/home.css'
import { useState } from 'react'

export default function Home() {
  const [nama, setNama] = useState('')
  const [displayValue, setDisplayValue] = useState('Faysa Ryestitha Etsuko')
  const handlerButtonClick = () => {
    setDisplayValue(nama)
  }
  return (
    <div className="body">
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
            <Image
              src="/assets/account.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            <h1>{displayValue}</h1>
            <div className="bio-nim-header-banner">
              <p>D121211027</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <div className='input-button'>
            <input id="nama" type="text" required value={nama} onChange={(e) => setNama(e.target.value)}/>
            <label for="">Masukkan nama</label>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <div className='cta-button' onClick={ handlerButtonClick }>
            <p>Submit</p>
          </div>
        </div>
      </div>
    </div>
  )
}
