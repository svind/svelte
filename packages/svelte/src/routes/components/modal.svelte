<script>
  import { Button, Card, CardBody, CardFooter, Checkbox, Col } from "$lib";

  import { Modal } from "$lib/components/modal";

  let statics = false;
  let modalOpen = false;
  let modal2Open = false;
</script>

<h2>Modal</h2>
<Button variant="primary" on:click={() => (modalOpen = true)}>Open</Button>
<Button variant="primary" on:click={() => (modal2Open = true)}>Open 2</Button>

<Modal static={statics} bind:open={modalOpen}>
    <Col col="12" sm=10 md=8 lg=6 xl=4 >
      <Card class="bg-light dark:bg-dark">
        <CardBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, laborum
          corrupti assumenda doloremque dolor maiores quos similique et ut tempore
          eligendi quis consequatur error ad vitae adipisci at laudantium
          quisquam?
          <Checkbox bind:value={statics}>Static</Checkbox>
        </CardBody>
        <CardFooter>
          <Button variant="error" on:click={() => (modalOpen = false)}
            >Close</Button
          >
        </CardFooter>
      </Card>
    </Col>
  </Modal>

<Modal static={statics} bind:open={modal2Open}>
  <Col col="12" sm=10 md=8 lg=6 xl=4 >
    <Card class="bg-light dark:bg-dark">
      <CardBody>
          2
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, laborum
       
        
        <Checkbox bind:value={statics}>Static</Checkbox>
      </CardBody>
      <CardFooter>
        <Button variant="error" on:click={() => (modalOpen = false)}
          >Close</Button
        >
      </CardFooter>
    </Card>
  </Col>
</Modal>
