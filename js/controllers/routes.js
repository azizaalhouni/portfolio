/* Configure our tow routes for this app with page.js
by registering each URL your app can handle, linked to a single controller function
to handle it:
*/
page('/',callArticleConstructor);
page('/about',callAboutConstructor);
function callArticleConstructor() {
  articleController.reveal();
}
function callAboutConstructor() {
  aboutController.reveal();
}
//This function we call to activate page.js
//Fire it off now, to execute it:
page();
