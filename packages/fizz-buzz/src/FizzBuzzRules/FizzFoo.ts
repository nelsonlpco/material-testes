import IFizzBuzzRule from './IFizzBuzzRules'

export default class FizzFoo implements IFizzBuzzRule {
  private _fizzFoo = 'FizzFoo'

  validate(value: number): boolean {
    return value % 6 === 0
  }
  perform(value: number): string {
    return this.validate(value) ? this._fizzFoo : ''
  }
}
