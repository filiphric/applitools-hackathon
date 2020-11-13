
const browser = Cypress.env('version') === 'final' ? require('../fixtures/allBrowsers.json') : require('../fixtures/chrome.json')

it('Test 1 - Main page', () => {

  cy
    .eyesOpen({
      appName: 'AppliFashion',
      testName: 'Test 1',
      batchName: 'Testing Lifecycle',
      browser
    })

  cy
    .visit(Cypress.env('home'))

  cy
    .eyesCheckWindow('main page')

});

it('Test 2 - Filtered Product Grid', () => {

  cy
    .eyesOpen({
      appName: 'AppliFashion',
      testName: 'Test 2',
      batchName: 'Testing Lifecycle',
      browser
    })

  cy
    .visit(Cypress.env('home'))

  cy
    .get('#sidebar_filters')
    .contains('.filter_type', 'colors')
    .contains('label', 'Black')
    .find('input')
    .check()

  cy
    .contains('#filterBtn', 'Filter')
    .scrollIntoView()
    .click()

  cy
    .eyesCheckWindow({
      tag: 'filter by color',
      target: 'region',
      selector: {
        type: 'css',
        selector: '#product_grid'
      }
    })

});

it('Test 3 - Product Details', () => {

  cy
    .eyesOpen({
      appName: 'AppliFashion',
      batchName: 'Testing Lifecycle',
      testName: 'Test 3',
      browser
    })

  cy
    .visit(Cypress.env('detail'))

  cy
    .eyesCheckWindow('product details')

});

afterEach(() => {

  cy
    .eyesClose();

});