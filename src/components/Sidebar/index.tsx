type Props = {
  tittle?: string
  children: JSX.Element
}

const Sidebar = ({ tittle, children }: Props) => (
  <aside>
    <h2>{tittle}</h2>
    {children}
  </aside>
)

export default Sidebar
