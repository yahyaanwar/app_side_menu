{
    'name': 'App Side Menu',
    'description': 'Add and customize apps side menu.',
    'category': 'Customizations',
    'website': 'yahyaanwar.github.io',
    'support': 'k3ic8zwya@mozmail.com',
    'version': '1.0',
    'license': 'OPL-1',
    'price': 0, 'currency': 'USD',
    'author': 'Yahya Anwar Ramadhan',
    'application': False,
    'installable': True,
    'auto_install': True,
    'depends': [
        'base',
        'web',
    ],
    'external_dependencies': {
        'python': [
        ],
        'bin': [
        ],
    },
    'data': [
    ],
    'demo': [
    ],
    'assets': {
        'web.assets_backend': [
            '/app_side_menu/static/src/components/*.*',
        ],
        'web.assets_backend_prod_only': [
            ('replace', 'web/static/src/main.js', '/app_side_menu/static/src/js/main.js'),
        ],
    },
    'images': [
    ],
    'post_load': 'apply_patch',
    'pre_init_hook': 'pre_init_hook',
    'post_init_hook': 'post_init_hook',
    'uninstall_hook': 'uninstall_hook',
}