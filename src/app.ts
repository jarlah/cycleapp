import {div, VNode} from "@cycle/dom";
import xs,  {Stream} from "xstream";

export function App () {
  const vtree$: Stream<VNode> = xs.of(
    div("My Awesome Cycle.js app"),
  );
  const sinks = {
    DOM: vtree$,
  };
  return sinks;
}
