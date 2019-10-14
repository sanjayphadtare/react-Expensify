import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
  const state = expensesReducer(undefined, { action : '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = { 
    type: 'REMOVE_EXPENSE', 
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test ('shoudl add an expense ', () => {
  const expense = {
    id:'109',
    description: 'Laptop',
    note: '',
    createdAt: 2000,
    amount : 2890
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
  const amount = 55555
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state= expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount)
})

test('Should not edit an expense if ID not found', () => {
  const amount = 55555
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})