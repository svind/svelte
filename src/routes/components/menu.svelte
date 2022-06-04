<script>
import {Icon, Menu, MenuDivider, MenuItem} from "$lib";

</script>
<div>

    <h2>Menu</h2>
    <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
    </Menu>

    <h2>Compact</h2>
    <Menu compact>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
    </Menu>

    <h2>
        With Icon
    </h2>
    <Menu>
        <MenuItem>
            <Icon icon="fa-solid:plus"/>
            add
        </MenuItem> 
         <MenuItem>
            <Icon icon="fa-solid:user"/>
            user
        </MenuItem>
          <MenuItem>
            <Icon icon="fa-solid:home"/>
            Home
        </MenuItem>
    </Menu>

    <h2>
        rounded
    </h2>
    <Menu rounded>
        <MenuItem>
            <Icon icon="fa-solid:plus"/>
            add
        </MenuItem> 
         <MenuItem>
            <Icon icon="fa-solid:user"/>
            user
        </MenuItem>
          <MenuItem>
            <Icon icon="fa-solid:home"/>
            Home
        </MenuItem>
    </Menu>

    <Menu compact rounded>
        <MenuItem>
            <Icon icon="fa-solid:plus"/>
            add
        </MenuItem> 
         <MenuItem>
            <Icon icon="fa-solid:user"/>
            user
        </MenuItem>
          <MenuItem>
            <Icon icon="fa-solid:home"/>
            Home
        </MenuItem>
    </Menu>

    <h2>
        rounded
    </h2>
    <Menu bordered rounded>
        <MenuItem>
            <Icon icon="fa-solid:plus"/>
            add
        </MenuItem> 
         <MenuItem>
            <Icon icon="fa-solid:user"/>
            user
        </MenuItem>
          <MenuItem>
            <Icon icon="fa-solid:home"/>
            Home
        </MenuItem>
    </Menu>

    <Menu bordered compact rounded>
        <MenuItem disabled>
            <Icon icon="fa-solid:plus"/>
            add
        </MenuItem> 
        <MenuDivider/>
         <MenuItem>
            <Icon icon="fa-solid:user"/>
            user
        </MenuItem>
          <MenuItem disabled>
            <Icon icon="fa-solid:home"/>
            Home
        </MenuItem>
    </Menu>
</div>
