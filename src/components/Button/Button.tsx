import ButtonProps from '../../interfaces/component-interface';
import './Button.scss';

export default function Button({label, size, onClick, disabled}:ButtonProps) {
  return (
    <div className={`button-container ${size}`}>
      <button className='button-styles' disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  </div>
  )
}