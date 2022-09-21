import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/chetan.anjana.397/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/chetan_anjana17/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCgIE0571KtSI7FzxcRO_l_A">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'M <span className="highlighted-text">Chetan Anjana</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Passionate Dev 🪡',
                    2000,
                    'Full Stack Dev 💻',
                    2000,
                    'MERN Stack Dev🌐',
                    2000,
                    'Tutor 📚',
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications and solving problems
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {''}
              Hire Me{' '}
            </button>
            <a href="resume.pdf" download="Chetan resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  )
}
