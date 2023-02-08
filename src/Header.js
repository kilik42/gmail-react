import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
const Header = () => {
  return (
    <div className='header'>
       

        <div className='header__left'>
            <IconButton>
                <MenuSharpIcon />
                <img src="https://static.vecteezy.com/system/resources/previews/002/557/425/original/google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg" alt="" width="45px"/>
            </IconButton>
        </div>
        
        <div className='header__middle'>
            <SearchIcon />
            <input placeholder='Search mail' type="text" />
            <ArrowDropDownIcon className='header__inputCaret' />
            
        </div>
        <div className='header__right'>
            {/* <Button variant="contained">Login</Button> */}
            <IconButton>
                <AppsIcon />
            </IconButton>
        </div>
     </div>
  )
}

export default Header