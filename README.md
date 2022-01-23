# Mood Changer by MoodHackers

Webapp recommending you Youtube Videos based on your facial expression. Built in the scope of McGill's McHacks Hackathon - 9th Edition.

## Table of Contents
This serves as a general guide for navigating the repository! Feel free to PR if you see something missing.

- [Introduction](#introduction)
- [Use Cases](#use-cases)
- [Getting Setup](#getting-setup)
- [Disclaimers](#disclaimers)
- [Credits](#credits)
- License(#license)

## Introduction
What inspired us to build this application was spreading mental health awareness in relationship with the ongoing COVID-19 pandemic around the world. While it is easy to brush off signs of fatigue and emotional stress as just "being tired", often times, there is a deeper problem at the root of it. We designed this application to be as approachable and user-friendly as possible and allowed it to scale and rapidly change based on user trends.

## Use Cases
The project takes a scan of a face using a video stream and interprets that data by using machine learning and specially-trained models for emotion recognition. Receiving the facial data, the model is then able to process it and output the probability of a user's current emotion. After clicking the "Recommend Videos" button, the probability data is exported as an array and is processed internally, in order to determine the right query to send to the YouTube API. Once the query is sent and a response is received, the response is validated and the videos are served to the user. This process is scalable and the videos do change as newer ones get released and the YouTube algorithm serves new content. In short, this project is able to identify your emotions using face detection and suggest you videos based on how you feel.

## Getting Setup
This project assumes that you already have `Node ^14.17.6` & `npm ^6.14.15`. If you do not, please download them from [the official website](https://nodejs.org/en/download/)
Here are a couple of steps that you can follow to quickly get started with the project.

1. Clone the repository: `git clone https://github.com/mike1572/face.git`
2. Install the project dependencies by running `npm install` inside the cloned directory
3. Run `npm start` to start your own local development environment! Alternatively, here are some more commands available:

| Commands        | Output
|-----------------|-------------------------------------------------------------------|
| `npm run build` | Creates a production-ready build of the project, ready for deployment |
| `npm update`    | Updates dependencies that require newer versions to keep functioning correctly|
| `serve -s`      | You *must* install serve (`npm install -g serve`) before running this command. This command makes the project accessible both locally and on your network, in the event that you want to test it on different devices or share it with your entourage.|

There are many more commands, which you can familiarise yourself with on the [Create a React App](https://create-react-app.dev/) website, or in [npm's](https://docs.npmjs.com/) documentation.


## Disclaimers
This project is rate-limited by 100 API queries/day. You are also required to provide your own API key, as the file will not be provided. This is for privacy & security reasons.

## Credits
Many thanks to [Mike Dimitrov](https://github.com/mike1572), [Claude-Micael Guinan](https://github.com/lasource18), [Berke Altiparmak](https://github.com/BerkeAltiparmak) & [Ron Friedman](https://github.com/CryoTechnic) for their numerous contributions to the project, without whom, this would never have been completed. Thank You!

## License
This project or parts of its code are licensed under AGPLv3. Furthermore, npm libraries are subject to their own copyright.
