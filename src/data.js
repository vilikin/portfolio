import React from 'react'

export const highlights = [
    {
        title: "TamkApp",
        description:
            <p>
                TamkApp is a native Android application built with Java.
                It brings everything that a student really needs into one app: school menu and timetable.
                The app also allows students to add important deadlines and exams on the timetable.
            </p>,
        image: require('./tamkapp.png'),
        links: [
            {
                title: "Download from Google Play",
                url: "https://play.google.com/store/apps/details?id=in.vilik.tamkapp&hl=fi"
            },/*
            {
                title: "View source on GitHub",
                url: "https://github.com/vilikin/tamkapp"
            }*/
        ]
    },
    {
        title: "SprintGame",
        description:
            <p>
                SprintGame is a sports tournament for classrooms.
                The teacher can start a tournament in a desktop browser and students can join in with their mobile devices.
                The game utilizes phone's accelerometer and gyroscope to track the students' movement.
                SprintGame started out as a school project for UKK-institute, and has now been downloaded over 25 000 times.
            </p>,
        image: require('./sprintgame.png'),
        links: [
            {
                title: "Visit website",
                url: "http://sprintgame.fi/"
            },/*
            {
                title: "Download from Google Play",
                url: "https://play.google.com/store/apps/details?id=com.ukkinstituutti.sprintgame&hl=fi"
            },
            {
                title: "Download from AppStore",
                url: "https://itunes.apple.com/us/app/sprintgame/id1148464080?ls=1&mt=8"
            }*/
        ]
    },
    {
        title: "TAMK Events",
        description:
            <p>
                TAMK Events is an event management system developed for the Students' Union of Tampere University of Applied Sciences.
                The system consists of a cross-platform mobile app, an event organizer interface and an API.
            </p>,
        image: require('./tamkevents.png'),
        links: [
            {
                title: "Visit website",
                url: "http://tamkevents.com/"
            },/*
            {
                title: "Download from Google Play",
                url: "https://play.google.com/store/apps/details?id=com.tamkevents.app"
            },
            {
                title: "Download from AppStore",
                url: "https://itunes.apple.com/us/app/tamk-events/id1200744947?mt=8"
            }*/
        ]
    }
];

export const expertise = [
    {
        title: "Mobile",
        description: <p>In the recent years I've fallen in love with mobile app development.
            I started out with hybrid apps using <strong>Ionic</strong> framework,
            then transitioned into <strong>native Android</strong> apps using <strong>Java</strong>,
            and now I've been tinkering with <strong>React Native</strong>,
            and so far it seems pretty awesome.</p>
    },
    {
        title: "Web",
        description: <p>I've been into web development since I was a kid.
            I started out with basic <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and PHP about 10 years ago.
            Those days are gone now, and nowadays I create my web apps mostly using <strong>React</strong> and <strong>Redux.</strong></p>
    },
    {
        title: "Backend",
        description: <p>When it comes to backend frameworks, my absolute favorite is <strong>Node.js</strong> with <strong>Express</strong>. I have quite a bit experience with <strong>REST</strong> APIs, but I've also started experimenting with <strong>GraphQL</strong> recently.</p>
    }
];