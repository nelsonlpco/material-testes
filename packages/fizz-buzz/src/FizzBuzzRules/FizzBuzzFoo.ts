import IFizzBuzzRule from './IFizzBuzzRules'

export default class FizzBuzzFoo implements IFizzBuzzRule {
  private _fizzBuzzFoo = 'FizzBuzzFoo'

  validate(value: number): boolean {
    return value % 30 === 0
  }
  perform(value: number): string {
    return this.validate(value) ? this._fizzBuzzFoo : ''
  }
}
