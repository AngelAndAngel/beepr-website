import React from 'react'

interface TikTokIconProps {
  className?: string
}

export const TikTokIcon: React.FC<TikTokIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.294-1.98-1.294-3.338V1H13.09v14.966c0 2.089-1.696 3.785-3.785 3.785s-3.785-1.696-3.785-3.785 1.696-3.785 3.785-3.785c.394 0 .774.061 1.133.174V8.998a7.14 7.14 0 0 0-1.133-.092c-3.967 0-7.185 3.218-7.185 7.185S5.338 23.276 9.305 23.276s7.185-3.218 7.185-7.185V9.292a9.626 9.626 0 0 0 5.831 1.947V7.84c-1.055 0-2.042-.338-2.842-.926-.267-.196-.51-.42-.726-.67a5.55 5.55 0 0 1-.432-.682z"/>
    </svg>
  )
}