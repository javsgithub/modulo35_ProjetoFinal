import { SideBarStyles, Tittle } from './styles'

type Props = {
  tittle?: string
  children: JSX.Element
}

const Sidebar = ({ tittle, children }: Props) => (
  <>
    <SideBarStyles>
      <Tittle>{tittle}</Tittle>
      {children}
    </SideBarStyles>
  </>
)

export default Sidebar
