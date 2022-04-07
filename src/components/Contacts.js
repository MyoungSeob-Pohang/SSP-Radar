import ContactsForm from './atoms/ContactsForm';
import '../static/css/Contacts.scss';

const Contacts = () => {
    return (
        <div className="Contacts">
            <div className="Contacts_inner">
                <div className="ContactsTitle">
                    <h3>Want more information?</h3>
                </div>
                <ContactsForm />
            </div>
        </div>
    );
};
export default Contacts;
