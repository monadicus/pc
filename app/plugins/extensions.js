module.exports = {
  availableExtensions: new Set([
    'onApp',
    'onWindow',
    'onRendererWindow',
    'onUnload',
    'middleware',
    'reduceUI',
    'reduceSessions',
    'reduceTermGroups',
    'decorateBrowserOptions',
    'decorateMenu',
    'decorateTerm',
    'decorateProcli',
    'decorateProcliTerm', // for backwards compatibility with procliterm
    'decorateHeader',
    'decorateTerms',
    'decorateTab',
    'decorateNotification',
    'decorateNotifications',
    'decorateTabs',
    'decorateConfig',
    'decorateKeymaps',
    'decorateEnv',
    'decorateTermGroup',
    'decorateSplitPane',
    'getTermProps',
    'getTabProps',
    'getTabsProps',
    'getTermGroupProps',
    'mapProcliTermState',
    'mapTermsState',
    'mapHeaderState',
    'mapNotificationsState',
    'mapProcliTermDispatch',
    'mapTermsDispatch',
    'mapHeaderDispatch',
    'mapNotificationsDispatch'
  ])
};
