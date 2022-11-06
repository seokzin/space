import { useMemo } from 'react'

import { Image, Layout } from './Avatar.styled'
import AvatarSvg from './Avatar.svg'
import { AvatarProps } from './Avatar.types'

const sizeToNum = {
  sm: 24,
  md: 32,
  lg: 64,
}

const getRandomColor = () => {
  const colors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B',
  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

const Avatar = ({ name, src, size = 'md' }: AvatarProps) => {
  const color = useMemo(() => getRandomColor(), [])

  return (
    <Layout size={sizeToNum[size]} color={color}>
      <AvatarSvg size={sizeToNum[size]} fill={`${color}33`} />
      {src ? (
        <Image src={src} alt={name ? `${name}'s avatar` : 'avatar'} />
      ) : (
        <AvatarSvg size={sizeToNum[size]} fill={`#ffffff`} />
      )}
    </Layout>
  )
}

export default Avatar
