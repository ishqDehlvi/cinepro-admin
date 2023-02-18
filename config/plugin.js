module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
      },
      settings: {
        defaultFrom: 'mailgun@sandbox4a8df07cb32743ae9edfd25f07098fe1.mailgun.org',
        defaultReplyTo: 'inzemamhaq05@gmail.com',
      },
    },
  },

});