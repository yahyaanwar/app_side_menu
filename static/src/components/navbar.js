/** @odoo-module **/

import { NavBar } from '@web/webclient/navbar/navbar';
import { useService } from '@web/core/utils/hooks';
import { patch } from 'web.utils';

patch(NavBar.prototype, 'command_navbar', {
    setup() {
        this._super();
        this.commandService = useService('command');
    },
    openMainPalette() {
        this.commandService.openMainPalette({
            bypassEditableProtection: true,
            global: true,
        });
    },
});
