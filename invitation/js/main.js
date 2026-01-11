import { initEnvelopeController } from './components/envelope.controller.js';
import { initCalendarDownload } from './components/calendar.ics.js';
import { bindContentFromConfig } from './components/content.bindings.js';

bindContentFromConfig();
initEnvelopeController();
initCalendarDownload();
