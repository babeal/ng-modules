/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    "rxjs": "vendor/rxjs",
    "main": "main.js",

    // core-js and zone mappings
    "core-js": "vendor/core-js/client/core.js",
    "zone": "vendor/zone.js/dist/zone.js",

    // Angular specific mappings.
    "@angular/core": "vendor/@angular/core/bundles/core.umd.js",
    "@angular/common": "vendor/@angular/common/bundles/common.umd.js",
    "@angular/compiler": "vendor/@angular/compiler/bundles/compiler.umd.js",
    "@angular/http": "vendor/@angular/http/bundles/http.umd.js",
    "@angular/forms": "vendor/@angular/forms/bundles/forms.umd.js",
    "@angular/router": "vendor/@angular/router/bundles/router.umd.js",
    "@angular/platform-browser": "vendor/@angular/platform-browser/bundles/platform-browser.umd.js",
    "@angular/platform-browser-dynamic":
      "vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
  },
  packages: {
    // Thirdparty barrels.
    "rxjs": { main: "index" },
    "@slb-planck-ui/framework": {
      format: "cjs",
      main: "framework.umd.js"
    },
    // Set the default extension for the root package, because otherwise the demo-app can"t
    // be built within the production mode. Due to missing file extensions.
    ".": {
      defaultExtension: "js"
    }
  }
});
