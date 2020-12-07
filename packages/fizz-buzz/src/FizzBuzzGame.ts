import FizzBuzzRulesContext from './FizzBuzzRules/FizzBuzzRulesContext'

export default class FizzBuzzGame {
  private fizzBuzzRulesContext = new FizzBuzzRulesContext()

  play(value: number): string {
    const rule = this.fizzBuzzRulesContext.findRule(value)

    return rule?.perform(value) || ''
  }
}
