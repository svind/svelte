<script>
import Col from "$lib/components/grid/Col.svelte";

</script>
<div>
    <h2>Grid</h2>

    <div class="row">
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 3, lg: 2, xl: 1}}>col-1</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 9, lg: 10, xl: 11}}>col-11</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 3, lg: 2, xl: 2}}>col-2</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 9, lg: 10, xl: 10}}>col-10</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 3, lg: 4, xl: 3}}>col-3</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 9, lg: 8, xl: 9}}>col-9</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 6, lg: 4, xl: 4}}>col-4</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 6, lg: 8, xl: 8}}>col-8</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 5}}>col-5</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 7}}>col-7</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}>col-6</Col>
        <Col class="p-2 bg-light dark:bg-dark" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}>col-6</Col>
    </div>

    <br>
    <div class="row">
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 3, lg: 2, xl: 1}} offset={{md: 9,  lg: 1, xl: 11}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 3, lg: 2, xl: 2}} offset={{md: 9,  lg: 1, xl: 10}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 3, lg: 4, xl: 3}} offset={{md: 9,  lg: 8, xl: 9}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} offset={{md: 6,  lg: 8, xl: 8}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 5}} offset={{md: 6,  lg: 6, xl: 7}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}} offset={{md: 6,  lg: 6, xl: 6}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}} offset={{md: 6,  lg: 6, xl: 6}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 6, lg: 6, xl: 7}} offset={{md: 6,  lg: 6, xl: 5}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 6, lg: 8, xl: 8}} offset={{md: 6,  lg: 4, xl: 4}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 9, lg: 8, xl: 9}} offset={{md: 3,  lg: 4, xl: 3}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 9, lg: 10, xl: 2}} offset={{md: 3,  lg: 4, xl: 2}}>
    <input class="form-control"/>
        </Col>
        <Col class="dark:bg-dark md:none lg:flex" col={{xs: 12, sm: 6, md: 9, lg: 10, xl: 2}} offset={{md: 3,  lg: 9, xl: 2}}>
    <input class="form-control"/>
    </Col>
    </div>
</div>