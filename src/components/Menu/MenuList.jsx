import React, {useRef, useState} from 'react'
import {AiOutlineCaretUp} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import './menu.css'

const MenuList = ({label, food}) => {
    const [isOpen, setIsOpen] = useState(false);
    const titleRef = useRef();

  return (
    <div className="menu-content">
          <button
          onClick={() => setIsOpen(!isOpen)}
          className='menu-btn'>
            {label}
            {!isOpen ? (
              <AiOutlineCaretDown />)
              :
              (<AiOutlineCaretUp />
            )}
          </button>


        {isOpen && (
          <div className="menu-title">
            {food.map((item, i) => (
              <div key={i} className='menu-list'>
                <p className="menu-name">{item.name}</p>
                <p className="menu-desc">{item.desc}</p>
              </div>  
            ))}
          </div>  
        )}
        </div>
  )
}

export default MenuList;

{/* <div className="menu-title" ref={titleRef} style={
  isOpen ? {
      height: titleRef.current.scrollHeight + "px",
      marginBottom: titleRef.current.scrollHeight + "px"

  }
      :{
      height: "0px"
  }
}>
  {food.map((item, i) => (
    <div key={i} className='menu-list'>
      <p className="menu-name">{item.name}</p>
      <p className="menu-desc">{item.desc}</p>
    </div>  
  ))}
</div>  
</div> */}