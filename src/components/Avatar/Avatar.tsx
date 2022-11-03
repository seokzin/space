import { Layout } from './Avatar.styled'
import { AvatarProps } from './Avatar.types'

const Avatar = ({ name, src, size = 'md' }: AvatarProps) => {
  return (
    <Layout size={size}>
      <img src={src} alt={name} />
      {name}
    </Layout>
  )
}

export default Avatar
