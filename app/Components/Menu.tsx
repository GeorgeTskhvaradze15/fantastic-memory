import {MenuItem} from './MenuItem'

export const Menu = () => {
    return(
        <div>
            <MenuItem title="5" />
            <MenuItem title="4" />
            <MenuItem title="3" />
            <MenuItem title="2" />
            <MenuItem title="1" />

            <MenuItem>
                oke
            </MenuItem>
            <MenuItem>
                oke2
            </MenuItem>
            <MenuItem>
                oke3
            </MenuItem>
            <MenuItem size = "big">
                ke4
            </MenuItem>
        </div>
    )
}