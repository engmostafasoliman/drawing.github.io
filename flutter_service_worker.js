'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fa236424b96fed7d5fc3469caf5c690a",
".git/config": "283146b51850838fe83192fb7bba9500",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c9d06b0a9863fc38835851d693657a43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d35ce543fdb40fa9e8dd396e1373076e",
".git/logs/refs/heads/main": "cb7f05e95972d342cb792254afa3de3e",
".git/logs/refs/remotes/origin/main": "3d1d41b30467b088689c9f389fed0e5f",
".git/objects/12/337806b937be319306d05e47339fe8e228127e": "97aabc23f9606e94bc831b1e6117a133",
".git/objects/19/0330c9f2cd584522d93d56bba2ad944f9d8140": "07a102890d9f6b1ecb8a413d2887e65d",
".git/objects/25/3a4f68619330c725f8c8e27d3c9d3ff0890e33": "9013d356214fc3900beb22435c86de7d",
".git/objects/3e/0f2753bffcfa2c5892efec896731d2303905b0": "f93e90fbe170afd62d9c5ade453ec5f7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/57/fea50976c70fb4c561976c2ba8703596c0b93e": "eee94c04c7eb79a1264e4fb09b9c0160",
".git/objects/7a/5a71c395a466b3180f5400eee9fbbeee47786e": "e2d19bb262b3bdf192db1753a4ac24a9",
".git/objects/8c/662e7cd03f460541c63225959c4f391a9e893d": "3e950f6111842f2498f5b9f138b302dc",
".git/objects/bd/91cfc3decfc7d695ac01119260b7b4cc1985af": "95e3b6894e4b57c2183986d3c6eed6cf",
".git/objects/d5/aed54a66827d86137555677fdbee2b9d577c3e": "3cc811cf2313c904aa7dcb95bf254c2c",
".git/objects/ee/7980b9217c44dd5a1e35a94a8044c184aef593": "dd31cde14459af4c91c6f390fa7c4953",
".git/objects/fc/1d08fd95b5acf880501c32aa949698d9797292": "63dfe96173da7c5a83281762dcd471b1",
".git/refs/heads/main": "f807274729a72965b1d47f92922a1823",
".git/refs/remotes/origin/main": "f807274729a72965b1d47f92922a1823",
"assets/AssetManifest.bin": "7d5c601cf2c8532a36c567dba64b061f",
"assets/AssetManifest.bin.json": "605378eb97e7599b1699bb748e83f2a7",
"assets/AssetManifest.json": "701b791fbd63facc45ce5348cc47707e",
"assets/assets/background_board/black_board.png": "9edf09a1b30def863a5798d7c966f3d4",
"assets/assets/background_board/blue_cell.jpg": "e168ca1b0ca7547d185b117a0d76136c",
"assets/assets/background_board/football_background.png": "51c49948002ec3b63d43c8887f248df8",
"assets/assets/background_board/line_pattern.jpg": "ce50a9c220dc278c9968a69393354004",
"assets/assets/background_board/main_board.png": "b715254c9b712ebf3da1cec8f4717f8b",
"assets/assets/background_board/note_book.png": "88dc83625bb8f831bba629757cccc052",
"assets/assets/background_board/small_cell.png": "d51930668183e0ca15bc6e18bb5a56a9",
"assets/assets/background_board/striped_paper.jpg": "97a9ff508cb8b33d9c61553ab33550b4",
"assets/assets/background_board/white_board.png": "69d0de7c3fed2215013f40da65204df6",
"assets/assets/icons/bg_flat.png": "7dba7547c5fb3c44aac19370f5630f43",
"assets/assets/icons/bg_flat_pressed.png": "16db21bd5a00e805c331a73bff151dd7",
"assets/assets/icons/clear_flat.png": "916f08bd1f1bec417debc023e5de00e8",
"assets/assets/icons/colored_eraser.png": "b0549cee6bf1bd512564059942fb4648",
"assets/assets/icons/color_picker.png": "ff51a5bd46b8f15cc05cfba219843d3b",
"assets/assets/icons/eraser_flat.png": "c4a28efdc704ba0e879250eac244d2b2",
"assets/assets/icons/list_flat.png": "692140aa0a8e84e9797f7956bacfc9fb",
"assets/assets/icons/pen_flat.png": "777db195c6e41cbf2b58b216da9308fd",
"assets/assets/icons/redo_flat.png": "a40dc02616085ab88d71d52c98d66032",
"assets/assets/icons/undo_flat.png": "77121ccca63bbe8ab028a300d1524e3f",
"assets/assets/logo/easy_touch_logo.png": "3a10d3fe42927e234c8a0060d3615e9d",
"assets/assets/logo/splash.jpg": "49f7edb9c129f564d5d6dbb70c2dede2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3ec0072e285c79ba225691d3bc5672d0",
"assets/NOTICES": "4a5933bcc22a804d6c76886ed49fed8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "01419876adddca9a705b178027f39931",
"canvaskit/canvaskit.wasm": "224531fa8a219a8a6525ea90bfb883e9",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "e7ca51a00317e84321ed47f5a18c1275",
"canvaskit/chromium/canvaskit.wasm": "0a56b0c592bf1bddd3e6c2d85551ceb6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "1a9aae4da4b9188c315c03d56a3a45f4",
"canvaskit/skwasm.wasm": "c92138c2247d77be3983c6d87973ccc6",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "430bbaf7cd06234024ba1340e932ce3f",
"canvaskit/skwasm_heavy.wasm": "93400cde1aad6370395b4a8d1b64ded4",
"favicon.png": "bf516f15fce1ac0bb0833f07fc23351c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c107c5c06827f7a3583928fe61e91f42",
"icons/Icon-192.png": "69a96ff9ddd14e877d0d4d798269f886",
"icons/Icon-512.png": "88291c1d41bdb184ee87cded1452f72b",
"icons/Icon-maskable-192.png": "69a96ff9ddd14e877d0d4d798269f886",
"icons/Icon-maskable-512.png": "88291c1d41bdb184ee87cded1452f72b",
"index.html": "69a34b4c71b06426d9cfa31a3077fb09",
"/": "69a34b4c71b06426d9cfa31a3077fb09",
"main.dart.js": "d4173781098da944da0cb6187f315826",
"manifest.json": "c19e59fdb2185f630b5f010e608512f8",
"splash/img/light-background.png": "7ef10337ac5bda750124c16a1f6bbc85",
"version.json": "36bc4e486a1e8fef169dc6e9fe869c4a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
