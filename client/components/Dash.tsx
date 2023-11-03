import { Link, Outlet } from 'react-router-dom'

function Dash() {
  return (
    <>
      <header>
        <h1>Fruits!</h1>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/add">Add a fruit</Link>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Dash
