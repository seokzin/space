import { Layout } from './Text.styled'
import { TextProps } from './Text.types'

const Text = ({
  align = 'left',
  children,
  color,
  size = 'md',
  weight = 'regular',
}: TextProps) => {
  return (
    <Layout align={align} color={color} size={size} weight={weight}>
      {children}
    </Layout>
  )
}

export default Text
