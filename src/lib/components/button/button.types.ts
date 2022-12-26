import type { Size, Variant } from "$lib/types";
import type { ComponentProps } from "svelte";
import type Base from "../base/Base.svelte";

export interface ButtonProps extends ComponentProps<Base> {
  variant: Variant;
  size: Size;
  href: string;
  outline: boolean;
  ghost: boolean;
  wide: boolean;
  col: string;
  disabled: boolean;
  square: boolean;
  circle: boolean;
  icon: string;
  link: boolean;
  block: boolean;
}
