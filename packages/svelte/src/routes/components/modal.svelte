<script>
import { Button, Card, CardBody, CardFooter } from "$lib";

import { Modal } from "$lib/components/modal";

    let modalOpen = false;
</script>
<h2>Modal</h2>
<Button variant="primary" on:click={() => modalOpen = true}>Open</Button>

<Modal bind:open={modalOpen}>
    
    <Card class="bg-light dark:bg-dark">
        <CardBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, laborum corrupti assumenda doloremque dolor maiores quos similique et ut tempore eligendi quis consequatur error ad vitae adipisci at laudantium quisquam?
        </CardBody>
        <CardFooter>
            <Button variant="error" on:click={() => modalOpen = false}>Close</Button>
        </CardFooter>
    </Card>
    
</Modal>