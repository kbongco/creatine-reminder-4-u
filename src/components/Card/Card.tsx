import './Card.scss';
import CardProps from '../../interfaces/component-interface';


export default function Card({ header, body, footer, size }: CardProps) {
  return (<>
    <div className={`card-container ${size}`}>
      <div className='card'>
        <div className='card-header'>
         {header}
        </div>
        <div className='card-content'>
        {body}
        </div>
        <div className='card-footer'>
          <p>{footer}</p>
        </div>
      </div>
    </div>
  </>
  )
}