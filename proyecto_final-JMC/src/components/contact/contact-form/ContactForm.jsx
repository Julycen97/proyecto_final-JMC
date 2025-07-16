import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'react-bootstrap';
import './../../../styles/components/contact/ContactForm.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("movarwpl");
    if (state.succeeded) {
        return <p className='gracias'>Gracias por contactarnos !!</p>;
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Mensaje
            </label>
            <textarea
                id="message"
                name="message"
                rows="4"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button type="submit" disabled={state.submitting}>
                Enviar
            </Button>
        </form>
    );
}

export default ContactForm;