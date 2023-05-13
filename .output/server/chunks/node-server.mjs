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
  "/_nuxt/addEvent.8ee85cd8.js": {
    "type": "application/javascript",
    "etag": "\"280-yJGfd6YnYgBx+CzRGAS3N2My0rw\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 640,
    "path": "../public/_nuxt/addEvent.8ee85cd8.js"
  },
  "/_nuxt/addEvent.vue.0bf2267e.js": {
    "type": "application/javascript",
    "etag": "\"fbb-4t9ot1n38QKuAsXRdDgN6iv/d9I\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 4027,
    "path": "../public/_nuxt/addEvent.vue.0bf2267e.js"
  },
  "/_nuxt/admitLogin.3989f465.js": {
    "type": "application/javascript",
    "etag": "\"bcb-upmHxNbIve0gCR4YVI3XYbbLOqw\"",
    "mtime": "2023-05-12T14:41:22.335Z",
    "size": 3019,
    "path": "../public/_nuxt/admitLogin.3989f465.js"
  },
  "/_nuxt/admitLogin.8f57dc0b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-XndEZhZwVJ7/0Jzw4O2CFp25imU\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 60,
    "path": "../public/_nuxt/admitLogin.8f57dc0b.css"
  },
  "/_nuxt/admitRegister.3a428a20.js": {
    "type": "application/javascript",
    "etag": "\"f1c-J3jSSi3MX6xS6slmI0t53PAF9EQ\"",
    "mtime": "2023-05-12T14:41:22.333Z",
    "size": 3868,
    "path": "../public/_nuxt/admitRegister.3a428a20.js"
  },
  "/_nuxt/admitRegister.8e1ef60d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-MjlKyl02G5wk7EKxstqaAhGr3vI\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 60,
    "path": "../public/_nuxt/admitRegister.8e1ef60d.css"
  },
  "/_nuxt/alterEvent.16fc6877.js": {
    "type": "application/javascript",
    "etag": "\"f05-kMolLG9Ro/ATtkqQBYJzVGwASbE\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 3845,
    "path": "../public/_nuxt/alterEvent.16fc6877.js"
  },
  "/_nuxt/api.aababa14.js": {
    "type": "application/javascript",
    "etag": "\"7146-jwVFyyrncpL4qdJZXM50LRXcBns\"",
    "mtime": "2023-05-12T14:41:22.349Z",
    "size": 28998,
    "path": "../public/_nuxt/api.aababa14.js"
  },
  "/_nuxt/BookOutline.690ad98b.js": {
    "type": "application/javascript",
    "etag": "\"16926-xCHWp/Hb2tzAYK1fjgwUmjECO8w\"",
    "mtime": "2023-05-12T14:41:22.350Z",
    "size": 92454,
    "path": "../public/_nuxt/BookOutline.690ad98b.js"
  },
  "/_nuxt/browser.3909655e.js": {
    "type": "application/javascript",
    "etag": "\"fb01-+6TKb8z2nuIlgcDc5O0zEYZZbTQ\"",
    "mtime": "2023-05-12T14:41:22.349Z",
    "size": 64257,
    "path": "../public/_nuxt/browser.3909655e.js"
  },
  "/_nuxt/Button.8c0c91a9.js": {
    "type": "application/javascript",
    "etag": "\"5423-nhVUGISWfntdCasPSHeTBZ3hRhQ\"",
    "mtime": "2023-05-12T14:41:22.345Z",
    "size": 21539,
    "path": "../public/_nuxt/Button.8c0c91a9.js"
  },
  "/_nuxt/Card.d36d8e49.js": {
    "type": "application/javascript",
    "etag": "\"2008-8bHTRIV3v060DerVQR6N43xVLfk\"",
    "mtime": "2023-05-12T14:41:22.333Z",
    "size": 8200,
    "path": "../public/_nuxt/Card.d36d8e49.js"
  },
  "/_nuxt/changePassword.c051430d.js": {
    "type": "application/javascript",
    "etag": "\"1125-XrO/7tJu+grF4whpxCtr4y7XJPI\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 4389,
    "path": "../public/_nuxt/changePassword.c051430d.js"
  },
  "/_nuxt/Close.49903972.js": {
    "type": "application/javascript",
    "etag": "\"e89-gUY7jXidSP5ZW1sM0XR6Oj5q3Ag\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 3721,
    "path": "../public/_nuxt/Close.49903972.js"
  },
  "/_nuxt/context.ee3e8cc9.js": {
    "type": "application/javascript",
    "etag": "\"1069-hkxcpfBZGP4HiCdG+uGYBhF5t9Q\"",
    "mtime": "2023-05-12T14:41:22.341Z",
    "size": 4201,
    "path": "../public/_nuxt/context.ee3e8cc9.js"
  },
  "/_nuxt/DataTable.e98c7e3c.js": {
    "type": "application/javascript",
    "etag": "\"27ff9-I4pzpyNsPNoAiV1Q8Qzf+yZ2JzI\"",
    "mtime": "2023-05-12T14:41:22.353Z",
    "size": 163833,
    "path": "../public/_nuxt/DataTable.e98c7e3c.js"
  },
  "/_nuxt/deleteEvent.d521985f.js": {
    "type": "application/javascript",
    "etag": "\"36d-h838SkSPBTp8k4HbSpTLNrWWE1Y\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 877,
    "path": "../public/_nuxt/deleteEvent.d521985f.js"
  },
  "/_nuxt/entry.23c03e9b.js": {
    "type": "application/javascript",
    "etag": "\"28491-GPLRAEmI5cS385GMpnjnlKnyogI\"",
    "mtime": "2023-05-12T14:41:22.358Z",
    "size": 165009,
    "path": "../public/_nuxt/entry.23c03e9b.js"
  },
  "/_nuxt/entry.4533c49e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5195-XygKq1/T9/zlGfTyPX9W64fTZus\"",
    "mtime": "2023-05-12T14:41:22.316Z",
    "size": 20885,
    "path": "../public/_nuxt/entry.4533c49e.css"
  },
  "/_nuxt/error-404.a43c39b2.js": {
    "type": "application/javascript",
    "etag": "\"8ce-Uj+Mu6/4+aSdlvWE35sb2MNwNIU\"",
    "mtime": "2023-05-12T14:41:22.335Z",
    "size": 2254,
    "path": "../public/_nuxt/error-404.a43c39b2.js"
  },
  "/_nuxt/error-404.dd29d79a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-JYQmAncl9ODY78yRqUt9FOyUmA4\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.dd29d79a.css"
  },
  "/_nuxt/error-500.26873dcc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-fa2OB1jZnGuSyj7jz6LP6nKsFoY\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.26873dcc.css"
  },
  "/_nuxt/error-500.b60e8e21.js": {
    "type": "application/javascript",
    "etag": "\"752-PWEx6XzqQEnu0Ox/bgNsRf3OiXE\"",
    "mtime": "2023-05-12T14:41:22.341Z",
    "size": 1874,
    "path": "../public/_nuxt/error-500.b60e8e21.js"
  },
  "/_nuxt/error-component.5e29f93b.js": {
    "type": "application/javascript",
    "etag": "\"478-Wrz4ugIaGOMxwOwq+t9OvA1pRKA\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.5e29f93b.js"
  },
  "/_nuxt/fade-in-height-expand.cssr.2ce29ded.js": {
    "type": "application/javascript",
    "etag": "\"50d-btYAqSrj747Z1/ckqQJw6DL59SQ\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 1293,
    "path": "../public/_nuxt/fade-in-height-expand.cssr.2ce29ded.js"
  },
  "/_nuxt/fade-in-scale-up.cssr.7f8153a0.js": {
    "type": "application/javascript",
    "etag": "\"1eb0-RhIe/yLvR58jhLSeHIdfZZq60iA\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 7856,
    "path": "../public/_nuxt/fade-in-scale-up.cssr.7f8153a0.js"
  },
  "/_nuxt/FocusDetector.fe2d49f7.js": {
    "type": "application/javascript",
    "etag": "\"22b5-63VcgC6ILguguEWWGrFUmIVkyu4\"",
    "mtime": "2023-05-12T14:41:22.346Z",
    "size": 8885,
    "path": "../public/_nuxt/FocusDetector.fe2d49f7.js"
  },
  "/_nuxt/Follower.b634ca7e.js": {
    "type": "application/javascript",
    "etag": "\"33c4-5XCfFIDjkGiUWC80xY9ED3wpZ/k\"",
    "mtime": "2023-05-12T14:41:22.346Z",
    "size": 13252,
    "path": "../public/_nuxt/Follower.b634ca7e.js"
  },
  "/_nuxt/forgetPass.8eb51758.js": {
    "type": "application/javascript",
    "etag": "\"db2-Bw63+B3R2yQViGvrrBSqqVyQLbY\"",
    "mtime": "2023-05-12T14:41:22.345Z",
    "size": 3506,
    "path": "../public/_nuxt/forgetPass.8eb51758.js"
  },
  "/_nuxt/forgetPass.fc24fde1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-+2J4Tx5cDmVCGZ3ac5z2A7GlWnM\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 60,
    "path": "../public/_nuxt/forgetPass.fc24fde1.css"
  },
  "/_nuxt/format-length.c9d165c6.js": {
    "type": "application/javascript",
    "etag": "\"157-5ALo6txPChAD2/oP2oVSEyLbfhw\"",
    "mtime": "2023-05-12T14:41:22.336Z",
    "size": 343,
    "path": "../public/_nuxt/format-length.c9d165c6.js"
  },
  "/_nuxt/FormItem.4811c7e8.js": {
    "type": "application/javascript",
    "etag": "\"8387-sT46xSotmzB+j0HU3SsIbMLbets\"",
    "mtime": "2023-05-12T14:41:22.347Z",
    "size": 33671,
    "path": "../public/_nuxt/FormItem.4811c7e8.js"
  },
  "/_nuxt/get.bec29ee2.js": {
    "type": "application/javascript",
    "etag": "\"534-KZOu+seNE7Pb+4vX0EUdN7oaL+g\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 1332,
    "path": "../public/_nuxt/get.bec29ee2.js"
  },
  "/_nuxt/index.ffa9ce20.js": {
    "type": "application/javascript",
    "etag": "\"235-Kv7CoENOJt7F3XhjUYUiPrN00WU\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 565,
    "path": "../public/_nuxt/index.ffa9ce20.js"
  },
  "/_nuxt/Input.18ea4f6e.js": {
    "type": "application/javascript",
    "etag": "\"ad43-n+qKonq0XVOVigEJRp1ZKNyeFJw\"",
    "mtime": "2023-05-12T14:41:22.348Z",
    "size": 44355,
    "path": "../public/_nuxt/Input.18ea4f6e.js"
  },
  "/_nuxt/InputNumber.d0fa5b10.js": {
    "type": "application/javascript",
    "etag": "\"3f98c-JRrg3RmpSbBDhq/xgr623vvgOcg\"",
    "mtime": "2023-05-12T14:41:22.359Z",
    "size": 260492,
    "path": "../public/_nuxt/InputNumber.d0fa5b10.js"
  },
  "/_nuxt/joinEvent.c1722ad2.js": {
    "type": "application/javascript",
    "etag": "\"17c-oYPYwnKV5bp2Tm7w2cC+RMGbpOA\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 380,
    "path": "../public/_nuxt/joinEvent.c1722ad2.js"
  },
  "/_nuxt/joinEvent.vue.80c2317a.js": {
    "type": "application/javascript",
    "etag": "\"48d-AIOEnCylQHRagcTOsrD4HYEEJxI\"",
    "mtime": "2023-05-12T14:41:22.328Z",
    "size": 1165,
    "path": "../public/_nuxt/joinEvent.vue.80c2317a.js"
  },
  "/_nuxt/login.2f63a8b6.js": {
    "type": "application/javascript",
    "etag": "\"ba7-2OmKCII482/JdvSbLaCZ00whw8U\"",
    "mtime": "2023-05-12T14:41:22.343Z",
    "size": 2983,
    "path": "../public/_nuxt/login.2f63a8b6.js"
  },
  "/_nuxt/login.3e8a8dbd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-Uw9nirz/aSHHuW+96NLdaZbV/+c\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 60,
    "path": "../public/_nuxt/login.3e8a8dbd.css"
  },
  "/_nuxt/MessageProvider.e09f32ac.js": {
    "type": "application/javascript",
    "etag": "\"2a55-HeQ//9qkcyGi4+lu8WpRUFA6AeM\"",
    "mtime": "2023-05-12T14:41:22.346Z",
    "size": 10837,
    "path": "../public/_nuxt/MessageProvider.e09f32ac.js"
  },
  "/_nuxt/navigationBar.da89fcdb.js": {
    "type": "application/javascript",
    "etag": "\"147-9KwnX/YPyBozO2RR6kSbiKHuafw\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 327,
    "path": "../public/_nuxt/navigationBar.da89fcdb.js"
  },
  "/_nuxt/navigationBar.vue.4773e2b6.js": {
    "type": "application/javascript",
    "etag": "\"7ef3-m4dhJzkzP9sAQixypKA/CiNQueg\"",
    "mtime": "2023-05-12T14:41:22.347Z",
    "size": 32499,
    "path": "../public/_nuxt/navigationBar.vue.4773e2b6.js"
  },
  "/_nuxt/nuxt-link.8ce08475.js": {
    "type": "application/javascript",
    "etag": "\"10e9-AEh8yXfUkxbWVtxgNrSgm82y3q0\"",
    "mtime": "2023-05-12T14:41:22.335Z",
    "size": 4329,
    "path": "../public/_nuxt/nuxt-link.8ce08475.js"
  },
  "/_nuxt/personalInformation.3a819fc2.js": {
    "type": "application/javascript",
    "etag": "\"e65-7+REAdCk0RrRuuJytnZDEB8avmY\"",
    "mtime": "2023-05-12T14:41:22.337Z",
    "size": 3685,
    "path": "../public/_nuxt/personalInformation.3a819fc2.js"
  },
  "/_nuxt/personalInformation.5aba20b6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cd-zcXOGK1vYzZmvNxXIs5ra+COLX4\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 205,
    "path": "../public/_nuxt/personalInformation.5aba20b6.css"
  },
  "/_nuxt/Radio.f0de744f.js": {
    "type": "application/javascript",
    "etag": "\"10ec-+RirQTkVaYm9qnnFzD45XpH+1kg\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 4332,
    "path": "../public/_nuxt/Radio.f0de744f.js"
  },
  "/_nuxt/RadioGroup.89c2d387.js": {
    "type": "application/javascript",
    "etag": "\"229a-TBfA7sF0pqkdxT9AhG7VuWKpuUU\"",
    "mtime": "2023-05-12T14:41:22.346Z",
    "size": 8858,
    "path": "../public/_nuxt/RadioGroup.89c2d387.js"
  },
  "/_nuxt/register.2da43cfd.js": {
    "type": "application/javascript",
    "etag": "\"10ee-5mdIT26zO33dZWI4JCg+bGWV+qQ\"",
    "mtime": "2023-05-12T14:41:22.341Z",
    "size": 4334,
    "path": "../public/_nuxt/register.2da43cfd.js"
  },
  "/_nuxt/register.c7d4d77d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-brbd+JHfulxoYoGybTuMRD3ZIVA\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 60,
    "path": "../public/_nuxt/register.c7d4d77d.css"
  },
  "/_nuxt/signIn.e2f02bb8.js": {
    "type": "application/javascript",
    "etag": "\"195-CNcxhrjn+3PwXPfx1jl9wIXUv7Y\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 405,
    "path": "../public/_nuxt/signIn.e2f02bb8.js"
  },
  "/_nuxt/signIn.vue.ab26c3c2.js": {
    "type": "application/javascript",
    "etag": "\"548-AMDi4puXynRN4tmVVJIcd8cTfiw\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 1352,
    "path": "../public/_nuxt/signIn.vue.ab26c3c2.js"
  },
  "/_nuxt/signOut.cf0caf58.js": {
    "type": "application/javascript",
    "etag": "\"196-th7kNuifc+/VW3n+2yNBsuLlUpg\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 406,
    "path": "../public/_nuxt/signOut.cf0caf58.js"
  },
  "/_nuxt/signOut.vue.6ce2e45c.js": {
    "type": "application/javascript",
    "etag": "\"547-bIfnLuLn7z4dwfNPRly6Yg7R7zg\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 1351,
    "path": "../public/_nuxt/signOut.vue.6ce2e45c.js"
  },
  "/_nuxt/Space.f9a3f419.js": {
    "type": "application/javascript",
    "etag": "\"9ea-SO6SrcYrmstckVtdFGi/RcrLDTY\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 2538,
    "path": "../public/_nuxt/Space.f9a3f419.js"
  },
  "/_nuxt/square.173a50c0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-TaZeQUCnxPTe4UZMG/d28iIrxJ4\"",
    "mtime": "2023-05-12T14:41:22.318Z",
    "size": 41,
    "path": "../public/_nuxt/square.173a50c0.css"
  },
  "/_nuxt/square.2fd52c4b.js": {
    "type": "application/javascript",
    "etag": "\"3421-z0+uXLJ34g6eduT0+m6pHvutQvY\"",
    "mtime": "2023-05-12T14:41:22.346Z",
    "size": 13345,
    "path": "../public/_nuxt/square.2fd52c4b.js"
  },
  "/_nuxt/squareStore.f2ace1a1.js": {
    "type": "application/javascript",
    "etag": "\"10f-jyzkRA4u1L66R0/P416XaNpHLsA\"",
    "mtime": "2023-05-12T14:41:22.341Z",
    "size": 271,
    "path": "../public/_nuxt/squareStore.f2ace1a1.js"
  },
  "/_nuxt/type.de0dffae.js": {
    "type": "application/javascript",
    "etag": "\"6c-E37y5OT750VANZZCsVAF61Ah43k\"",
    "mtime": "2023-05-12T14:41:22.332Z",
    "size": 108,
    "path": "../public/_nuxt/type.de0dffae.js"
  },
  "/_nuxt/use-message.e4ec587d.js": {
    "type": "application/javascript",
    "etag": "\"46be-v2OXHs6UgJm0Ym5kpUCT6vVhqOc\"",
    "mtime": "2023-05-12T14:41:22.333Z",
    "size": 18110,
    "path": "../public/_nuxt/use-message.e4ec587d.js"
  },
  "/_nuxt/vee-validate.esm.991ef16c.js": {
    "type": "application/javascript",
    "etag": "\"12690-WalfUHMq3i3gi6vNtuP5NdzGtI4\"",
    "mtime": "2023-05-12T14:41:22.352Z",
    "size": 75408,
    "path": "../public/_nuxt/vee-validate.esm.991ef16c.js"
  },
  "/_nuxt/viewReleaseEvent.e8e9fb5e.js": {
    "type": "application/javascript",
    "etag": "\"d44-WEDL8zJAox5+EMDBHQ+fUMFedBA\"",
    "mtime": "2023-05-12T14:41:22.333Z",
    "size": 3396,
    "path": "../public/_nuxt/viewReleaseEvent.e8e9fb5e.js"
  },
  "/_nuxt/_commonjsHelpers.3c9a3002.js": {
    "type": "application/javascript",
    "etag": "\"25d-+BxuCbP8E3F7mFIhZLjfJDbsaZY\"",
    "mtime": "2023-05-12T14:41:22.318Z",
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
