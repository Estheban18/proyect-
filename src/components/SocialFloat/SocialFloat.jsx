import React from 'react';
import './SocialFloat.css';

const SocialFloat = () => {
  const socialNetworks = [
    {
      name: 'Facebook',
      iconUrl: 'https://www.flaticon.com/free-icon/facebook_174848?related_id=174848',
      url: 'https://facebook.com/tuempresa',
      color: '#1877F2',
      glow: '#1877F280'
    },
    {
      name: 'Instagram',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
      url: 'https://instagram.com/tuempresa',
      color: '#E4405F',
      glow: '#E4405F80'
    },
    {
      name: 'TikTok',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/3046/3046126.png',
      url: 'https://tiktok.com/@tuempresa',
      color: '#000000',
      glow: '#00000080'
    },
    {
      name: 'Twitter',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/124/124021.png',
      url: 'https://twitter.com/tuempresa',
      color: '#1DA1F2',
      glow: '#1DA1F280'
    },
    {
      name: 'YouTube',
      iconUrl: 'https://www.flaticon.com/free-icon/youtube_3670147?term=youtube&page=1&position=2&origin=search&related_id=3670147',
      url: 'https://youtube.com/tuempresa',
      color: '#FF0000',
      glow: '#FF000080'
    },
    {
      name: 'LinkedIn',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      url: 'https://linkedin.com/company/tuempresa',
      color: '#0077B5',
      glow: '#0077B580'
    },
    {
      name: 'WhatsApp',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/124/124034.png',
      url: 'https://wa.me/tunumerodetelefono',
      color: '#25D366',
      glow: '#25D36680'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="social-float-container">
      {socialNetworks.map((social, index) => (
        <button
          key={index}
          className={`social-button ${social.name.toLowerCase()}`}
          onClick={() => handleSocialClick(social.url)}
          style={{ 
            '--social-color': social.color,
            '--social-glow': social.glow
          }}
          aria-label={`Síguenos en ${social.name}`}
        >
          <img 
            src={social.iconUrl} 
            alt={social.name}
            className="social-icon"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="social-fallback" style={{ display: 'none' }}>
            {social.name.charAt(0)}
          </span>
          <span className="social-tooltip">{social.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialFloat; 