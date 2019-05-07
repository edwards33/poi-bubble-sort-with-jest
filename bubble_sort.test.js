const { bubbleSort } = require('./bubble_sort')

test('Bubble Sort', () => {
  const nums = [10, 8, 4, 3, 6, 2, 1, 9, 7, 5]
  expect(bubbleSort(nums)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})


