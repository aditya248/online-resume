import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fps_limit: 60,
        particles: {
          color: { value: "#ffffff" },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: .3,
            width: 1
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 1,
            straight: false
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
              height: 100,
              replace_color: true,
              src: "images/github.svg",
              width: 100
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
          }
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: ""
        },
        retina_detect: true
      }}
    />
  );
}