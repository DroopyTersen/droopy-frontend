import { useEffect, useState } from "react";

export const on = (obj: any, ...args: any[]) => obj.addEventListener(...args);
export const off = (obj: any, ...args: any[]) => obj.removeEventListener(...args);

const patchHistoryMethod = (method) => {
  const original = history[method];

  history[method] = function(state) {
    const result = original.apply(this, arguments);
    const event = new Event(method.toLowerCase());

    (event as any).state = state;

    window.dispatchEvent(event);

    return result;
  };
};

patchHistoryMethod("pushState");
patchHistoryMethod("replaceState");

export interface LocationSensorState {
  trigger: string;
  state?: any;
  length?: number;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
}

const buildState = (trigger: string) => {
  const { state, length } = history;

  const { hash, host, hostname, href, origin, pathname, port, protocol, search } = location;

  return {
    trigger,
    state,
    length,
    hash,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol,
    search,
  };
};

const useLocation = (): LocationSensorState => {
  const [state, setState] = useState(buildState("load"));

  useEffect(() => {
    const onPopstate = () => setState(buildState("popstate"));
    const onPushstate = () => setState(buildState("pushstate"));
    const onReplacestate = () => setState(buildState("replacestate"));

    on(window, "popstate", onPopstate);
    on(window, "pushstate", onPushstate);
    on(window, "replacestate", onReplacestate);

    return () => {
      off(window, "popstate", onPopstate);
      off(window, "pushstate", onPushstate);
      off(window, "replacestate", onReplacestate);
    };
  }, []);

  return state;
};

export default useLocation;
