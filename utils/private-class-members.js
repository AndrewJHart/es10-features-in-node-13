/**
 * test class using the new private prop indicator #
 * to see if we can call the method when we instantiate
 * the class
 *
 * @note pulled from javascript.info but they have a typo as they
 *    applied the # private symbol to a method which does not work
 *    on their site or in node. I think the private symbol is only
 *    for props.
 */
export default class CoffeeMachine {
  #waterLimit = 200;  // private prop to hold max water limit
  #waterValue = Number.MAX_SAFE_INTEGER;
  
  /**
   * getter to get the water limit value
   * from the private property
   *
   * @returns {number}
   */
  get waterAmount() {
    return this.#waterValue;
  }
  
  /**
   * setter to set water value, log the value if
   * the value is within proper limit & ensure
   * its not too high by checking given value
   * against
   *
   * @param {number} value
   */
  set waterAmount(value) {
    value <= 0
      ? (() => { throw `Negative water` })()
      : value > this.#waterLimit
      ? (() => { throw `Water value is beyond threshold of 200` })()
      : this.#waterValue = value;
  
    console.log('water limit is fine', this.#waterValue);
  }
}

