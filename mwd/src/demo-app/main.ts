import "core-js";
import "zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DemoAppModule } from "./demo-app/demo-app.module";

platformBrowserDynamic().bootstrapModule(DemoAppModule);
