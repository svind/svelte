<script lang="ts">
    export let target: string = undefined;

    let collapsed = true;

    function click() {
        const element = document.getElementById(target)

        console.log('click', element)
        if(element) {

            if(element.classList.contains('open')) {
                collapsed = true;
                element.classList.remove('open');
            } else {
                collapsed = false;
                element.classList.add('open');
            }
        }

    }
</script>
<button on:click={click} class="navbar-toggler" class:collapsed></button>