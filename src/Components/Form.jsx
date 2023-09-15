import React, { useState } from 'react';
const Form = () => {

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
  });

  const validateForm = () => {
    let isValid = true;

    if (formData.fullName.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: 'El nombre completo debe tener al menos 5 caracteres',
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: '',
      }));
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'El correo electrónico no tiene un formato válido',
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log('Datos del formulario enviados:', formData);
      setSubmitSuccess(true);
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div >
      {submitSuccess ? (
        <div className="success-message">
          Gracias {formData.fullName}, te contactaremos lo antes posible vía correo electrónico.
        </div>
      ) : (
        <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              value={formData.fullName}
            />
            {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <button type="submit">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
