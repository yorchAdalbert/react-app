import { useState } from 'react';

const validPhoneNumber = /^\d{1,10}$/

function PhoneInput() {
  const [phone, setPhone] = useState('')

  const handleChange = ({target}) => {
    const newPhone = target.value
    const isValid = validPhoneNumber.test(newPhone)

    if (isValid) setPhone(newPhone)

  }

  return (
    <div>
      <label for='phone-input'>Phone:</label>
      <input type="text" id='phone-input' value={phone} onChange={handleChange}/>
    </div>
  )
}

export default PhoneInput