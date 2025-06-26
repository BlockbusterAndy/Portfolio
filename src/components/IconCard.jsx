import {useState} from 'react'

const IconCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const {url, name} = props
  return (
    <div className='m-1.5 mb-3 group-hover:blur-lg md:w-[50px] md:h-[50px]' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
        <div className='p-3 icon-glassmorphism hover-icon'>
            <img src={url}  width={28}/>
        </div>
        <p className='text-secondaryText font-medium text-xs text-center'>{isHovered ? name : " "}</p>
    </div>
  )
}

export default IconCard