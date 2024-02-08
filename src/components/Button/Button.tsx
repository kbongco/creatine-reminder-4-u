import ButtonProps from '../../interfaces/component-interface';
import './Button.scss';

export default function Button({label}:ButtonProps) {
  return (
    <div className='button-container'>
      <button  className='button-styles'>
      {label}
    </button>
  </div>
  )
}