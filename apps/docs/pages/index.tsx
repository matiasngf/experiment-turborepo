import { Button, Popover, PopoverContent, PopoverTrigger } from "ui";

export default function Docs() {
  return (
    <div>
      <h1>Awesome example Docs</h1>
      <p>Nothing to see really</p>
      <Popover>
        <PopoverTrigger asChild><Button>Go to the website</Button></PopoverTrigger>
        <PopoverContent>Open <a href="http://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a> to see the awesome website</PopoverContent>
      </Popover>
    </div>
  );
}
