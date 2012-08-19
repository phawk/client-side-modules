define(["libs/chai/chai", "libs/chai/sinon-chai", "../../views/action-dialog"], function(chai, sinonChai, ActionDialogView) {

    var should = chai.should();

    describe("Action Dialog View", function() {

        beforeEach(function() {
            this.actionDialog = new ActionDialogView({
                el: $('<div>')
              , heading: "Test Dialog"
              , message: "Are you sure?"
              , confirm_button: "OK"
              , cancel_button: "Nah mate!"
            });
        });

        afterEach(function() {
            this.actionDialog.destroy();
            this.actionDialog = null;
        });

        describe("when loaded", function() {

            it("should have a heading", function() {
                this.actionDialog.heading.should.equal("Test Dialog");
            });

            it("should have a message", function() {
                this.actionDialog.message.should.equal("Are you sure?");
            });

        });

        describe("when rendered", function() {

            beforeEach(function() {
                this.actionDialog.render();
            });

            it("should display the heading", function() {
                this.actionDialog.$("h3").text().should.equal("Test Dialog");
            });

            it("should display the message", function() {
                this.actionDialog.$("p.message").text().should.equal("Are you sure?");
            });

            it("should have a confirm button", function() {
                this.actionDialog.$("a.confirm").length.should.equal(1);
            });

            it("should have custom confirm button text", function() {
                this.actionDialog.$("a.confirm").text().should.equal("OK");
            });

            it("should have a cancel button", function() {
                this.actionDialog.$("a.cancel").length.should.equal(1);
            });

            it("should have custom cancel button text", function() {
                this.actionDialog.$("a.cancel").text().should.equal("Nah mate!");
            });

        });

        describe("when cancelled", function() {

            beforeEach(function() {
                this.actionDialog.render();
            });

            it("should close the dialog", function() {
                this.actionDialog.$(".cancel").click();
                this.actionDialog.$el.html().should.equal("");
            });

            it("should emit cancelled event", function() {
                var spy = sinon.spy();
                this.actionDialog.bind("cancelled", spy);
                this.actionDialog.$(".cancel").click();
                spy.calledOnce.should.be.ok;
            });

            it("should emit closed event", function() {
                var spy = sinon.spy();
                this.actionDialog.bind("closed", spy);
                this.actionDialog.$(".cancel").click();
                spy.calledOnce.should.be.ok;
            });

        });

        describe("when confirmed", function() {

            beforeEach(function() {
                this.actionDialog.render();
            });

            it("should close the dialog", function() {
                this.actionDialog.$(".confirm").click();
                this.actionDialog.$el.html().should.equal("");
            });

            it("should emit confirmed event", function() {
                var spy = sinon.spy();
                this.actionDialog.bind("confirmed", spy);
                this.actionDialog.$(".confirm").click();
                spy.calledOnce.should.be.ok;
            });

            it("should emit closed event", function() {
                var spy = sinon.spy();
                this.actionDialog.bind("closed", spy);
                this.actionDialog.$(".confirm").click();
                spy.calledOnce.should.be.ok;
            });

        });

    });

});