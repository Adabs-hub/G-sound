import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import { FiltersProvider } from './contexts/filters/filtersContext';

// A simple test function to verify other functions' behavior
function runTest(testName, func, input, expectedOutput) {
  try {
    const result = func(...input);
    const passed = JSON.stringify(result) === JSON.stringify(expectedOutput);

    console.log(`Test: ${testName}`);
    console.log(`Input: ${JSON.stringify(input)}`);
    console.log(`Expected: ${JSON.stringify(expectedOutput)}`);
    console.log(`Got: ${JSON.stringify(result)}`);
    console.log(passed ? "✅ Test Passed\n" : "❌ Test Failed\n");

    return passed;
  } catch (error) {
    console.log(`❌ Test '${testName}' threw an error: ${error.message}\n`);
    return false;
  }
}

const App = () => {
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header />
            <RouterRoutes />
            <Footer />
            <BackTop />
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
