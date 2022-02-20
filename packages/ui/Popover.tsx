import * as PopoverPrimitive from "@radix-ui/react-popover";
import { styled } from "./stitches.config";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = styled(PopoverPrimitive.Content, {
  border: "solid 1px #ccc",
  background: "white",
  padding: "1em",
});
