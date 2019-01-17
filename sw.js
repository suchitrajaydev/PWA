/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/background.jpeg",
    "revision": "99280685efc1636db02cca72c75de142"
  },
  {
    "url": "index.html",
    "revision": "41c41b11ca94e08cee168e474a30bba1"
  },
  {
    "url": "app.js",
    "revision": "dff4fdbbe1c6681c15f86cba0545b536"
  },
  {
    "url": "sw1.js",
    "revision": "3ad6c6fe36f403cb4d909d1c4a26c62f"
  },
  {
    "url": "manifest.json",
    "revision": "0b5f6497f4b6b0e250227ff6cfeb3abb"
  },
  {
    "url": "package-lock.json",
    "revision": "1ea633a35f05db0b1e90dfdcaf9f1cf2"
  },
  {
    "url": "package.json",
    "revision": "cfdf05f0f8091c012ae791965eca610f"
  },
  {
    "url": "server.js",
    "revision": "8614215a8ebedcfef759d485b96926f6"
  },
  {
    "url": "workbox-config.js",
    "revision": "174772f0dae3181777d6322d4389f5f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
