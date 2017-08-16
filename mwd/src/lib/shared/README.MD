This folder is for shared components directives and pipes to be reused in the feature module.
Other shared components should be imported and reexported here as well.

A special path @shared points to this directory and is used like this:

import { SharedModule } from "@shared/index";

Only import this module as it imports all other needed modules.  There is no reason to import modules everywhere.