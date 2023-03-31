import { removeObjectDynamic } from ".."

describe('test removeObjectDynamic', () => {
  test(`this payload should return { status: 'Work' }`, () => {
    const payload = {
        name: null,
        age: null,
        works: undefined,
        status: 'Work'
    }
    expect(removeObjectDynamic( payload )).toEqual({ status: 'Work' })
  })

  test('this payload should return empty', () => {
    const payload = {}
    expect(removeObjectDynamic(payload)).toEqual({})
  } )
})
