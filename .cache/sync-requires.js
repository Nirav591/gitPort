const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\app.js"))),
  "component---src-pages-auth-callback-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\auth\\callback.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\index.js"))),
  "component---src-pages-order-success-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\order-success.js"))),
  "component---src-pages-signin-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\pages\\signin.js"))),
  "component---src-templates-product-js": hot(preferDefault(require("I:\\Upwork\\Gatsby\\kerala-lottery-frontend\\src\\templates\\product.js")))
}

