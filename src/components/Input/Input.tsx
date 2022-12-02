import { Layout } from './Input.styled'
import { InputProps } from './Input.types'

const Input = ({ disabled = false, placeholder, ...rest }: InputProps) => (
  <Layout disabled={disabled} placeholder={placeholder} {...rest} />
)

export default Input
