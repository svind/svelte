<script>

let value = 0;

</script>
<input type="range" min=0 max=12 bind:value/>
<div style:position=absolute class="card p-5 z-{value}">
    Card #{value}
</div>


{#each Array.from({length: 12}) as i, index} 

    <div class="card p-5 m-5 z-{index}">
        Card #{index}
    </div>
{/each}
