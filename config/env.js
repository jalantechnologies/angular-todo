module.exports = {
  public: {
    production: process.env.NODE_ENV === 'production',
    apiEndpoint: process.env.API_ENDPOINT,
    sentryDSN: process.env.SENTRY_DSN,
    serverLogUrl: process.env.SERVER_LOG_URL,
    intercomAppId: process.env.INTERCOM_APP_ID,
    mixpanelToken: process.env.MIXPANEL_TOKEN,
    gaTrackingId: process.env.GA_TRACKING_ID,
  },
  www: {
    port: process.env.PORT,
  },
};
