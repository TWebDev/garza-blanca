import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Card from '../Elements/Card';
import Button from '../Elements/Button';

import Field from './FormItems/Field';
import Radio from "./FormItems/Radio";
import DropDown from "./FormItems/DropDown";
import Select from './FormItems/Select';
import CheckBox from './FormItems/CheckBox';

const Modal = (props) => {
  
  let { 
    formFieldSet,

    toggleClass, 
    toggleModal,
    toggleThankYou,
    changeRadio,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    handleOptionChange,
    updateFormName, 
    updateFormLast, 
    updateFormPhone,
    updateFormEmail,
    
  } 
    = props;

  const validateForm = () => {

    if ( nameVal && lastVal && phoneVal && mailVal && changeRadio ) {

      return ('button is-secondary has-shadow');

    } else {

      return ('button is-static');
      
    }
  }

  const labelStyle = 'label has-text-white'
  const controlIcon = 'control has-icons-left has-shadow'

  return (
    <React.Fragment>
      <div className={toggleClass}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-close" onClick={toggleModal}></div>
        <div className="modal-content mc_embed_signup">
          <form action='https://gmail.us20.list-manage.com/subscribe/post?u=18fc1557072305c8be7a46adb&amp;id=a8290878ac' 
            method='post' id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className='validate' target="_blank" 
            novalidate>
            <Card Style='box is-radiusless is-gold' id='mc_embed_signup_scroll'>
              <section className="modal-card-body is-darken-gold has-inshadow">
                
                  {/* First Name */}
                <Field
                  _Id = 'mce-FNAME'
                  Name = 'FNAME'
                  Type = 'text'
                  InputCSS = { nameVal ? ('input is-success') : ('input is-danger') }
                  labelCSS = { labelStyle }
                  controlIcon = { controlIcon }
                  iconCSS = 'fas fa-user'
                  PlaceHolder = 'Type your Name'
                  inputValue = { formFieldSet.nameValue || '' }
                  inputHandler = { (e) => updateFormName(e) }
                >
                  First Name
                </Field>

                  {/* Last Name */}
                <Field
                  _id = 'mce-LNAME'
                  Name = 'LNAME'
                  Type = 'text'
                  InputCSS = { lastVal ? ('input is-success') : ('input is-danger') }
                  labelCSS = { labelStyle }
                  controlIcon = { controlIcon }
                  iconCSS = 'fas fa-user'
                  PlaceHolder = 'Type your Last Name'
                  inputValue = { formFieldSet.lastValue || '' }
                  inputHandler = { (e) => updateFormLast(e) }
                >
                  Last Name
                </Field>

                  {/* Phone Number */}
                <Field
                  _id = 'mce-MMERGE5'
                  Name = 'MMERGE5'
                  Type = 'text'
                  InputCSS = { phoneVal ? ('input is-success') : ('input is-danger') }
                  labelCSS = { labelStyle }
                  controlIcon = { controlIcon }
                  iconCSS = 'fas fa-phone'
                  PlaceHolder = '123 456 7890'
                  inputValue = { formFieldSet.phoneValue || '' }
                  inputHandler = { (e) => updateFormPhone(e) }
                >
                  Phone Number
                </Field>

                  {/* Email */}
                <Field
                  _id = 'mce-EMAIL'
                  Name = 'EMAIL'
                  Type = 'email'
                  InputCSS = { mailVal ? ('input is-success') : ('input is-danger') }
                  labelCSS = { labelStyle }
                  controlIcon = { controlIcon }
                  iconCSS = 'fas fa-at'
                  PlaceHolder = 'youremail@mailme.com'
                  inputValue = { formFieldSet.emailValue || '' }
                  inputHandler = { (e) => updateFormEmail(e) }
                >
                  Email
                </Field>

                <hr className="is-divider"></hr>

                <div className="columns is-flex">
                    {/* Invest Plan Dropdown */}
                  <DropDown
                    Name = 'MMERGE7'
                    _id = 'mce-MMERGE7'
                    val1 = '0 - 6 Months'
                    val2 = '6 - 12 Months'
                    val3 = '1 year or more'
                    labelStyle={ labelStyle }
                  >
                    When are you planning to invest?
                  </DropDown>

                    {/* Budget Dropdown */}
                  <DropDown
                    Name = 'MMERGE8'
                    _id = 'mce-MMERGE8'
                    val1 = 'Up to $500,000'
                    val2 = '$500,000 - $1M'
                    val3 = 'More than $1M'
                    labelStyle = { labelStyle }
                  >
                    What is your budget
                  </DropDown>
                </div>
                
                  {/* Radio Options */}
                <Radio
                  _idOpt1 = 'mce-MMERGE6-0'
                  Val1 = 'Yes'
                  _idOpt2 =  'mce-MMERGE6-1'
                  Val2 = 'No'
                  labelStyle = { labelStyle }
                  Name = 'MMERGE6'
                  handleRadio = {(e) => handleOptionChange(e)}
                >
                  Have you ever been to Puerto Vallarta?
                </Radio>
                
                  {/* Multiselect boxes */}
                <Select
                  labelStyle = { labelStyle }
                >
                  Do you know another destination in Mexico? Which one?
                </Select>
                <div className="label has-text-white">
                  <CheckBox
                    _id = 'mce-group[3545]-3545-0'
                    Type = 'checkbox'
                    Value = '1'
                    Name = 'group[3545][1]'
                  >
                    Cancun
                  </CheckBox>
                  <CheckBox
                    _id = 'mce-group[3545]-3545-1'
                    Type = 'checkbox'
                    Value = '2' 
                    Name = 'group[3545][2]'
                  >
                    Loreto
                  </CheckBox>
                  <CheckBox
                    _id = 'mce-group[3545]-3545-2'
                    Type = 'checkbox'
                    Value = '4' 
                    Name = 'group[3545][4]'
                  >
                    Los Cabos
                  </CheckBox>
                </div>

              </section>
              <hr className="is-divider"></hr>
              <footer className="modal-card-foot is-gold is-radiusless">

                  <Button type='submit' value='Subscribe' name="subscribe" id="mc-embedded-subscribe"
                    Style={validateForm()}
                    >
                      Submit
                  </Button>

              </footer>
            </Card>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ landingActions }) => {
  const { 
    modalActive,
    changeRadio,
    thankYouActive,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet } 
      = landingActions
  return { 
    modalActive,
    changeRadio,
    thankYouActive,
    nameVal, 
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
}

export default connect(mapStateToProps, actions)(Modal)
