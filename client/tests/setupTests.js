// setupTests.js
import { config } from '@vue/test-utils';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice';

// Install PrimeVue globally in tests
config.global.plugins = [PrimeVue, ConfirmationService, ToastService];
