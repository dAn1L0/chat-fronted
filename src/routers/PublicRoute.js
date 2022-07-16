import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'


export const PublicRoute = ({ isAuthenticated, children }) => {

  return ( !isAuthenticated ? children : <Navigate to={'/'} /> )

}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}