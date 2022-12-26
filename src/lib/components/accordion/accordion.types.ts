import type { Writable } from "svelte/store";

export type AccordionContext = {
  mount: (string) => void;
  destroy: (string) => void;
  toggle: (string) => void;
  activeItems: Writable<string[]>;
};
