/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const dashboards = {
  index: lazy(() => import('views/dashboards/Dashboards')),
  default: lazy(() => import('views/dashboards/DashboardsDefault')),
  visual: lazy(() => import('views/dashboards/DashboardsVisual')),
  analytic: lazy(() => import('views/dashboards/DashboardsAnalytic')),
};
const apps = {
  index: lazy(() => import('views/apps/Apps')),
  calendar: lazy(() => import('views/apps/calendar/Calendar')),
  chat: lazy(() => import('views/apps/chat/Chat')),
  contacts: lazy(() => import('views/apps/contacts/Contacts')),
  mailbox: lazy(() => import('views/apps/mailbox/Mailbox')),
  tasks: lazy(() => import('views/apps/tasks/Tasks')),
};
const pages = {
  index: lazy(() => import('views/pages/Pages')),
  authentication: {
    index: lazy(() => import('views/pages/authentication/Authentication')),
    login: lazy(() => import('views/pages/authentication/Login')),
    register: lazy(() => import('views/pages/authentication/Register')),
    forgotPassword: lazy(() => import('views/pages/authentication/ForgotPassword')),
    resetPassword: lazy(() => import('views/pages/authentication/ResetPassword')),
  },
  blog: {
    index: lazy(() => import('views/pages/blog/Blog')),
    home: lazy(() => import('views/pages/blog/BlogHome')),
    grid: lazy(() => import('views/pages/blog/BlogGrid')),
    list: lazy(() => import('views/pages/blog/BlogList')),
    detail: lazy(() => import('views/pages/blog/BlogDetail')),
  },
  miscellaneous: {
    index: lazy(() => import('views/pages/miscellaneous/Miscellaneous')),
    faq: lazy(() => import('views/pages/miscellaneous/Faq')),
    knowledgeBase: lazy(() => import('views/pages/miscellaneous/KnowledgeBase')),
    error: lazy(() => import('views/pages/miscellaneous/Error')),
    comingSoon: lazy(() => import('views/pages/miscellaneous/ComingSoon')),
    pricing: lazy(() => import('views/pages/miscellaneous/Pricing')),
    search: lazy(() => import('views/pages/miscellaneous/Search')),
    mailing: lazy(() => import('views/pages/miscellaneous/Mailing')),
    empty: lazy(() => import('views/pages/miscellaneous/Empty')),
  },
  portfolio: {
    index: lazy(() => import('views/pages/portfolio/Portfolio')),
    home:  lazy(() => import('views/pages/portfolio/PortfolioHome')),
    detail: lazy(() => import('views/pages/portfolio/PortfolioDetail')),
  },
  profile: {
    index: lazy(() => import('views/pages/profile/Profile')),
    standard: lazy(() => import('views/pages/profile/ProfileStandard')),
    settings: lazy(() => import('views/pages/profile/ProfileSettings')),
  },
};
const blocks = {
  index: lazy(() => import('views/blocks/Blocks')),
  cta: lazy(() => import('views/blocks/cta/Cta')),
  details: lazy(() => import('views/blocks/details/Details')),
  gallery: lazy(() => import('views/blocks/gallery/Gallery')),
  images: lazy(() => import('views/blocks/images/Images')),
  list: lazy(() => import('views/blocks/list/List')),
  stats: lazy(() => import('views/blocks/stats/Stats')),
  steps: lazy(() => import('views/blocks/steps/Steps')),
  tabularData: lazy(() => import('views/blocks/tabulardata/TabularData')),
  thumbnails: lazy(() => import('views/blocks/thumbnails/Thumbnails')),
};
const interfaces = {
  index: lazy(() => import('views/interface/Interface')),
  components: {
    index: lazy(() => import('views/interface/components/Components')),
    accordion: lazy(() => import('views/interface/components/Accordion')),
    alerts: lazy(() => import('views/interface/components/Alerts')),
    badge: lazy(() => import('views/interface/components/Badge')),
    breadcrumb: lazy(() => import('views/interface/components/Breadcrumb')),
    buttons: lazy(() => import('views/interface/components/Buttons')),
    buttonGroup: lazy(() => import('views/interface/components/ButtonGroup')),
    card: lazy(() => import('views/interface/components/Card')),
    closeButton: lazy(() => import('views/interface/components/CloseButton')),
    collapse: lazy(() => import('views/interface/components/Collapse')),
    dropdowns: lazy(() => import('views/interface/components/Dropdowns')),
    listGroup: lazy(() => import('views/interface/components/ListGroup')),
    modal: lazy(() => import('views/interface/components/Modal')),
    navs: lazy(() => import('views/interface/components/Navs')),
    offcanvas: lazy(() => import('views/interface/components/Offcanvas')),
    pagination: lazy(() => import('views/interface/components/Pagination')),
    popovers: lazy(() => import('views/interface/components/Popovers')),
    progress: lazy(() => import('views/interface/components/Progress')),
    spinners: lazy(() => import('views/interface/components/Spinners')),
    toasts: lazy(() => import('views/interface/components/Toasts')),
    tooltips: lazy(() => import('views/interface/components/Tooltips')),
  },
  forms: {
    index: lazy(() => import('views/interface/forms/Forms')),
    layouts: lazy(() => import('views/interface/forms/layouts/Layouts')),
    validation: lazy(() => import('views/interface/forms/validation/Validation')),
    wizard: lazy(() => import('views/interface/forms/wizard/Wizard')),
    inputGroup: lazy(() => import('views/interface/forms/input-group/InputGroup')),
    inputMask: lazy(() => import('views/interface/forms/input-mask/InputMask')),
    genericForms: lazy(() => import('views/interface/forms/generic-forms/GenericForms')),
    controls: {
      index: lazy(() => import('views/interface/forms/controls/Controls')),
      autocomplete: lazy(() => import('views/interface/forms/controls/autocomplete/Autocomplete')),
      checkboxRadio: lazy(() => import('views/interface/forms/controls/checkbox-radio/CheckboxRadio')),
      datePicker: lazy(() => import('views/interface/forms/controls/datepicker/Datepicker')),
      dropzone: lazy(() => import('views/interface/forms/controls/dropzone/Dropzone')),
      editor: lazy(() => import('views/interface/forms/controls/editor/Editor')),
      inputSpinner: lazy(() => import('views/interface/forms/controls/input-spinner/InputSpinner')),
      rating: lazy(() => import('views/interface/forms/controls/rating/Rating')),
      select: lazy(() => import('views/interface/forms/controls/select/Select')),
      slider: lazy(() => import('views/interface/forms/controls/slider/Slider')),
      tags: lazy(() => import('views/interface/forms/controls/tags/Tags')),
    },
  },
  plugins: {
    index: lazy(() => import('views/interface/plugins/Plugins')),
    carousel: lazy(() => import('views/interface/plugins/carousel/Carousel')),
    charts: lazy(() => import('views/interface/plugins/chart/Chart')),
    clamp: lazy(() => import('views/interface/plugins/clamp/Clamp')),
    contextMenu: lazy(() => import('views/interface/plugins/context-menu/ContextMenu')),
    datatables: {
      index: lazy(() => import('views/interface/plugins/datatables/Datatables')),
      editableRows: lazy(() => import('views/interface/plugins/datatables/EditableRows/EditableRows')),
      editableBoxed: lazy(() => import('views/interface/plugins/datatables/EditableBoxed/EditableBoxed')),
      serverSide: lazy(() => import('views/interface/plugins/datatables/ServerSide/ServerSide')),
      boxedVariations: lazy(() => import('views/interface/plugins/datatables/BoxedVariations/BoxedVariations')),
    },
    lightbox: lazy(() => import('views/interface/plugins/lightbox/Lightbox')),
    maps: lazy(() => import('views/interface/plugins/maps/Maps')),
    notification: lazy(() => import('views/interface/plugins/notification/Notification')),
    players: lazy(() => import('views/interface/plugins/player/Player')),
    progress: lazy(() => import('views/interface/plugins/progress/Progress')),
    scrollbar: lazy(() => import('views/interface/plugins/scrollbar/Scrollbar')),
    shortcuts: lazy(() => import('views/interface/plugins/shortcut/Shortcut')),
    sortable: lazy(() => import('views/interface/plugins/sortable/Sortable')),
  },
  content: {
    index: lazy(() => import('views/interface/content/Content')),
    icons: {
      index: lazy(() => import('views/interface/content/icons/Icons')),
      csLineIcons: lazy(() => import('views/interface/content/icons/CsLineIcons')),
      csInterfaceIcons: lazy(() => import('views/interface/content/icons/CsInterfaceIcons')),
      bootstrapIcons: lazy(() => import('views/interface/content/icons/BootstrapIcons')),
    },
    images: lazy(() => import('views/interface/content/Images')),
    tables: lazy(() => import('views/interface/content/Tables')),
    typography: lazy(() => import('views/interface/content/Typography')),
    menu: {
      index: lazy(() => import('views/interface/content/menu/Menu')),
      horizontal:  lazy(() => import('views/interface/content/menu/Horizontal')),
      vertical: lazy(() => import('views/interface/content/menu/Vertical')),
      verticalHidden: lazy(() => import('views/interface/content/menu/VerticalHidden')),
      verticalNoHidden: lazy(() => import('views/interface/content/menu/VerticalNoHidden')),
      mobileOnly: lazy(() => import('views/interface/content/menu/MobileOnly')),
      sidebar: lazy(() => import('views/interface/content/menu/Sidebar')),
    },
  },
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/apps/mailbox`,
    },
    // {
    //   path: `${appRoot}/dashboards`,
    //   component: dashboards.index,
    //   label: 'menu.dashboards',
    //   icon: 'home',
    //    subs: [
    //     { path: '/default', label: 'menu.default', component: dashboards.default },
    //     { path: '/visual', label: 'menu.visual', component: dashboards.visual },
    //     { path: '/analytic', label: 'menu.analytic', component: dashboards.analytic },
    //   ],
    // },
    {
      path: `${appRoot}/apps`,
      label: 'menu.apps',
      icon: 'screen',
      component: apps.index,
      subs: [
        // { path: '/calendar', label: 'menu.calendar', component: apps.calendar },
        // { path: '/chat', label: 'menu.chat', component: apps.chat },
        // { path: '/contacts', label: 'menu.contacts', component: apps.contacts },
        { path: '/mailbox', label: 'menu.flightsearch', component: apps.mailbox, icon: 'plane' },
        // { path: '/tasks', label: 'menu.tasks', component: apps.tasks },
      ],
    },
    // {
    //   path: `${appRoot}/pages`,
    //   label: 'menu.pages',
    //   icon: 'notebook-1',
    //   component: pages.index,
    //   subs: [
    //     {
    //       path: '/authentication',
    //       label: 'menu.authentication',
    //       component: pages.authentication.index,
    //       subs: [
    //         { path: '/login', label: 'menu.login', component: pages.authentication.login, noLayout: true },
    //         { path: '/register', label: 'menu.register', component: pages.authentication.register, noLayout: true },
    //         { path: '/forgot-password', label: 'menu.forgot-password', component: pages.authentication.forgotPassword, noLayout: true },
    //         { path: '/reset-password', label: 'menu.reset-password', component: pages.authentication.resetPassword, noLayout: true },
    //       ],
    //     },
    //     {
    //       path: '/blog',
    //       label: 'menu.blog',
    //       component: pages.blog.index,
    //       subs: [
    //         { path: '/home', label: 'menu.home', component: pages.blog.home },
    //         { path: '/grid', label: 'menu.grid', component: pages.blog.grid },
    //         { path: '/list', label: 'menu.list', component: pages.blog.list },
    //         { path: '/detail', label: 'menu.detail', component: pages.blog.detail },
    //       ],
    //     },
    //     {
    //       path: '/miscellaneous',
    //       label: 'menu.miscellaneous',
    //       component: pages.miscellaneous.index,
    //       subs: [
    //         { path: '/faq', label: 'menu.faq', component: pages.miscellaneous.faq },
    //         { path: '/knowledge-base', label: 'menu.knowledge-base', component: pages.miscellaneous.knowledgeBase },
    //         { path: '/error', label: 'menu.error', component: pages.miscellaneous.error, noLayout: true },
    //         { path: '/coming-soon', label: 'menu.coming-soon', component: pages.miscellaneous.comingSoon, noLayout: true },
    //         { path: '/pricing', label: 'menu.pricing', component: pages.miscellaneous.pricing },
    //         { path: '/search', label: 'menu.search', component: pages.miscellaneous.search },
    //         { path: '/mailing', label: 'menu.mailing', component: pages.miscellaneous.mailing },
    //         { path: '/empty', label: 'menu.empty', component: pages.miscellaneous.empty },
    //       ],
    //     },
    //     {
    //       path: '/portfolio',
    //       label: 'menu.portfolio',
    //       component: pages.portfolio.index,
    //       subs: [
    //         { path: '/home', label: 'menu.home', component: pages.portfolio.home },
    //         { path: '/detail', label: 'menu.detail', component: pages.portfolio.detail },
    //       ],
    //     },
    //     {
    //       path: '/profile',
    //       label: 'menu.profile',
    //       component: pages.profile.index,
    //       subs: [
    //         { path: '/standard', label: 'menu.standard', component: pages.profile.standard },
    //         { path: '/settings', label: 'menu.settings', component: pages.profile.settings },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   path: `${appRoot}/blocks`,
    //   label: 'menu.blocks',
    //   icon: 'grid-5',
    //   component: blocks.index,
    //   subs: [
    //     { path: '/cta', label: 'menu.cta', component: blocks.cta },
    //     { path: '/details', label: 'menu.details', component: blocks.details },
    //     { path: '/gallery', label: 'menu.gallery', component: blocks.gallery },
    //     { path: '/images', label: 'menu.images', component: blocks.images },
    //     { path: '/list', label: 'menu.list', component: blocks.list },
    //     { path: '/stats', label: 'menu.stats', component: blocks.stats },
    //     { path: '/steps', label: 'menu.steps', component: blocks.steps },
    //     { path: '/tabular-data', label: 'menu.tabular-data', component: blocks.tabularData },
    //     { path: '/thumbnails', label: 'menu.thumbnails', component: blocks.thumbnails },
    //   ],
    // },
    // {
    //   path: `${appRoot}/interface`,
    //   label: 'menu.interface',
    //   icon: 'pocket-knife',
    //   component: interfaces.index,
    //   roles: [USER_ROLE.Admin, USER_ROLE.Editor],
    //   mega: true,
    //   subs: [
    //     {
    //       path: '/components',
    //       label: 'menu.components',
    //       component: interfaces.components.index,
    //       subs: [
    //         { path: '/accordion', label: 'menu.accordion', component: interfaces.components.accordion },
    //         { path: '/alerts', label: 'menu.alerts', component: interfaces.components.alerts },
    //         { path: '/badge', label: 'menu.badge', component: interfaces.components.badge },
    //         { path: '/breadcrumb', label: 'menu.breadcrumb', component: interfaces.components.breadcrumb },
    //         { path: '/buttons', label: 'menu.buttons', component: interfaces.components.buttons },
    //         { path: '/button-group', label: 'menu.button-group', component: interfaces.components.buttonGroup },
    //         { path: '/card', label: 'menu.card', component: interfaces.components.card },
    //         { path: '/close-button', label: 'menu.close-button', component: interfaces.components.closeButton },
    //         { path: '/collapse', label: 'menu.collapse', component: interfaces.components.collapse },
    //         { path: '/dropdowns', label: 'menu.dropdowns', component: interfaces.components.dropdowns },
    //         { path: '/list-group', label: 'menu.list-group', component: interfaces.components.listGroup },
    //         { path: '/modal', label: 'menu.modal', component: interfaces.components.modal },
    //         { path: '/navs', label: 'menu.navs', component: interfaces.components.navs },
    //         { path: '/offcanvas', label: 'menu.offcanvas', component: interfaces.components.offcanvas },
    //         { path: '/pagination', label: 'menu.pagination', component: interfaces.components.pagination },
    //         { path: '/popovers', label: 'menu.popovers', component: interfaces.components.popovers },
    //         { path: '/progress', label: 'menu.progress', component: interfaces.components.progress },
    //         { path: '/spinners', label: 'menu.spinners', component: interfaces.components.spinners },
    //         { path: '/toasts', label: 'menu.toasts', component: interfaces.components.toasts },
    //         { path: '/tooltips', label: 'menu.tooltips', component: interfaces.components.tooltips },
    //       ],
    //     },
    //     {
    //       path: '/forms',
    //       label: 'menu.forms',
    //       component: interfaces.forms.index,
    //       subs: [
    //         { path: '/layouts', label: 'menu.layouts', component: interfaces.forms.layouts },
    //         { path: '/validation', label: 'menu.validation', component: interfaces.forms.validation },
    //         { path: '/wizard', label: 'menu.wizard', component: interfaces.forms.wizard },
    //         { path: '/input-group', label: 'menu.input-group', component: interfaces.forms.inputGroup },
    //         { path: '/input-mask', label: 'menu.input-mask', component: interfaces.forms.inputMask },
    //         { path: '/generic-forms', label: 'menu.generic-forms', component: interfaces.forms.genericForms },
    //         {
    //           path: '/controls',
    //           label: 'menu.controls',
    //           component: interfaces.forms.controls.index,
    //           subs: [
    //             {
    //               path: '/autocomplete',
    //               label: 'menu.autocomplete',
    //               component: interfaces.forms.controls.autocomplete,
    //             },
    //             {
    //               path: '/checkbox-radio',
    //               label: 'menu.checkbox-radio',
    //               component: interfaces.forms.controls.checkboxRadio,
    //             },
    //             { path: '/date-picker', label: 'menu.date-picker', component: interfaces.forms.controls.datePicker },
    //             { path: '/dropzone', label: 'menu.dropzone', component: interfaces.forms.controls.dropzone },
    //             { path: '/editor', label: 'menu.editor', component: interfaces.forms.controls.editor },
    //             {
    //               path: '/input-spinner',
    //               label: 'menu.input-spinner',
    //               component: interfaces.forms.controls.inputSpinner,
    //             },
    //             { path: '/rating', label: 'menu.rating', component: interfaces.forms.controls.rating },
    //             { path: '/select', label: 'menu.select', component: interfaces.forms.controls.select },
    //             { path: '/slider', label: 'menu.slider', component: interfaces.forms.controls.slider },
    //             { path: '/tags', label: 'menu.tags', component: interfaces.forms.controls.tags },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       path: '/plugins',
    //       label: 'menu.plugins',
    //       component: interfaces.plugins.index,
    //       subs: [
    //         { path: '/carousel', label: 'menu.carousel', component: interfaces.plugins.carousel },
    //         { path: '/charts', label: 'menu.charts', component: interfaces.plugins.charts },
    //         { path: '/clamp', label: 'menu.clamp', component: interfaces.plugins.clamp },
    //         { path: '/context-menu', label: 'menu.context-menu', component: interfaces.plugins.contextMenu },
    //         {
    //           path: '/datatables',
    //           label: 'menu.datatables',
    //           component: interfaces.plugins.datatables.index,
    //           subs: [
    //             {
    //               path: '/editable-rows',
    //               label: 'menu.editable-rows',
    //               component: interfaces.plugins.datatables.editableRows,
    //             },
    //             {
    //               path: '/editable-boxed',
    //               label: 'menu.editable-boxed',
    //               component: interfaces.plugins.datatables.editableBoxed,
    //             },
    //             {
    //               path: '/server-side',
    //               label: 'menu.server-side',
    //               component: interfaces.plugins.datatables.serverSide,
    //             },
    //             {
    //               path: '/boxed-variations',
    //               label: 'menu.boxed-variations',
    //               component: interfaces.plugins.datatables.boxedVariations,
    //             },
    //           ],
    //         },
    //         { path: '/lightbox', label: 'menu.lightbox', component: interfaces.plugins.lightbox },
    //         { path: '/maps', label: 'menu.maps', component: interfaces.plugins.maps },
    //         { path: '/notification', label: 'menu.notification', component: interfaces.plugins.notification },
    //         { path: '/players', label: 'menu.players', component: interfaces.plugins.players },
    //         { path: '/progress', label: 'menu.progress', component: interfaces.plugins.progress },
    //         { path: '/scrollbar', label: 'menu.scrollbar', component: interfaces.plugins.scrollbar },
    //         { path: '/shortcuts', label: 'menu.shortcuts', component: interfaces.plugins.shortcuts },
    //         { path: '/sortable', label: 'menu.sortable', component: interfaces.plugins.sortable },
    //       ],
    //     },
    //     {
    //       path: '/content',
    //       label: 'menu.content',
    //       component: interfaces.content.index,
    //       roles: [USER_ROLE.Admin, USER_ROLE.Editor],
    //       subs: [
    //         {
    //           path: '/icons',
    //           label: 'menu.icons',
    //           component: interfaces.content.icons.index,
    //           subs: [
    //             {
    //               path: '/cs-line-icons',
    //               label: 'menu.cs-line-icons',
    //               component: interfaces.content.icons.csLineIcons,
    //             },
    //             {
    //               path: '/cs-interface-icons',
    //               label: 'menu.cs-interface-icons',
    //               component: interfaces.content.icons.csInterfaceIcons,
    //             },
    //             {
    //               path: '/bootstrap-icons',
    //               label: 'menu.bootstrap-icons',
    //               component: interfaces.content.icons.bootstrapIcons,
    //             },
    //           ],
    //         },
    //         { path: '/images', label: 'menu.images', component: interfaces.content.images },
    //         { path: '/tables', label: 'menu.tables', component: interfaces.content.tables },
    //         { path: '/typography', label: 'menu.typography', component: interfaces.content.typography },
    //         {
    //           path: '/menu',
    //           label: 'menu.menu',
    //           component: interfaces.content.menu.index,
    //           subs: [
    //             { path: '/horizontal', label: 'menu.horizontal', component: interfaces.content.menu.horizontal },
    //             { path: '/vertical', label: 'menu.vertical', component: interfaces.content.menu.vertical },
    //             {
    //               path: '/vertical-hidden',
    //               label: 'menu.vertical-hidden',
    //               component: interfaces.content.menu.verticalHidden,
    //             },
    //             {
    //               path: '/vertical-no-hidden',
    //               label: 'menu.vertical-no-hidden',
    //               component: interfaces.content.menu.verticalNoHidden,
    //             },
    //             { path: '/mobile-only', label: 'menu.mobile-only', component: interfaces.content.menu.mobileOnly },
    //             { path: '/sidebar', label: 'menu.sidebar', component: interfaces.content.menu.sidebar },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
  sidebarItems: [
    { path: '#connections', label: 'menu.connections', icon: 'diagram-1', hideInRoute: true },
    { path: '#bookmarks', label: 'menu.bookmarks', icon: 'bookmark', hideInRoute: true },
    { path: '#requests', label: 'menu.requests', icon: 'diagram-2', hideInRoute: true },
    {
      path: '#account',
      label: 'menu.account',
      icon: 'user',
      hideInRoute: true,
      subs: [
        { path: '/settings', label: 'menu.settings', icon: 'gear', hideInRoute: true },
        { path: '/password', label: 'menu.password', icon: 'lock-off', hideInRoute: true },
        { path: '/devices', label: 'menu.devices', icon: 'mobile', hideInRoute: true },
      ],
    },
    {
      path: '#notifications',
      label: 'menu.notifications',
      icon: 'notification',
      hideInRoute: true,
      subs: [
        { path: '/email', label: 'menu.email', icon: 'email', hideInRoute: true },
        { path: '/sms', label: 'menu.sms', icon: 'message', hideInRoute: true },
      ],
    },
    {
      path: '#downloads',
      label: 'menu.downloads',
      icon: 'download',
      hideInRoute: true,
      subs: [
        { path: '/documents', label: 'menu.documents', icon: 'file-text', hideInRoute: true },
        { path: '/images', label: 'menu.images', icon: 'file-image', hideInRoute: true },
        { path: '/videos', label: 'menu.videos', icon: 'file-video', hideInRoute: true },
      ],
    },
  ],
};
export default routesAndMenuItems;
