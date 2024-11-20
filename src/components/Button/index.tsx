import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element
  size?: 'small' | 'big'
  width: string
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  size = 'small',
  width
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
        width={width}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink
      type="link"
      title={title}
      to={to as string}
      size={size}
      width={width}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
