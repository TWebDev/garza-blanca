import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Card from '../Elements/Card';
import Button from '../Elements/Button';
import Field from '../Components/FormItems/Field';
import DropDown from '../Components/FormItems/DropDown';
import Radio from '../Components/FormItems/Radio';
import Select from '../Components/FormItems/Select';
import CheckBox from '../Components/FormItems/CheckBox';

const Mobile = (props) => {
  let
  {
    formFieldSet,

    mobileForm,

    changeRadio,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    toggleMobileForm,
    handleOptionChange,
    updateFormName, 
    updateFormLast, 
    updateFormPhone,
    updateFormEmail,
  } = props;

  

  const validateForm = () => {

    if ( nameVal && lastVal && phoneVal && mailVal && changeRadio ) {

      return ('button is-secondary has-shadow');

    } else {

      return ('button is-static');
      
    }
  }

  const labelStyle = 'label has-text-white';
  const controlIcon = 'control has-icons-left has-shadow';

  return (
    <React.Fragment>
      
      {/* Header */}
    <div className="box is-radiusless bg-header is-flex">
      <Button Style='button is-blue top-margin'>
        <i className='fas fa-phone'></i>
        <span className='left-margin'>
          <a href="tel: +1 844 598 3564" className='has-text-white '>Call us now!</a>
        </span>
      </Button>
    </div>
    <Card Style='box is-radiusless is-gold'>
      <h1 className="title is-size-5">Purchase a property in Mexico is possible</h1>
      <hr className="is-divider"></hr>
      <h1 className="title is-size-4">The only thing you need is a Deed of Trust</h1>
    </Card>
    <Card Style='box is-radiusless is-blue is-flex flex-column'>
      <h1 className="title">Deed of Trust?</h1>
      <p className='has-text-white has-text-justified'>While a deed of trust also known as fideicomiso, may sound too complicated, we can assure the process is not as complex or time consuming as you may think. Although it is necessary to buy land in Mexico if you are not a citizen.</p>
      <div>
        <div className="mc_embed_signup">
          <form action="https://gmail.us20.list-manage.com/subscribe/post?u=18fc1557072305c8be7a46adb&amp;id=a8290878ac"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
            novalidate>
            <div className="columns">
              <div className={`"column" ${ mobileForm ? ('show') : ('hide') }`}>
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

                <hr className="is-divider"></hr>

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

                  <hr className="is-divider"></hr>

                  <Button type='submit' value='Subscribe' name="subscribe" id="mc-embedded-subscribe"
                    Style={validateForm()}
                    clickHandler={toggleMobileForm}
                    >
                      Submit
                  </Button>

                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
      <span className={mobileForm ? ('know-more') : ('has-text-white')}>Click to know more</span>
      <Button clickHandler={toggleMobileForm}>
        <span className='icon has-text-white'>
          <i className={mobileForm ? ('fas fa-chevron-up') : ('fas fa-chevron-down')}></i>
        </span>
      </Button>
    </Card>
    <Card Style='box is-radiusless plants-bg is-flex flex-column'>
      <h1 className="title">
        Still have doubts?
      </h1>
      <p className='has-text-white has-text-justified'>
        Don’t worry we have a team of specialists ready to help you out.
        Your real estate agent will work hand by hand with the Notario Publico (or notary), to smooth out your process.
        Finally your dream of living in paradise can become reality, and we are here to help you make it happen.
      </p>
      <Button Style='button is-blue top-margin'>
        <i className='fas fa-phone'></i>
        <span className='left-margin'>
          <a href="tel: +1 844 598 3564" className='has-text-white '>Call an expert</a>
        </span>
      </Button>
    </Card>
    <div className="box is-radiusless is-secondary"></div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ landingActions }) => {
  const {
    mobileForm,
    changeRadio,
    thankYouActive,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  } = landingActions
  return {
    mobileForm,
    mobileForm,
    changeRadio,
    thankYouActive,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  }
}

export default connect(mapStateToProps, actions)(Mobile);