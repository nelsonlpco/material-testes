import IFizzBuzzRule from './IFizzBuzzRules'

export default class FizzBuzz implements IFizzBuzzRule {
  private _fizzBuzz = 'FizzBuzz'

  validate(value: number): boolean {
    return value % 15 === 0
  }
  perform(value: number): string {
    return this.validate(value) ? this._fizzBuzz : ''
  }
}
