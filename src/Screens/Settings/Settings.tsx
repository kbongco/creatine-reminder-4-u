import { faBell, faBookOpenReader, faComment, faJar, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Settings.scss';

export default function Settings() {
  return (
    <>
      <div className='settings-page-container'>
        <div className='settings-page-header-container'>
          <div className='settings-page-header'>
            <h1>Settings</h1>
          </div>
        </div>
        <div className='settings-options-grid-container'>
          <div className='settings-page-options-container'>
            <div className='settings-page-options-icons'>
              <div className='settings-icon-container'>
                {<FontAwesomeIcon icon={faUser} />}
              </div>
            </div>
            <div className='settings-page-options-text'>
              <p>Profile Settings</p>
            </div>
            <div className='settings-page-options-icons'>
              <div className='settings-icon-container'>
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
            <div className='settings-page-options-text'>
              <p>Notification Settings</p>
            </div>
            <div className='settings-page-options-icons'>
              <div className='settings-icon-container'>
                <FontAwesomeIcon icon={faJar} />
              </div>
            </div>
            <div className='settings-page-options-text'>
              <p>Current Creatine</p>
            </div>
            <div className='settings-page-options-icons'>
              <div className='settings-icon-container'>
                <FontAwesomeIcon icon={faComment} />
              </div>
            </div>
            <div className='settings-page-options-text'>
              <p>Leave Feedback</p>
            </div>
            <div className='settings-page-options-icons'>
              <div className='settings-icon-container'>
                <FontAwesomeIcon icon={faBookOpenReader} />
              </div>
            </div>
            <div className='settings-page-options-text'>
              <p>Learn More</p>
            </div>
            <div className='settings-page-options-icons'>
              <div className='settings-icon-container'>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
            </div>
            <div className='settings-page-options-text'>
              <p>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}