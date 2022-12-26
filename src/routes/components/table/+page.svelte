<script>

import { Table, TableBody, TableCell, TableHead, TableRow } from "$lib";

</script>
<Table compact hover striped>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Job</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>John</TableCell>
            <TableCell>25</TableCell>
            <TableCell>Developer</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>24</TableCell>
            <TableCell>Designer</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell>23</TableCell>
            <TableCell>Manager</TableCell>
        </TableRow>
    </TableBody>

</Table>