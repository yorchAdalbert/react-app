import { useState } from "react";

function EditProfile() {
  const [profile, setProfile] = useState({})

  const handleChange = ({target}) => {
    const { name, value } = target

    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(JSON.stringify(profile, '', 2))
  }  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange}
        type="text"
        value={profile.firstName || ''}
        name='firstName'
        placeholder="First Name" 
      />
      <input 
        onChange={handleChange}
        type="text"
        value={profile.lastName || ''}
        name='lastName'
        placeholder="Last Name" 
      />
      <input 
        onChange={handleChange}
        type="date"
        value={profile.bday || ''}
        name='bday'
      />
      <input 
        onChange={handleChange}
        type="password"
        value={profile.password || ''}
        name='password'
        placeholder="password" 
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditProfile

