import { faBell, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className='navbar-container'>
        <div className='user-icon-container'>
          <div className='navbar-user-icon'>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className='notifications-settings-container'>
          <div className='notifications-icon-container'>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className='settings-icon-container'>
            <Link className='settings-link' to='/settings'>
            <FontAwesomeIcon icon={faGear} />
            </Link>
          </div>
        </div>

      </div>

      <div className='circle'>
      </div>
    </>
  )
}