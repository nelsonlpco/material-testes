export default interface IFizzBuzzRule {
  validate(value: number): boolean
  perform(value: number): string
}
