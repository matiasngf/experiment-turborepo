import { Button, Popover, PopoverContent, PopoverTrigger } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Popover>
        <PopoverTrigger asChild><Button>Go to the website</Button></PopoverTrigger>
        <PopoverContent>Open <a href="http://localhost:3001" target="_blank" rel="noreferrer">http://localhost:3001</a> to see the Docs</PopoverContent>
      </Popover>
    </div>
  );
}
