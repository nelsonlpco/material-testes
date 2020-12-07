import IFizzBuzzRule from './IFizzBuzzRules'

export default class BuzzFoo implements IFizzBuzzRule {
  private _buzzFoo = 'BuzzFoo'

  validate(value: number): boolean {
    return value % 10 === 0
  }
  perform(value: number): string {
    return this.validate(value) ? this._buzzFoo : ''
  }
}
