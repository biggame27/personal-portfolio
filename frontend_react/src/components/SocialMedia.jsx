import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/biggame27" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/harrison-ko-407655248/" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
