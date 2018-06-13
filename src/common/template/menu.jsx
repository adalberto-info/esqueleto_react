import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Cadastros' icon='edit'>
            <MenuItem path='#cadastros'
                      label='Cadastro de Usuários' icon='filing' />
        </MenuTree>
    </ul>
)   