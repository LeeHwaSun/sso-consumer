const production = {
  API_SERVER : 'http://ssoapi.bnb.com:20200',
  SSO_SERVER : 'http://sso.bnb.com:20100',
  APP_TOKEN : '',
  JWT: {
    option : {
      algorithm : 'HS256',
      issuer: "op_instinct"
    },
    SECRET: 'd51530ff-39f0-455b-8874-e7eb61fcd955'
  }
}

const development = {
  API_SERVER : 'http://ssoapi.bnb.com:20200',
  SSO_SERVER : 'http://sso.bnb.com:20100',
  APP_TOKEN : 'lor4ql0lBxCRr50qvPVZSzXl2N3',
  JWT: {
    option : {
      algorithm : 'HS256',
      issuer: "op_instinct"
    },
    SECRET: 'd51530ff-39f0-455b-8874-e7eb61fcd955'
  }
}

const config = { production, development };

export default config[ process.env.NODE_ENV ];
