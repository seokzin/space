import { Layout } from './Button.styled'
import { ButtonProps } from './Button.types'

const Button = ({ children, onClick }: ButtonProps) => {
  return <Layout onClick={onClick}>{children}</Layout>
}

export default Button
