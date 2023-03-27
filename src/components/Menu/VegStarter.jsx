import React, {useState} from 'react'
import {AiOutlineCaretUp} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'

const VegStarter = ({label, food}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-content">
          <button
          onClick={() => setIsOpen((prev) => !prev)}
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

export default VegStarter