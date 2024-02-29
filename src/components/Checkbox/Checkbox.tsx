import  CheckboxProps  from '../../interfaces/component-interface';

export default function CheckBox({ label }: CheckboxProps) {
  return <>
    <div className='checkbox-container'>
      <input type='checkbox'/>
      {label}
    </div>
  </>
}