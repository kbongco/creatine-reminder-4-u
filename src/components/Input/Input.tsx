import InputProps from '../../interfaces/component-interface';
import './Input.scss';


export default function Input({ icon, label, type, inputStyle, placeholder, name,  onChange, value }: InputProps) {
  return (
    <>
      <div className='input-container'>
        <label>{label}</label>
        <div className={`input-wrapper`}>
          {icon && <span className="input-icon">{icon}</span>}
          <input className={`input-style ${inputStyle}`} placeholder={placeholder} type={type} onChange={onChange} name={name} value={value}></input>
        </div>
      </div>
    </>
  )
}