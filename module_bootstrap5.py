from gdo.base.GDO_Module import GDO_Module
from gdo.core.GDT_Template import GDT_Template
from gdo.ui.GDT_Page import GDT_Page


class module_bootstrap5(GDO_Module):

    def gdo_dependencies(self) -> list:
        return [
            'jquery',
        ]

    def gdo_init(self):
        GDT_Template.register_theme('bs5', self.file_path('theme/'))

    def gdo_load_scripts(self, page: 'GDT_Page'):
        self.add_bower_js("bootstrap/dist/js/bootstrap.bundle.js")
        self.add_js('js/gdo-bootstrap5.js')
        self.add_bower_css("bootstrap/dist/css/bootstrap.css")
        self.add_css('css/gdo-bootstrap5.css')
