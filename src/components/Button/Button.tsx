import ButtonProps from '../../interfaces/component-interface';
import './Button.scss';

export default function Button({label, size, onClick}:ButtonProps) {
  return (
    <div className={`button-container ${size}`}>
      <button className='button-styles'
      onClick={onClick}>
      {label}
    </button>
  </div>
  )
}