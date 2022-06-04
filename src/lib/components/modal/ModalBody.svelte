<script>

import { CardBody } from "../card";

export let col = 10;

</script>
<div on:click|stopPropagation class="card {col ? "col-" + col : null} bg-light dark:bg-dark">
    <CardBody>
        <slot/>
    </CardBody>
</div>