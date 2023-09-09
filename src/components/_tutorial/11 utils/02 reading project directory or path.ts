/**
 * E.g. for loading images it is required to get the project path.
 * This is possible with the following function
 * 
 * If this is not working perhaps the global variable "process" has any path information
 */

import { error } from "@yobuligo/core.typescript";
import path from "path";

export const appPath = path.dirname(require.main?.filename ?? error());
