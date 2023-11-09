import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
          <Image
            src="/assets/account.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          </div>
          <div className="content-header-banner">
            <h1>Faysa Ryestitha Etsuko</h1>
            <div className="bio-nim-header-banner">
              <p>D121211027</p>
              <p>Do your best</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <button>
            Halo!
          </button>
        </div>
      </div>
    </div>
  )
}
