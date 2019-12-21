import TelemetryApp from './app/TelemetryApp.svelte';
import { authenticate } from './utils/auth';
import { store } from './app/state/store';

authenticate((token) => {
  store.setField('token', token);
});

const telemetryApp = new TelemetryApp({
  target: document.body,
});

export default telemetryApp;
