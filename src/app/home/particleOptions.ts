import { IOptions, RecursivePartial } from '@tsparticles/engine';

const Options: RecursivePartial<IOptions> = {
    fullScreen: { enable: false},
    background: {
        color: {
            value: "none",
        }
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: "#0D0C22",
        },
        links: {
            color: "#0D0C22",
            distance: 100,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 300,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "square",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
};

export {Options};