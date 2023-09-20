/** @odoo-module **/
import { useService } from "@web/core/utils/hooks";

const { Component, useState, useEffect } = owl;


export class SideMenu extends Component {
    static template = 'app_side_menu.SideMenu'

    setup() {
        super.setup.apply(this, ...arguments);
        this.menuService = useService("menu");
        this.cookiesService = useService("cookie");
        this.state = useState({
            currentAppID: false,
            expand: this.cookiesService.current.side_menu_is_expanded === "true",
        });

        useEffect(value => {
            this.cookiesService.setCookie('side_menu_is_expanded', value);
        }, () => [this.state.expand])
    }

    navigate(menu) {
        this.menuService.selectMenu(menu);
        this.state.currentAppID = menu.id;
    }

    toggleExpand() {
        this.state.expand = !this.state.expand;
    }

    getImgSrc(menu) {
        if (menu.webIconData) {
            const prefix = menu.webIconData.startsWith("P")
                ? "data:image/svg+xml;base64,"
                : "data:image/png;base64,";
            return menu.webIconData.startsWith("data:image")
                ? menu.webIconData
                : prefix + menu.webIconData.replace(/\s/g, "");
        } else {
            return menu.webIcon;
        }
    }
}
