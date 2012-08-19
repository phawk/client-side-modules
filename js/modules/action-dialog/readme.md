# Action dialog

This is a simple dialog to pop up and let the user confirm or cancel a given action.

## Instantiating

    new ActionDialog({
        el: $(".dialog")
      , heading: "Action Dialog"
      , message: "Are you sure you want to close the fabolous action dialog?"
    }).render();

We load the module, pass it a DOM element to open in and give it a heading and message. Opionally button titles can be passed in as follows.

    new ActionDialog({
        el: $(".dialog")
      , heading: "Action Dialog"
      , message: "Are you sure you want to close the fabolous action dialog?"
      , confirm_button: "No probs mate"
      , cancel_button: "No chance son!"
    }).render();

## Events

When the user responds to the dialog it emits events:

* confirmed
* cancelled
* closed

You can bind to these events like so:

    var actionDialog = new ActionDialog({
        el: $(".dialog")
      , heading: "Action Dialog"
      , message: "Are you sure you want to close the fabolous action dialog?"
    }).render();

    actionDialog.bind("closed", function() {
        console.log("It's been closed down");
    });