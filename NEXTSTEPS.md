# Next Steps
* Add interactive features to make the app more dynamic
  * Add list / item deletion feature (trash icon button).
  * Add new list / new item insertion feature (plus icon button).
  * Add list / item update feature (pencil icon button).
    * Add alternative update feature by tapping on a list / item to edit it.
* Add animations or transitions for each user event (insert, update, delete).
  * For update, make it so that the item or list being edited appears highlighted.
* Considers implementing psuedo back-end vs real back-end.
  * Implement LocalStorage for caching and retrieving session data.
  * Implement a real back-end and persist to a database (Postgres).
* Layout issues
  * Fix bottom of page when items populate over 100vw.
  * Make everything mobile responsive.
  * Test out on different browsers.
  * Refactor the line margin / padding styling with cleaner code.
* Implement float alternative (Flexbox/Grid) for the red vertical lines and delete button style.
  * Otherwise, clear floats with the "clearfix" hack.
* Improve paper-like appearance by extending empty lines to end of page.
* Add tabs to view all, active or completed to-do items.
* Improve the top line to include the date on the right side.
* If task isn't complete, prompt before deletion.
* Figure out how to adjust placeholder so that its width autofits to the content.
* Refactor with CSS preprocessor (SASS).
* Refactor with CSS frameworks: Flexbox + Grid.
* Refactor with CSS frameworks: Materialize.
* Fix add list and add item so that they appear automatically.
* Move state lists to <Lists> instead of <App>, along with appropriate item and list methods: add / edit / delete.
* Add inputs checks for empty strings, duplicate entries.
* Add reset / clear button.
* Add up / down buttons to move lists and items.
* Improve hover margins and padding for new list insertion.