import { faBell, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.scss';

export default function NavBar({ children }: any) {
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
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>

      </div>

      <div className='circle'>
        {children}
      </div>
    </>
  )
}