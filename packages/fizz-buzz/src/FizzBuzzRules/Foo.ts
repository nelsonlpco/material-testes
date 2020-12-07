import IFizzBuzzRule from './IFizzBuzzRules'

export default class Foo implements IFizzBuzzRule {
  private _foo = 'Foo'

  validate(value: number): boolean {
    return value % 2 === 0
  }
  perform(value: number): string {
    return this.validate(value) ? this._foo : ''
  }
}
