import useFormValidation from "../../utils/useFormValidation"
import Input from "../Input/Input"
import PopupWithForm from "../PopupWithForm/PopupWithForm"

function AddPlacePopup ({ open, onClose, onAddPlace }) {
    const {values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation()

    function resetForPopup() {
        onClose()
        reset()
    }

    function handleSubmit (event) {
        event.preventDefault()
        onAddPlace({name: values.name, link: values.link}, reset)
    }

    return (
        <PopupWithForm                               //popup for a new place card adding
          name="popup_type_new-card"
          title="Новое место"
          formButton="Создать"
          open={open}
          onClose={resetForPopup} 
          isValid={isValid}
          onSubmit={handleSubmit}
        >
          <Input
            required=""
            className={`form__subtitle form__subtitle_card_title ${isInputValid.name === undefined || isInputValid.name ? '' : 'form__subtitle__invalid'}`}
            type="text"
            name="name"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            onChange={handleChange}
            value={values.name ? values.name : ''}
            error={errors.name}
            isInputValid={isInputValid.title}
          />

          <Input
            required=""
            className={`form__subtitle form__subtitle_card_image ${isInputValid.link === undefined || isInputValid.link ? '' : 'form__subtitle__invalid'}`}
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            onChange={handleChange}
            value={values.link ? values.link : ''}
            error={errors.link}
            isInputValid={isInputValid.link}
          />
        </PopupWithForm>
    )
}

export default AddPlacePopup