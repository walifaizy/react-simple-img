if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import SimpleImgProvider from './simpleImgProvider';
import SimpleImg from './simpleImg';
import initSimpleImg from './initSimpleImg';

export {
  initSimpleImg,
  SimpleImgProvider,
  SimpleImg,
};
