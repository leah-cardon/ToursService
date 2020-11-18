import React from 'react';

// ---------------------------- SVG Graphics ---------------------------- //

// Question mark in Tour Type
export const qMark = (<svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z" fill="#869099" /></svg>);

// Error exclamation mark in RequestForm validation
export const errExcl = (<svg className="errSvg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 11.974h-2.66v-2.66h2.66v2.66zm0 10.628h-2.66v-8.687h2.66v8.687zm-1.33 6.658c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6z" fill="rgb(255, 94, 63)" fillRule="evenodd" /></svg>);

// Calendar Carousel arrows

export const left = (<svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" /></svg>);

export const right = (<svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" /></svg>);

// Financing Checkbox

export const checkMark = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <g>
      <rect className="checkContent" data-cb-part="blur" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" />
      <rect id="checkSquare" data-cb-part="background" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" />
      <path className="checkContent" data-cb-part="check" fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13l2.5 2L15 9" />
    </g>
  </svg>
);

// Health Advisory.

export const caution = (<svg className="svg caution" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.549 26.933H4.371L15.96 3.755l11.589 23.178zM14.63 21.28v2.66h2.66v-2.66h-2.66zm0-8.585v6.643h2.66v-6.643h-2.66z" fill="rgb(0, 120, 130)" /></svg>);

// Agent stars

export const star = (<svg className="stars" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 3.4l3.7 7.88 8.27 1.264-5.985 6.135 1.412 8.661-7.398-4.09-7.395 4.09 1.411-8.661-5.985-6.135 8.272-1.263z" fill="rgb(242, 196, 48)" fillRule="evenodd" /></svg>);

export const badStar = (<svg className="stars" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 3.4l3.7 7.88 8.27 1.264-5.985 6.135 1.412 8.661-7.398-4.09-7.395 4.09 1.411-8.661-5.985-6.135 8.272-1.263z" fill="#869099" fillRule="evenodd" /></svg>);
