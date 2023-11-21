import $ from "jquery";
import FloatingDialog from "./floating-dialog";
export class EmailFloatingDialog extends FloatingDialog {
    constructor() {
        super('email-floating-dialog');
    }
    build() {
        // Create input fields
        this.$dialogElement.append(this.buildForm());
        // Append the dialog element to the body
        $('body').append(this.$dialogElement);
    }
    extendDialogSize() {
    }
    buildForm() {
        const self = this;
        const form = $('<form>').submit(function (e) {
            e.preventDefault();
            const name = $('#name').val();
            const email = $('#email').val();
            const items = $('#items').val();
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Items to send:', items);
            // Handle form submission or other actions here
            // Close the dialog after submission (you can modify this behavior)
            self.$dialogElement.remove();
        });
        const nameGroup = $('<div>').addClass('input-group');
        const nameLabel = $('<label>').text('Name');
        const nameInput = $('<input>').attr({ type: 'text', id: 'name', required: true });
        const emailGroup = $('<div>').addClass('input-group');
        const emailLabel = $('<label>').text('Email');
        const emailInput = $('<input>').attr({ type: 'email', id: 'email', required: true });
        const contentGroup = $('<div>').addClass('input-group');
        const contentLabel = $('<label>').text('Content to send');
        const contentInput = $('<textarea>').attr({ id: 'content', rows: '4', required: true });
        const submitButton = $('<input>').attr({ type: 'submit', value: 'Submit' });
        nameGroup.append(nameLabel, nameInput);
        emailGroup.append(emailLabel, emailInput);
        contentGroup.append(contentLabel, contentInput);
        const rowGroup = $('<div>').addClass('row-group');
        rowGroup.append(nameGroup, emailGroup);
        form.append(rowGroup, contentGroup, submitButton);
        return form;
    }
    onShow() {
    }
    onHide() {
    }
    ;
}
export default EmailFloatingDialog;
