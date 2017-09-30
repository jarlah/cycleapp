import {div, input, p, VNode} from "@cycle/dom";
import xs,  {Stream} from "xstream";

export function App (sources: any) {

  const id$ = sources.DOM.select("input")
      .events("keyup")
      .map((ev: any) => ev.target.value)
      .filter((id: string) => !!id)
      .startWith("1");

  const request$ = id$.map((id: string) => ({
    category: "hello",
    url: "http://localhost:3000/posts/" + id,
  }));

  const response$: Stream<{ body: { title: string }}> = sources.HTTP
      .select("hello")
      .flatten();

  const vtree$: Stream<VNode> = response$
      .map((res) => res.body.title)
      .startWith("Loading...")
      .map((title) =>
        div([
          input({attrs: {type: "text"}}),
          p(title),
        ]),
      );

  return {
    DOM: vtree$,
    HTTP: request$,
  };
}
