export const create = (model, selector, func) => new p5(_create(`assets/${ model }/model.obj`, selector, func), selector);

const _create = (model, selector, func) => {
  let m;
  return p => {
    p.setup = async () => {
      const { width, height } = document.getElementById(selector).getBoundingClientRect();
      p.createCanvas(width, height, p.WEBGL);

      m = await p.loadModel(model);
      p.noStroke();
    };
    p.draw = () => {
      p.clear();

      p.ambientLight(128);
      p.directionalLight(255, 255, 255, 0, 1, 0);

      func(p);

      p.model(m);
    };
  };
};
