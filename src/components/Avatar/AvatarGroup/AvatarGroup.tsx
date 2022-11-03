import { Layout } from './Avatar.styled'

export interface AvatarProps {
  /**
   * Is this the principal call to action on the page?
   */
  readonly primary?: boolean
  /**
   * What background color to use
   */
  readonly backgroundColor?: string
  /**
   */
  readonly size?: 'small' | 'medium' | 'large'
  /**
   * Avatar contents
   */
  readonly label: string
  /**
   * Optional click handler
   */
  readonly onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Avatar = ({}: AvatarProps) => {
  return <Layout></Layout>
}

export default Avatar
