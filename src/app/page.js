import Image from 'next/image'
import './globals.css'

export default function Home() {
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
            <h1>Faysa Ryestitha E.</h1>
            <div className="bio-nim-header-banner">
              <p>D121211027</p>
              <p>Do your best</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <a href=''>
            <div className='cta-button'>
              <p>Halo!</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
