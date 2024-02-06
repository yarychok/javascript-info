    // The "submit" event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScript.

    // The method "form.submit()" allows to initiate form sending from JavaScript. We can use it to dynamically create and send our own forms to server.

// I. Event: submit

    /** Two main ways to submit a form:
     * To click <input type="submit"> or <input type="image">
     * Press Enter on an input field.
     */

        // Both actions lead to submit event on the form. The handler can check the data, and if there are errors, show them and call "event.preventDefault()", then the form won't be sent to the server.

// II. Method: submit

    // To submit a form to the server manually, we can call "form.submit()".

        // Then the submit event is not generated. It is assumed that if the programmer calls "form.submit()", then the script already did all related processing.