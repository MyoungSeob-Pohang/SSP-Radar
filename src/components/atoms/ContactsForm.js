import TermsList from './TermsList';

const ContactsForm = () => {
    return (
        <div className="ContactsForm">
            <div className="ContactsForm_inner">
                <form className="Form" method="POST" action="#">
                    {/* Error */}
                    <div className="ErrorForm">
                        <div className="ValidationError">
                            <p>THERE ARE ERRORS IN FILLING OUT THE FORM</p>
                        </div>
                    </div>
                    {/* Form */}
                    <TermsList />
                </form>
            </div>
        </div>
    );
};
export default ContactsForm;
