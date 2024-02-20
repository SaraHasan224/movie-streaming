const ROLLBAR_CONFIG = {
    accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: process.env.REACT_APP_ENVIRONMENT,
    },
};

export default ROLLBAR_CONFIG