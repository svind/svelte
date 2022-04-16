<script>

import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Row } from "$lib";

</script>
<Card$lib <CardBody>
        This is card
    </CardBody>
</Card>

<Card>
    <CardBody>

        <CardTitle>Card Title</CardTitle>
        this has title
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, odit labore non tempora doloremque. Quae doloremque voluptas maiores, expedita natus est cum doloribus unde velit nemo a incidunt ut!
    </CardBody>
</Card>

<Card>
    <CardBody>
        <CardTitle>Card Title</CardTitle>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, dolore temporibus iste porro totam nesciunt, aliquid dolor voluptate quibusdam repellat expedita distinctio minima explicabo eveniet? Amet assumenda veniam qui vitae.
    </CardBody>
</Card>

<Card>
    <CardHeader>
        <CardTitle>

            This is card Header
        </CardTitle>
    </CardHeader>
    <CardBody>
        <CardTitle>Title</CardTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptate nesciunt necessitatibus eius adipisci, porro culpa dolorem placeat possimus a recusandae perspiciatis, delectus quibusdam sapiente veniam nulla autem, sit quasi.
    </CardBody>
    <CardFooter>
        <Button>Cancel</Button>
        <Button variant="primary">Submit</Button>
    </CardFooter>
</Card>


<Row>
    <div class="col-6">
        <Card z=12>
            <CardHeader>
                <CardTitle>
                    This is title
                </CardTitle>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos molestiae, alias sapiente dicta iste nam illum saepe eum, odio, pariatur sequi facilis vel ad dolores nesciunt quo ullam harum.
            </CardBody>
        </Card>
    </div>
    <div class="col-6">
        <Card z=2>
            <CardHeader>
                <CardTitle>
                    This is title
                </CardTitle>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos molestiae, alias sapiente dicta iste nam illum saepe eum, odio, pariatur sequi facilis vel ad dolores nesciunt quo ullam harum.
            </CardBody>
        </Card>
    </div>
    <div class="col=12 sm:col-4">
        <Card>
            <CardHeader>
                <CardTitle>
                    This is title
                </CardTitle>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos molestiae, alias sapiente dicta iste nam illum saepe eum, odio, pariatur sequi facilis vel ad dolores nesciunt quo ullam harum.
            </CardBody>
        </Card>
    </div>
    <div class="col-12 sm:col-7" >
        <Card>
            <CardHeader>
                <CardTitle>
                    This is title
                </CardTitle>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos molestiae, alias sapiente dicta iste nam illum saepe eum, odio, pariatur sequi facilis vel ad dolores nesciunt quo ullam harum.
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                    This is title
                </CardTitle>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos molestiae, alias sapiente dicta iste nam illum saepe eum, odio, pariatur sequi facilis vel ad dolores nesciunt quo ullam harum.
            </CardBody>
        </Card>
    </div>
    <br/>
    <div class="col-12 sm:col-7">
        <Card z=8>
            <CardHeader>
                <CardTitle>
                    This is title
                </CardTitle>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos molestiae, alias sapiente dicta iste nam illum saepe eum, odio, pariatur sequi facilis vel ad dolores nesciunt quo ullam harum.
            </CardBody>
        </Card>
    </div>
</Row>
