const AvatarSvg = ({
  size = 32,
  fill = 'none',
}: {
  size?: number
  fill?: string
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_7)">
        <path
          d="M30.61 24.52C29.0031 22.779 27.0532 21.3896 24.8829 20.4393C22.7127 19.489 20.3692 18.9984 18 18.9984C15.6308 18.9984 13.2873 19.489 11.1171 20.4393C8.94681 21.3896 6.99685 22.779 5.39 24.52C5.14192 24.7943 5.00314 25.1501 5 25.52V31.52C5.00526 31.9143 5.16561 32.2908 5.44635 32.5677C5.72709 32.8447 6.10562 33 6.5 33H29.5C29.8978 33 30.2794 32.842 30.5607 32.5607C30.842 32.2794 31 31.8978 31 31.5V25.5C30.992 25.1371 30.8536 24.7892 30.61 24.52Z"
          fill={fill}
        />
        <path
          d="M18 17C21.866 17 25 13.866 25 10C25 6.13401 21.866 3 18 3C14.134 3 11 6.13401 11 10C11 13.866 14.134 17 18 17Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7">
          <rect width={size} height={size} fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AvatarSvg
