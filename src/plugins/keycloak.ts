import type { VueKeycloakOptions } from '@dsb-norge/vue-keycloak-js'

export const keycloakOptions: VueKeycloakOptions = {
  init: {
    onLoad: 'login-required',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  },
  config: {
    url: 'http://localhost:9090',
    realm: 'ruest-team-manager',
    clientId: 'rtm',
  },
}
