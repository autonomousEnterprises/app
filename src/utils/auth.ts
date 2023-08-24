import { createAuth0 } from '@auth0/auth0-vue';

const domain = 'dev-nx58zw3y1ngi0amd.eu.auth0.com';
const clientId = 'zq4a4Dzlbhj2X2Y4yHnvjcL38J3Qoxru';

export const auth0: any = createAuth0(
  {
    domain,
    clientId,
    authorizationParams: {
      redirect_uri: 'https://ecosis.app/' // window.location.origin
    },
    // useFormData: res?.useFormData || true
  },
  // { errorPath: '/error' }
);
