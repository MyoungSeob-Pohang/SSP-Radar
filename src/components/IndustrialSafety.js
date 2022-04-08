import IndustrialSafetyContent from './atoms/IndustrialSafetyContent';
import IndustrialSafetyHeader from './atoms/IndustrialSafetyHeader';
import '../static/css/IndustrialSafety.scss';

const IndustrialSafety = () => {
    return (
        <section className="IndustrialSafety">
            <div className="IndustrialSafety_inner">
                <IndustrialSafetyHeader />
                <IndustrialSafetyContent />
            </div>
        </section>
    );
};
export default IndustrialSafety;
