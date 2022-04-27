import {number} from "prop-types";

type Alias = { num: number }
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

aliased({num1: number})

interfaced()
