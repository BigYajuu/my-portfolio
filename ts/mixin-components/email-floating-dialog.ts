import $ from "jquery";
import DialogElement from "./dialog-element";
import Veil from "./veil";
import { Selectors } from "../constants";

export class EmailFloatingDialog extends DialogElement {

    constructor() {
        super(Selectors.EMAIL_FLOATING_DIALOG, 'Contact the Creator');
    }

    public build(): void {
        // Form veil
        new Veil(this.selector).build();

        // Create input fields
        this.$dialogElement.append(this.buildTitle());
        this.$dialogElement.append(this.buildLeadingSubtitle());
        this.$dialogElement.append(this.buildForm());
        
        // Append the dialog element to the body
        $('body').append(this.$dialogElement);
    }

    private buildLeadingSubtitle(): JQuery<HTMLElement> {
        const subtitle = $('<div>')
        subtitle.append($('<p>').text(`
            Thank you for your interest in reaching out! 
            You may use the following form to send a personal email to me 
            (Fill in all fields).`));
        subtitle.append($('<p>').text(`
            A response should be expected shortly.`));
        subtitle.append($('<p>').text(`\
            Alternatively, 
            you may send to wuchuyue2014@gmail.com.`));
        return subtitle;
    }

    private buildForm(): JQuery<HTMLElement> {
        const self = this;
        const form = $('<form>').submit(function(e) {
            e.preventDefault();
            const name = $('#name').val();
            const email = $('#email').val();
            const message = $('#message').val();
      
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Items to send:', message);
      
            // Handle form submission or other actions here
            
            // Close the dialog after submission (you can modify this behavior)
            self.$dialogElement.remove();
        });
      
        const nameGroup = $('<div>').addClass('input-group');
        const nameLabel = $('<label>').text('Name or Organization');
        const nameInput = $('<input>').attr({ type: 'text', id: 'name', required: true });

        const emailGroup = $('<div>').addClass('input-group');
        const emailLabel = $('<label>').text('Email');
        const emailInput = $('<input>').attr({ type: 'email', id: 'email', required: true });

        const messageGroup = $('<div>').addClass('input-group');
        const messageLabel = $('<label>').text('Message');
        const messageInput = $('<textarea>').attr({ id: 'message', rows: '4', required: true });

        const submitRow = $('<div>').addClass('row-group');
        const submitButton = $('<input>').attr({ type: 'submit', value: 'Submit' });

        nameGroup.append(nameLabel, nameInput);
        emailGroup.append(emailLabel, emailInput);
        messageGroup.append(messageLabel, messageInput);
        submitRow.append(submitButton);
        
        const keyInfoRow = $('<div>').addClass('row-group');
        keyInfoRow.append(nameGroup, emailGroup); 

        form.append(keyInfoRow, messageGroup, submitRow);
        return form;
    }
}

export default EmailFloatingDialog;