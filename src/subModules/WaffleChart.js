/* global d3 */
import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalWaffle from '../internal-charts/internalWaffle';
/**
Constructor subclass for Waffle Chart.
*/
export class WaffleChart extends ChartMain {
  constructor() {
    super();
    // overwrites default colors with ordinal scale
    this._squareWidth = 20;
    this._squareHeight = 5;
    this._squareValue = 0;
    this._colors = d3.scale.category10();
    this._gap = 1;
  }
  /**
  @private
  @method All of the below setters and getters are used for the chart properties instantiated in the contructor function above.
  */

  get getSquareValue() {
    return this._squareValue;
  }

  set setSquareValue(squareValue) {
    this._squareValue = squareValue;
  }

  get getSquareWidth() {
    return this._squareWidth;
  }

  get getSquareHeight() {
    return this._squareHeight;
  }

  get getSquareSize() {
    return this._squareHeight + this._squareWidth;
  }

  get getGapSize() {
    return this._gap;
  }

  /**
  @private
  @function build
  @description Builds up the bar chart
  */

  build() {
    Internal.selectElement(this);
    InternalWaffle.setColumns(this);
    InternalWaffle.processData(this);
    InternalWaffle.calculateSize(this);
    Internal.createSVGElement(this);
    InternalWaffle.buildChartComponents(this);
    InternalWaffle.styleChart(this);
    InternalWaffle.createLegend(this);
  }

  /**
  @private
  @function render
  */

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function updateChartComponents
  @description Calls InternalWaffle to update the waffle chart components
  */

  updateChartComponents() {
    InternalWaffle.updateChartComponents(this);
  }

  // TODO: Calculate change in squares for updateHeight and updateWidth
  updateHeight() {

  }

  updateWidth() {

  }

// TODO: Refactor into internal - used also in Scatter and possibly Donut
  set setColors(newColors) {
    const color = d3.scale.ordinal()
                    .domain(this.getColors.domain())
                    .range(newColors);
    this._colors = color;
  }

/**
@private
@function Updates color of waffle chart after initial render
@param {Array} colors
  @description Array of colors to update the chart to
*/
  updateColors() {
    InternalWaffle.updateColors(this);
  }
}
