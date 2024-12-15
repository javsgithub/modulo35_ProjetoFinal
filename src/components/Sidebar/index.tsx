import { SideBarStyles } from './styles'

type Props = {
  tittle?: string
  children: JSX.Element
}

const Sidebar = ({ tittle, children }: Props) => (
  <SideBarStyles>
    <h2>{tittle}</h2>
    {children}
  </SideBarStyles>
)

export default Sidebar
