import React from 'react';
import './App.css';
const EyeIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 19 45" fill="none" className="button__cap">
      <g clipPath="url(#clip0_51_69)">
        <path
          d="M19 18.0272L13.656 12.7143V5.31963L6.22262 5.31611L0.878625 9.49563e-07L-98.0024 0L-104 5.96643V26.9728L-85.8786 45H12.9992L19 39.0336V18.0272Z"
          fill="#ACCE57"
          style={{ fill: 'rgb(172, 206, 87)' }}
        ></path>
        <path
          d="M11.7657 0.5L5 12.161H18.5359L11.7657 0.5Z"
          fill="#ACCE57"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          className="button__cap-eye"
          style={{ fill: 'rgb(172, 206, 87)', stroke: 'rgb(0, 0, 0)' }}
        ></path>
        <path
          d="M16.3306 8.2743C16.3306 8.2743 14.29 10.7758 11.7708 10.7758C9.25155 10.7758 7.21094 8.2743 7.21094 8.2743C7.21094 8.2743 9.25155 5.77234 11.7708 5.77234C14.29 5.77234 16.3306 8.2743 16.3306 8.2743Z"
          fill="#ACCE57"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          className="button__cap-eye pupil"
          data-svg-origin="11.77077054977417 8.274069786071777"
          transform="matrix(1,0,0,1,0,0)"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '0px 0px',
            fill: 'rgb(172, 206, 87)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
        <path
          d="M11.7682 10.0661C12.763 10.0661 13.5696 9.26397 13.5696 8.27429C13.5696 7.28461 12.763 6.48204 11.7682 6.48204C10.7733 6.48204 9.9668 7.28461 9.9668 8.27429C9.9668 9.26397 10.7733 10.0661 11.7682 10.0661Z"
          fill="#ACCE57"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          className="button__cap-eye pupil"
          data-svg-origin="11.768199920654297 8.274070024490356"
          transform="matrix(1,0,0,1,0,0)"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '0px 0px',
            fill: 'rgb(172, 206, 87)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_51_69">
          <rect width="19" height="45" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default EyeIcon;
