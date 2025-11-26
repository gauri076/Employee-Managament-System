import React,{useState} from 'react'

const Header = (props) => {


  const [username, setUsername] = useState('')
  // console.log(data)

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

const logOutUser = () => {
  localStorage.setItem('loggedInUser', '')
  props.changeUser('')
  // window.location.reload()
}
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2x font-semibold'>Hello <br/><span className='text-3xl'>username 🙌</span> </h1>
        <button onClick= {logOutUser} className='bg-red-500 text-white px-2 py-2 rounded-sm text-lg font-md'>Log out </button>
    </div>
  )
}

export default Header