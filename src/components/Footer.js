import React from 'react'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Tous droits réservés. Site fait par{' '}
          <a href="https://francaisavecdan.netlify.app/contact/">Dan</a>.
        </span>
      </div>
    </footer>
  </div>
)
