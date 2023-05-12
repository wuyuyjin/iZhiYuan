globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-04-21T02:05:22.000Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/addEvent.b8b6850c.js": {
    "type": "application/javascript",
    "etag": "\"280-utKndkjKfGr0HVxqfXEUsdVGct4\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 640,
    "path": "../public/_nuxt/addEvent.b8b6850c.js"
  },
  "/_nuxt/addEvent.vue.ecfef2ca.js": {
    "type": "application/javascript",
    "etag": "\"fbb-v0iDEvCil5vUsqbmdXJIT9LrKuU\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 4027,
    "path": "../public/_nuxt/addEvent.vue.ecfef2ca.js"
  },
  "/_nuxt/admitLogin.1ecb36c7.js": {
    "type": "application/javascript",
    "etag": "\"bcb-aVR7/M71i6HKEb+b6anY5SaHQb8\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 3019,
    "path": "../public/_nuxt/admitLogin.1ecb36c7.js"
  },
  "/_nuxt/admitLogin.8f57dc0b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-XndEZhZwVJ7/0Jzw4O2CFp25imU\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 60,
    "path": "../public/_nuxt/admitLogin.8f57dc0b.css"
  },
  "/_nuxt/admitRegister.8e1ef60d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-MjlKyl02G5wk7EKxstqaAhGr3vI\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 60,
    "path": "../public/_nuxt/admitRegister.8e1ef60d.css"
  },
  "/_nuxt/admitRegister.d6f3c314.js": {
    "type": "application/javascript",
    "etag": "\"f1c-w2prIUVW1nH6DmIFdqevQTHFKAk\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 3868,
    "path": "../public/_nuxt/admitRegister.d6f3c314.js"
  },
  "/_nuxt/alterEvent.46ae7d7b.js": {
    "type": "application/javascript",
    "etag": "\"f05-D0BQsYdwVnDoRZ9TOD6UqbJLohE\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 3845,
    "path": "../public/_nuxt/alterEvent.46ae7d7b.js"
  },
  "/_nuxt/api.5d75f8ba.js": {
    "type": "application/javascript",
    "etag": "\"7149-sKaGjeQLCFxySwRS0UOD9heXrL4\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 29001,
    "path": "../public/_nuxt/api.5d75f8ba.js"
  },
  "/_nuxt/BookOutline.0d12e07f.js": {
    "type": "application/javascript",
    "etag": "\"16926-LKGdGm/k7pUVCNe5hvuO4QD+aAU\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 92454,
    "path": "../public/_nuxt/BookOutline.0d12e07f.js"
  },
  "/_nuxt/browser.6edf931c.js": {
    "type": "application/javascript",
    "etag": "\"fb01-IbAo77MyjuIarRd89RstOqgu3MI\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 64257,
    "path": "../public/_nuxt/browser.6edf931c.js"
  },
  "/_nuxt/Button.f7a6571a.js": {
    "type": "application/javascript",
    "etag": "\"5423-iSYjfYMwSG59BK/DS8078S+qkws\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 21539,
    "path": "../public/_nuxt/Button.f7a6571a.js"
  },
  "/_nuxt/Card.27f87ae1.js": {
    "type": "application/javascript",
    "etag": "\"2008-kxdUXAeZilbmI2lyfwZZFf5KMgc\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 8200,
    "path": "../public/_nuxt/Card.27f87ae1.js"
  },
  "/_nuxt/changePassword.b493fe8d.js": {
    "type": "application/javascript",
    "etag": "\"10f2-071HqTtDdpP9NCoyrjW0mlW7H4g\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 4338,
    "path": "../public/_nuxt/changePassword.b493fe8d.js"
  },
  "/_nuxt/Close.921ce76f.js": {
    "type": "application/javascript",
    "etag": "\"e89-4goImHYR34hYG8IzLUvBmHFJvnY\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 3721,
    "path": "../public/_nuxt/Close.921ce76f.js"
  },
  "/_nuxt/context.a87e34a6.js": {
    "type": "application/javascript",
    "etag": "\"1069-uafZggLoNoVvJfTREhIOH6RSDYY\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 4201,
    "path": "../public/_nuxt/context.a87e34a6.js"
  },
  "/_nuxt/DataTable.848de72e.js": {
    "type": "application/javascript",
    "etag": "\"27ff9-fclGamStUDf2T+6NPfw62H+9HME\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 163833,
    "path": "../public/_nuxt/DataTable.848de72e.js"
  },
  "/_nuxt/deleteEvent.5e93d66a.js": {
    "type": "application/javascript",
    "etag": "\"36d-6PsIf/ylVa65wb0Oa9hEzT3Vf20\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 877,
    "path": "../public/_nuxt/deleteEvent.5e93d66a.js"
  },
  "/_nuxt/entry.4533c49e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5195-XygKq1/T9/zlGfTyPX9W64fTZus\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 20885,
    "path": "../public/_nuxt/entry.4533c49e.css"
  },
  "/_nuxt/entry.8cc5d05e.js": {
    "type": "application/javascript",
    "etag": "\"28491-tT4SYmhYLHlMj6f2uSCy5NClCis\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 165009,
    "path": "../public/_nuxt/entry.8cc5d05e.js"
  },
  "/_nuxt/error-404.dd29d79a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-JYQmAncl9ODY78yRqUt9FOyUmA4\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.dd29d79a.css"
  },
  "/_nuxt/error-404.e9a00b66.js": {
    "type": "application/javascript",
    "etag": "\"8ce-P6E+i/AdmVFPK/pxVp+wwvwKsRA\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 2254,
    "path": "../public/_nuxt/error-404.e9a00b66.js"
  },
  "/_nuxt/error-500.26873dcc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-fa2OB1jZnGuSyj7jz6LP6nKsFoY\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.26873dcc.css"
  },
  "/_nuxt/error-500.5c9a6f2d.js": {
    "type": "application/javascript",
    "etag": "\"752-CGQuYmpvUCEzbMV6GiiOLWFhbYQ\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 1874,
    "path": "../public/_nuxt/error-500.5c9a6f2d.js"
  },
  "/_nuxt/error-component.a553ca0a.js": {
    "type": "application/javascript",
    "etag": "\"478-t/10k6IAFixeOWzDN123CPiw9GM\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.a553ca0a.js"
  },
  "/_nuxt/fade-in-height-expand.cssr.ef839745.js": {
    "type": "application/javascript",
    "etag": "\"50d-Ui8Bn/8qvpLYbtryj2xOSQ0GwDM\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 1293,
    "path": "../public/_nuxt/fade-in-height-expand.cssr.ef839745.js"
  },
  "/_nuxt/fade-in-scale-up.cssr.93b43231.js": {
    "type": "application/javascript",
    "etag": "\"1eb0-pgXDjou4tkdn2tu+e3URGn6+tvk\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 7856,
    "path": "../public/_nuxt/fade-in-scale-up.cssr.93b43231.js"
  },
  "/_nuxt/FocusDetector.33cc2fb2.js": {
    "type": "application/javascript",
    "etag": "\"22b5-LUTjeVsJIKUdGdKnslBg+R3jgQg\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 8885,
    "path": "../public/_nuxt/FocusDetector.33cc2fb2.js"
  },
  "/_nuxt/Follower.940f9fd2.js": {
    "type": "application/javascript",
    "etag": "\"33c4-WlDKSkmGsu09jwfoDKUJWH5zJwA\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 13252,
    "path": "../public/_nuxt/Follower.940f9fd2.js"
  },
  "/_nuxt/forgetPass.6f11f647.js": {
    "type": "application/javascript",
    "etag": "\"db2-NuWZ+29/r+qMxTu/N2RSJ016BNQ\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 3506,
    "path": "../public/_nuxt/forgetPass.6f11f647.js"
  },
  "/_nuxt/forgetPass.fc24fde1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-+2J4Tx5cDmVCGZ3ac5z2A7GlWnM\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 60,
    "path": "../public/_nuxt/forgetPass.fc24fde1.css"
  },
  "/_nuxt/format-length.c9d165c6.js": {
    "type": "application/javascript",
    "etag": "\"157-5ALo6txPChAD2/oP2oVSEyLbfhw\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 343,
    "path": "../public/_nuxt/format-length.c9d165c6.js"
  },
  "/_nuxt/FormItem.54a84351.js": {
    "type": "application/javascript",
    "etag": "\"8387-JdajbAE2e2kCYoODQvSg1KLhGv8\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 33671,
    "path": "../public/_nuxt/FormItem.54a84351.js"
  },
  "/_nuxt/get.29bc1e43.js": {
    "type": "application/javascript",
    "etag": "\"534-w8E5andCXsaNIBvmTvB5SC2TazA\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 1332,
    "path": "../public/_nuxt/get.29bc1e43.js"
  },
  "/_nuxt/index.559d6abd.js": {
    "type": "application/javascript",
    "etag": "\"235-VqXLyjV89uYuQtYbQvZnA/oHjhc\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 565,
    "path": "../public/_nuxt/index.559d6abd.js"
  },
  "/_nuxt/Input.445e887b.js": {
    "type": "application/javascript",
    "etag": "\"ad43-t++IU92b68+1aYhJRG0grndqKm4\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 44355,
    "path": "../public/_nuxt/Input.445e887b.js"
  },
  "/_nuxt/InputNumber.22e6c9d5.js": {
    "type": "application/javascript",
    "etag": "\"3f98c-oD8gFkt8h/3ONufi6jc+wMgAIUY\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 260492,
    "path": "../public/_nuxt/InputNumber.22e6c9d5.js"
  },
  "/_nuxt/joinEvent.b51902b1.js": {
    "type": "application/javascript",
    "etag": "\"17c-n7rApqIthbEOnxM296RP2TPjVfU\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 380,
    "path": "../public/_nuxt/joinEvent.b51902b1.js"
  },
  "/_nuxt/joinEvent.vue.71cce538.js": {
    "type": "application/javascript",
    "etag": "\"48d-uWP4WjTeLth9J61HHzPp7mGcinw\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 1165,
    "path": "../public/_nuxt/joinEvent.vue.71cce538.js"
  },
  "/_nuxt/login.3e8a8dbd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-Uw9nirz/aSHHuW+96NLdaZbV/+c\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 60,
    "path": "../public/_nuxt/login.3e8a8dbd.css"
  },
  "/_nuxt/login.e35aa4aa.js": {
    "type": "application/javascript",
    "etag": "\"ba7-UwzIkAr1GheOC4Eih5GEE6ofVmk\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 2983,
    "path": "../public/_nuxt/login.e35aa4aa.js"
  },
  "/_nuxt/MessageProvider.e58147c2.js": {
    "type": "application/javascript",
    "etag": "\"2a55-CFf9BXgzlOQB/FWozl1CSUE772U\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 10837,
    "path": "../public/_nuxt/MessageProvider.e58147c2.js"
  },
  "/_nuxt/navigationBar.7d8b7718.js": {
    "type": "application/javascript",
    "etag": "\"147-GDJPc6InB+q8tFq2TyEPSGYtk/I\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 327,
    "path": "../public/_nuxt/navigationBar.7d8b7718.js"
  },
  "/_nuxt/navigationBar.vue.b9eb8499.js": {
    "type": "application/javascript",
    "etag": "\"7ef3-3Sa7yCyT9xGduMvWf7ygqK7YXwg\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 32499,
    "path": "../public/_nuxt/navigationBar.vue.b9eb8499.js"
  },
  "/_nuxt/nuxt-link.86ac068c.js": {
    "type": "application/javascript",
    "etag": "\"10e9-MtSlpFDUl+xgGjp0liRUzfWCxYY\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 4329,
    "path": "../public/_nuxt/nuxt-link.86ac068c.js"
  },
  "/_nuxt/personalInformation.1b743f25.js": {
    "type": "application/javascript",
    "etag": "\"e65-cfODVwAgnjoOpNiVH7f3U2JLRFU\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 3685,
    "path": "../public/_nuxt/personalInformation.1b743f25.js"
  },
  "/_nuxt/personalInformation.d6a7a0da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cd-fnJnkijtflzSSglkvj+jJJc+fiQ\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 205,
    "path": "../public/_nuxt/personalInformation.d6a7a0da.css"
  },
  "/_nuxt/Radio.2d9f9d02.js": {
    "type": "application/javascript",
    "etag": "\"10ec-YUiFAkqqgAnntwxTLIiSD5DOeus\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 4332,
    "path": "../public/_nuxt/Radio.2d9f9d02.js"
  },
  "/_nuxt/RadioGroup.507c37ab.js": {
    "type": "application/javascript",
    "etag": "\"229a-n0HBzUMitdZ2gr2d+l4AOnncS88\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 8858,
    "path": "../public/_nuxt/RadioGroup.507c37ab.js"
  },
  "/_nuxt/register.c6a69207.js": {
    "type": "application/javascript",
    "etag": "\"10ee-KbicTYGIa6ZPBH8a1FKJAOQu8+A\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 4334,
    "path": "../public/_nuxt/register.c6a69207.js"
  },
  "/_nuxt/register.c7d4d77d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-brbd+JHfulxoYoGybTuMRD3ZIVA\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 60,
    "path": "../public/_nuxt/register.c7d4d77d.css"
  },
  "/_nuxt/signIn.0fb0be02.js": {
    "type": "application/javascript",
    "etag": "\"195-MNHYklepJ0lDfoe8+TS1h/PRNw0\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 405,
    "path": "../public/_nuxt/signIn.0fb0be02.js"
  },
  "/_nuxt/signIn.vue.6ec7c323.js": {
    "type": "application/javascript",
    "etag": "\"548-NTal0knJw3VBHPS+cPzEjKoryA8\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 1352,
    "path": "../public/_nuxt/signIn.vue.6ec7c323.js"
  },
  "/_nuxt/signOut.dec433c1.js": {
    "type": "application/javascript",
    "etag": "\"196-9/Evzzki3VPrMNSmtNEIe1d5sLY\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 406,
    "path": "../public/_nuxt/signOut.dec433c1.js"
  },
  "/_nuxt/signOut.vue.61a97e8c.js": {
    "type": "application/javascript",
    "etag": "\"547-q34zshDb7MEi32F4bs221CptmI4\"",
    "mtime": "2023-05-12T06:07:50.254Z",
    "size": 1351,
    "path": "../public/_nuxt/signOut.vue.61a97e8c.js"
  },
  "/_nuxt/Space.b2dd83df.js": {
    "type": "application/javascript",
    "etag": "\"9ea-vLKniow07dqqA1JJ9ph1UVeDF+8\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 2538,
    "path": "../public/_nuxt/Space.b2dd83df.js"
  },
  "/_nuxt/square.262f9951.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-Mqbihht8ZqvIShtBPW1tpxk5cyU\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 41,
    "path": "../public/_nuxt/square.262f9951.css"
  },
  "/_nuxt/square.86052c83.js": {
    "type": "application/javascript",
    "etag": "\"33f1-uyXy6ycHlvcMHBoTl66hQoR0AyQ\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 13297,
    "path": "../public/_nuxt/square.86052c83.js"
  },
  "/_nuxt/squareStore.4896160c.js": {
    "type": "application/javascript",
    "etag": "\"10f-PUqib8v41cKCi9Mg/+pZmMZC9N8\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 271,
    "path": "../public/_nuxt/squareStore.4896160c.js"
  },
  "/_nuxt/type.ace41c4a.js": {
    "type": "application/javascript",
    "etag": "\"6c-iImBz/+2F9b3fRzpT0RdXxFLil8\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 108,
    "path": "../public/_nuxt/type.ace41c4a.js"
  },
  "/_nuxt/use-message.b9be53ef.js": {
    "type": "application/javascript",
    "etag": "\"46be-FCISQFX3MJmtzU28WsHtIE7IupE\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 18110,
    "path": "../public/_nuxt/use-message.b9be53ef.js"
  },
  "/_nuxt/vee-validate.esm.e72ddff5.js": {
    "type": "application/javascript",
    "etag": "\"12690-LCurK0GlLv8uaNk7+yq467Ro6/U\"",
    "mtime": "2023-05-12T06:07:50.270Z",
    "size": 75408,
    "path": "../public/_nuxt/vee-validate.esm.e72ddff5.js"
  },
  "/_nuxt/viewReleaseEvent.a1e570c3.js": {
    "type": "application/javascript",
    "etag": "\"d44-Wr0K/NrMfClisG5Mctu7f/E48PE\"",
    "mtime": "2023-05-12T06:07:50.260Z",
    "size": 3396,
    "path": "../public/_nuxt/viewReleaseEvent.a1e570c3.js"
  },
  "/_nuxt/_commonjsHelpers.3c9a3002.js": {
    "type": "application/javascript",
    "etag": "\"25d-+BxuCbP8E3F7mFIhZLjfJDbsaZY\"",
    "mtime": "2023-05-12T06:07:50.239Z",
    "size": 605,
    "path": "../public/_nuxt/_commonjsHelpers.3c9a3002.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_iPWhDd = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_iPWhDd, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_iPWhDd, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
