import {useState} from 'react'

const IconCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const {url, name} = props
  return (
    <div className='m-2 mb-4 group-hover:blur-lg md:w-[65px] md:h-[65px]' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
        <div className='p-4 icon-glassmorphism hover-icon'>
            <img src={url}  width={35}/>
        </div>
        <p className='text-secondaryText font-medium text-sm text-center'>{isHovered ? name : " "}</p>
    </div>
  )
}

export default IconCard