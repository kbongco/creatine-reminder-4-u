import { useState } from "react";
import NavBar from "../../Layout/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import CheckBox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import { ButtonSizes } from "../../enums/component-enums";
import './AddTub.scss';
import { db, auth } from '../../config/firebase';
import { setDoc, doc } from "firebase/firestore";

export default function AddATub() {
  const addHeader = 'Add a new tub'
  const checkBoxText = 'Share this with other users';
  const [formData, setFormData] = useState({
    tubName: '',
    totalPerContainer: '',
    servingSize: '',
    servingsPerContainer: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const getUserId = () => {
    const user = auth.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  }

  const addTub = async (userId, tubData) => {
    try {
      await setDoc(doc(db, "creatineTubs", userId), tubData);
      console.log('Tub added successfully!');
    } catch (error) {
      console.error('Error adding tub:', error);
    }
  };

  const submitTub = (e) => {
    e.preventDefault();
    const userId = getUserId();
    if (userId) {
      addTub(userId, formData);
    }
    setFormData({
      tubName: '',
      totalPerContainer: '',
      servingSize: '',
      servingsPerContainer: ''
    });
  }

  const addTubBody = (
    <div className='add-new-tub-container'>
      <div className='add-new-tub-form-container'>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Name'
            inputStyle="default"
            name='tubName'
            value={formData.tubName}
            onChange={handleInputChange}
          />
        </div>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Total Servings'
            name='totalPerContainer'
            value={formData.totalPerContainer}
            onChange={handleInputChange}
          />
        </div>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Serving Size'
            name='servingSize'
            value={formData.servingSize}
            onChange={handleInputChange}
          />
        </div>
        <div className='add-new-tub-form-input-container'>
          <Input
            label='Servings Per Container'
            name='servingsPerContainer'
            value={formData.servingsPerContainer}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='checkbox-user-container'>
        <CheckBox
          label={checkBoxText} />
      </div>
      <div className='add-new-tub-button'>
        <Button
          label='Add'
          size={ButtonSizes.Medium}
          onClick={submitTub}
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