<script lang="ts">

import { Button, Checkbox, Dropdown, FormInput, Menu, MenuItem } from "$lib";


    let align: 'start' | 'end' = 'start' 
    let position: 'left' | 'top' | 'right' | 'bottom' = 'left'
</script>
<h2>Dropdown</h2>

<FormInput label="position" bind:value={position}/>
<FormInput label="align" bind:value={align}/>

<div class="flex items-center justify-center  p-5 m-5">

<Dropdown {position} {align}>
    <Button slot="target">Open</Button>
    <Menu>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
    </Menu>
</Dropdown>
</div>