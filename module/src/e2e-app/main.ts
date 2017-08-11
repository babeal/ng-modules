import "core-js";
import "zone";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { E2eAppModule } from "./e2e-app/e2e-app.module";

platformBrowserDynamic().bootstrapModule(E2eAppModule);
