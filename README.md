# New Relic Voice Alerts with AWS Lambda, API Gateway, Amazon Connect & Serverless Framework

Ensure serverless framework is installed https://serverless.com/.

- Setup Amazon Connect with a basic contact flow that does text to speech with a user defined attribute of message
- See: https://www.linkedin.com/pulse/new-relic-voice-alerts-amazon-connect-serverless-framework-kav-pather/
- Update the region within serverless.yml if required
- Update index.js with numbers and message formatting required
- Run below:
```
npm install && sls deploy -v
```
- Copy webhook POST endpoint
- Setup webhook notification channel in New Relic

If you'd like to customise the messaging, you can find further details under: 
https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/customize-your-webhook-payload#variables
