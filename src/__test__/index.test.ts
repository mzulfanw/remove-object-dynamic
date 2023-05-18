import { removeObjectDeepDynamic, removeObjectDynamic } from "../main"

describe('test removeObjectDynamic', () => {
  test(`this payload should return { status: 'Work' }`, () => {
    const payload = {
      name: null,
      age: null,
      works: undefined,
      status: 'Work'
    }
    expect(removeObjectDynamic(payload)).toEqual({ status: 'Work' })
  })

  test('this payload should return empty', () => {
    const payload = {}
    expect(removeObjectDynamic(payload)).toEqual({})
  })
})

describe('test removeObjectDeepDynamic', () => {
  test(`This payload should return { fullName: 'sumanto', status: { work: true } }`, () => {
    const payload = {
      fullName: 'sumanto',
      status: {
        work: true,
        age: '',
        describe: null
      }
    }
    expect(removeObjectDeepDynamic(payload)).toEqual({ fullName: 'sumanto', status: { work: true } })
  })
})
