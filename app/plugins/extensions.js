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
    'decoratepc',
    'decoratepcTerm', // for backwards compatibility with pcterm
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
    'mappcTermState',
    'mapTermsState',
    'mapHeaderState',
    'mapNotificationsState',
    'mappcTermDispatch',
    'mapTermsDispatch',
    'mapHeaderDispatch',
    'mapNotificationsDispatch'
  ])
};
