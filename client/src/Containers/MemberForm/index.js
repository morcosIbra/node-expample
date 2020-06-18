import React from 'react';
import { connect } from 'react-redux';
import { setBooking, addMember } from '../../store/actions/booking';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { faUserPlus, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addPerson, inputText } from '../../utilies/constants';
import { validateField, validateOnSubmit } from '../../utilies/memberForm';

const MemberForm = ({ id, members, loading, setBooking, addMember, classes, ref }) => {
    const changeHandle = (type, value) => {
        const field = validateField(type, value)
        setBooking(`member.values.${type}`, field.value)
        setBooking(`member.validationMsgs.${type}`, field.validationMsg)
    }
    const submit = () => {
        if (!loading) {
            const field = validateOnSubmit(id.value, id.validationMsg, members)
            setBooking(`member.validationMsgs.id`, field.validationMsg)
            if (!field.validationMsg) {
                addMember(field.value)
                setBooking(`member.values.id`, '')
            }
        }

    }
    return (
        <div className={classes} ref={ref}>
            <Input {...id}
                onChange={(e) => changeHandle('id', e.target.value)}
                classes="mb-2">
                <FontAwesomeIcon icon={faIdCard} />
            </Input>
            <div className="text-left">
                <Button classes='btn-success btn-sm' label={addPerson} loading={loading}
                    onClick={submit} icon={faUserPlus} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    id: {
        value: state.booking.member.values.id,
        validationMsg: state.booking.member.validationMsgs.id,
        placeholder: inputText.id
    },
    members: state.booking.members.values,
    loading: state.booking.loading

})

const mapDispatchToProps = {
    setBooking, addMember
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberForm);