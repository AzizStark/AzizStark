import anime from "animejs";
import { YAnimAxis } from "../enums/anims";

export const smoothDropAnimate = (targets: string, delay: number, axis: YAnimAxis) => {
  anime({
    targets,
    duration: 1000,
    delay: anime.stagger(100, { start: delay }),
    opacity: [0, 1],
    translateY: axis === YAnimAxis.top ? ["50px", "0px"] : ["-50px", "0px"],
    easing: "easeInOutExpo",
  });
};

export const introLogoAnimate = (onFinish: () => void) => {
  const loader = anime.timeline({
    complete: () => onFinish(),
  });
  loader
    .add({
      targets: "#logo",
      scale: {
        value: 3,
        duration: 1400,
        easing: "easeInOutQuad",
      },
    })
    .add({
      targets: "#logo",
      scale: {
        value: 0,
        opacity: 0,
        duration: 400,
        easing: "easeInOutQuart",
      },
    });
};
