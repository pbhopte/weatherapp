
import { START_LOADING, STOP_LOADING } from "../utils/constants";

// Mark - This action starts the common spinner.
export function startSpinner() {
  return { type: START_LOADING };
}

// Mark - This action stops the common spinner.
export function stopSpinner() {
  return { type: STOP_LOADING };
}
