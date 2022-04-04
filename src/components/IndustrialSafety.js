import IndustrialSafetyContent from './atoms/IndustrialSafetyContent';
import IndustrialSafetyHeader from './atoms/IndustrialSafetyHeader';
import '../static/css/IndustrialSafety.scss';

const IndustrialSafety = () => {
    return (
        <div className="IndustrialSafety">
            <div className="IndustrialSafety_inner">
                <IndustrialSafetyHeader />
                <IndustrialSafetyContent />
            </div>
        </div>
    );
};
export default IndustrialSafety;
