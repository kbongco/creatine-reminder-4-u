import InputProps from '../../interfaces/component-interface';
import './Input.scss';


export default function Input({ icon, label, type, inputStyle, placeholder }: InputProps) {
  return ( 
    <>
      <div className='input-container'>
        {/* <label>{label}</label> */}
        <div className={`input-wrapper ${inputStyle}`}>
          {icon && <span className="input-icon">{icon}</span>}
        <input className={`input-style ${inputStyle}`} placeholder={placeholder}></input>
        </div>
    </div>
    </>
  )
}