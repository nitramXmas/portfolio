import './profile.css'
import picture from '../assets/images/picture.png'


const Profile = () => {
  return (
        <div className='profilecard'>
            <div className='userpict'>
                <img id='photo' src={picture} alt='profile_pict' />
            </div>
            <div className='bio'>
                <div className='title'>
                    <h3>Martin NOËL</h3>
                    <p>Développeur JavaScript</p>
                </div>
                <div className='text'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
  )
}

export default Profile