import {CheckAC, homeWorkReducer, SortAC} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortAC('up'))

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(initialState).not.toBe(newState)
    expect(initialState.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortAC('down'))

    console.log(newState)
    expect(newState[0].name).toBe('Кот')
    expect(initialState).not.toBe(newState)
    expect(initialState.length).toBe(newState.length)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAC(18))

    console.log(newState)
    expect(initialState).not.toBe(newState)
    expect(newState.length).toBe(4)
    expect(newState.find(f => f.name === 'Кот')).toBeUndefined()
    expect(newState.find(f => f.name === 'Коля')).toBeUndefined()
})
