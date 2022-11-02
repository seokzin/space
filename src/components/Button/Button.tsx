import { Layout } from './Button.styled'

export interface ButtonProps {
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
   * Button contents
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
const Button = ({ backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <Layout type="button" style={{ backgroundColor }} {...props}>
      {label}
    </Layout>
  )
}

export default Button
