import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Particle.css"

export default function Particle() {

    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
        
    };



    return (
        <div className="particle">
            <Particles 
                id="tsparticles"
                init = {particlesInit}
                loaded = {particlesLoaded}

                options={
                    {name: "Link Triangles",
                    fullScreen: {
                        enable: true,
                        zIndex: -1
                    },
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                            },
                        },
                        color: {
                            value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 20,
                                sync: true,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 3,
                            },
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "random",
                            opacity: 0.4,
                            width: 1,
                            triangles: {
                                enable: true,
                                color: "#ffffff",
                                opacity: 0.1,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "bottom-right",
                            random: true,
                            out_mode: "out",
                            attract:{
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onClick: {
                                enable: false,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                links: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 0.8,
                            },
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                    },
                    background: {
                        color: "#00111d",
                    }}
                }
            />
        </div>
    )
}
