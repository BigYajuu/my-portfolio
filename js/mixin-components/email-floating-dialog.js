import $ from "jquery";
import DialogElement from "./dialog-element";
import { Selectors } from "../constants";
export class EmailFloatingDialog extends DialogElement {
    constructor() {
        super(Selectors.EMAIL_FLOATING_DIALOG, 'Contact the Creator');
        this.RECIPIENT_EMAIL = `wuchuyue2014@gmail.com`;
    }
    build() {
        // Create input fields
        this.$dialogElement.append(this.buildTitle());
        this.$dialogElement.append(this.buildLeadingSubtitle());
        this.$dialogElement.append(this.buildForm());
        // Append the dialog element to the body
        $('body').append(this.$dialogElement);
    }
    buildLeadingSubtitle() {
        const self = this;
        const $subtitle = $('<div>');
        $subtitle.append($('<p>').text(`
            Thank you for your interest in reaching out! 
            You may use the following form to send a personal email to me 
            .`));
        $subtitle.append($('<p>').text(`
            A response should be expected shortly.`));
        const $lastParagraph = ($(`<p>`).text(`
            Alternatively, 
            you may send to ${self.RECIPIENT_EMAIL}
        `));
        const $icon = $('<div>').addClass(['text-icon-button', 'baseline', 'icon-copy']);
        $icon.on('click', function () {
            navigator.clipboard
                .writeText(self.RECIPIENT_EMAIL).then(() => { });
        });
        $lastParagraph.append($icon);
        $lastParagraph.append(`.`);
        $subtitle.append($lastParagraph);
        return $subtitle;
    }
    buildForm() {
        const self = this;
        const form = $(`<form>`).attr({
            action: `https://formspree.io/f/xyyqqypk`,
            method: "POST"
        });
        const nameGroup = $('<div>').addClass('input-group');
        const nameRequired = $('<span>').addClass('required').text('*');
        const nameLabel = $('<label>').append(nameRequired).append('Name or Organization');
        const nameInput = $('<input>').attr({ type: 'text', id: 'name', required: true });
        const emailGroup = $('<div>').addClass('input-group');
        const emailRequired = $('<span>').addClass('required').text('*');
        const emailLabel = $('<label>').append(emailRequired).append('Email');
        const emailInput = $('<input>').attr({ type: 'email', id: 'email', required: true });
        const messageGroup = $('<div>').addClass('input-group');
        const messageRequired = $('<span>').addClass('required').text('*');
        const messageLabel = $('<label>').append(messageRequired).append('Message');
        const messageInput = $('<textarea>').attr({ name: 'body', id: 'message', rows: '4', required: true });
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
