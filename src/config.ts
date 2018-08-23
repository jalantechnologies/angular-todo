// typing implementation of CONFIG to make it work with AOT
declare const CONFIG: {
  production: boolean,
  apiEndpoint: string,
  sentryDSN: string,
  serverLogUrl: string,
  intercomAppId: string,
  mixpanelToken: string,
  gaTrackingId: string
};

export default CONFIG;
