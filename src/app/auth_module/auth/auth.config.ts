interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'sjiZ73lMbKQy8n961kN6FrLsJtbVz27D',
    domain: 'cloudlions.auth0.com',
    // You may need to change this!
    callbackURL: 'http://pi.dhmbackup.com:3000/'
};
