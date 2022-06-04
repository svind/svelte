<script>
import { Button, Card, Row } from "$lib";
import ButtonList from  "svind/components/button/ButtonList.svelte";
import CardBody from "svind/components/card/CardBody.svelte";
import CardFooter from "svind/components/card/CardFooter.svelte";
import FormInput from "svind/components/form/FormInput.svelte";

let size="lg"

</script>


<h2>Row</h2>
<div class="size-{size}">

    <Card>
        <CardBody>

            
            <Row>
                <Button col=4>Button</Button>
                <FormInput col=8 value="" label="name" />
                <FormInput value="" label="email" />
                <FormInput value="" col="6" label="password" />
                <FormInput value="" col="6" label="verify password" />
                <FormInput value="" col="2" label="code"/>
                <FormInput value="" col="10" label="Phone number"/>
            </Row>
        </CardBody>
        <CardFooter position="end">
            <ButtonList>
                <Button>Cancel</Button>
                <Button variant="primary">Submit</Button>
                <Button variant="error">Remove</Button>
            </ButtonList>
        </CardFooter>
    </Card>
</div>

<style>
    h2 {
        margin-top: 2rem;
    }

    .size-xs {
        --size: 2rem;
    }


    .size-sm {
        --size: 3rem;
    }


    .size-md {
        --size: 4rem;
    }
</style>