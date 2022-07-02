<script lang="ts">
    import { Accordion, AccordionItem } from '$lib/components';
  </script>
  
  <Accordion stayOpen>
    <AccordionItem active title="Home">Fallbrook</AccordionItem>
    <AccordionItem title="School">
      <a href="#home">Buena Vista Elementary</a>
    </AccordionItem>
    <AccordionItem title="Library">UCSB Library</AccordionItem>
  </Accordion>