/**
 * E.g. for loading images it is required to get the project path.
 * This is possible with the following function
 */

import { error } from "@yobuligo/core.typescript";
import path from "path";

export const appPath = path.dirname(require.main?.filename ?? error());
