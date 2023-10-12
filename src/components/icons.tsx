type IconProps = {
  className?: string
}

function X() {
  const title = 'logo X (formerly Twitter)'

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M7.22852 10.1009L2.93802 14.9999H0.561523L6.11852 8.65186L7.22852 10.1009Z"
        fill="currentColor"
      />
      <path
        d="M8.52563 5.494L12.4541 1H14.8291L9.62563 6.951L8.52563 5.494Z"
        fill="currentColor"
      />
      <path
        d="M15.7441 15H10.9646L0.256104 1H5.1566L15.7441 15ZM11.6201 13.5785H12.9361L4.4416 2.347H3.0296L11.6201 13.5785Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Twitter() {
  const title = 'logo twitter'

  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

function Dribbble() {
  const title = 'logo dribbble'

  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M10.2,7.4 c0,0-0.2-0.6-0.3-0.8c1.7-0.8,2.8-1.7,3.2-2.2c0.7,0.9,1.1,2,1.2,3.2C13.5,7.4,11.7,7.1,10.2,7.4z M9.1,5.1C8.3,3.7,7.4,2.5,7,1.8 c1.9-0.5,3.6,0.1,4.9,1.3C11.5,3.6,10.7,4.4,9.1,5.1z M5.1,2.5c0.4,0.5,1.2,1.7,2,3.2C4.9,6.2,2.9,6.3,2,6.3 C2.4,4.7,3.6,3.3,5.1,2.5z M8,7.3c0.1,0.2,0.2,0.4,0.3,0.5c-2.8,0.9-4.6,3.2-5.2,4.1c-0.8-1.1-1.3-2.4-1.3-3.7C2.7,8.1,5.3,8,8,7.3z M9,9.5c0.7,2,1.1,3.6,1.2,4.4c-2.1,0.7-4.5,0.3-5.8-0.8C4.8,12.4,6.1,10.6,9,9.5z M11.9,12.9c-0.2-0.8-0.5-2.2-1.1-3.9 c1.1-0.2,2.7,0,3.3,0.2C13.8,10.7,13,12,11.9,12.9z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

function Email() {
  const title = 'at sign'

  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8,0a8,8,0,1,0,3.2,15.335l.916-.4-.8-1.833-.916.4A6,6,0,1,1,14,8V9a1,1,0,0,1-2,0V8a4.033,4.033,0,1,0-1.286,2.92A2.987,2.987,0,0,0,16,9V8A8.009,8.009,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2,2,0,0,1,8,10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

function Sound({className}: IconProps) {
  const title = 'sound'

  return (
    <svg
      className={className}
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path d="M12.8,12.2c-0.4-0.4-0.4-1,0-1.4c1.6-1.6,1.6-4.1,0-5.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0 c2.3,2.3,2.3,6.1,0,8.5C13.9,12.6,13.2,12.6,12.8,12.2z" />
        <path
          d="M11,1c0-0.8-0.9-1.3-1.6-0.8L3.7,4H1C0.4,4,0,4.4,0,5v6c0,0.6,0.4,1,1,1h2.7l5.7,3.8c0.7,0.4,1.6,0,1.6-0.8 V1z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

function GitHub({className}: IconProps) {
  const title = 'GitHub'

  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export {Twitter, Dribbble, Email, Sound, GitHub, X}
