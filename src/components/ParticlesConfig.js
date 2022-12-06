import COLORS from "./colors";

let config = {
      num: [1, 5],
      rps: 10,
      radius: [5, 20],
      life: [1.5, 2],
      v: [1, 3],
      tha: [-40, 40],
      rotate: [0, 20],
      alpha: [0.1, 0],
      scale: [1, 2],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: [COLORS.primary_light, COLORS.secondary],
      cross: "bround", // cross or bround
      random: null,  // or null,
      g: 5,    // gravity
      f: [2, 5], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 0.5, particle.radius * 2);
          particle.color = '#90caf9'
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };

    export default config