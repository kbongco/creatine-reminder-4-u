import NavBar from "../../Layout/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import { ButtonSizes } from "../../enums/component-enums";
import './AddTub.scss';

export default function AddATub() {
  const addHeader = 'Add a new tub'
  const addTubBody = (
    <div className='add-new-tub-container'>
      <div className='add-new-tub-form-container'>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Name'
            inputStyle="default"
          />
        </div>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Total Servings'
          />
        </div>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Serving Size'
          />
        </div>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Servings Per Container'
          />
        </div>
        <div className='checkbox-user-container'>
          Share this with other users
        </div>
      </div>
      <div className='add-new-tub-button'>
        <Button
          label='Add'
          size={ButtonSizes.Medium}
        />

      </div>
    </div>
  )
  return (
    <>
      <NavBar />
      <div className='add-card-container'>
        <Card
          size='xl-card'
          header={addHeader}
          body={addTubBody} />
      </div>
    </>
  )
}