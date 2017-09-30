import {VNode, div} from '@cycle/dom'
import xs, {Stream} from 'xstream'

export type R = number;
export function App () {
  const r: R = 1;
  const vtree$: Stream<VNode> = xs.of(
    div('My Awesome Cycle.js app: #' + r)
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
