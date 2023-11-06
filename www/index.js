import TicketScanService from './service.js';

import './web.js'

document.addEventListener('deviceready', () => {
    window.$scanditService = new TicketScanService();
}, false);

