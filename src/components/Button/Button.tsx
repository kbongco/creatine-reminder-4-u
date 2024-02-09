import ButtonProps from '../../interfaces/component-interface';
import './Button.scss';

export default function Button({label, size}:ButtonProps) {
  return (
    <div className={`button-container ${size}`}>
      <button  className='button-styles'>
      {label}
    </button>
  </div>
  )
}