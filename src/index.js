// module.exports = {
//   add: (x, y) => x + y,
// };
import { version } from "../package.json";
export const add = (x, y) => x + y;
export default function () {
  console.log("version " + version);
}
