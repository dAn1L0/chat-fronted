import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'


export const PrivateRoute = ({ isAuthenticated, children }) => {

  return ( isAuthenticated ? children : <Navigate to={'auth/login'} /> )

}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}