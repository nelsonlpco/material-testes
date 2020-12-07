import FizzBuzzGame from '../src/FizzBuzzGame'

test.each([
  ['3', 9, 'Fizz'],
  ['5', 25, 'Buzz'],
  ['3 e 5', 15, 'FizzBuzz'],
  ['2', 4, 'Foo'],
  ['2 e 3', 6, 'FizzFoo'],
  ['2 e 5', 10, 'BuzzFoo'],
  ['2', 30, 'FizzBuzzFoo'],
])(
  'Números divisiveis por %p como %p devem ser substituidos pela palavra %p',
  (description, value, expected) => {
    //Arrange
    const fizzBuzzGame = new FizzBuzzGame()

    //act
    const result = fizzBuzzGame.play(value)

    //assertions
    expect(result).toEqual(expected)
  }
)

test('Numeros não diviseis por 2, 3 e 5 devem ser retornados', () => {
  //Arrange
  const expectedValue = '7'
  const fizzBuzzGame = new FizzBuzzGame()

  //act
  const result = fizzBuzzGame.play(7)

  //assertions
  expect(expectedValue).toEqual(result)
})
