export default function(values) {
  const errors = {};
  const requiredFields = ["email", "password"];
  // console.log("values", values);
  // console.log("values in email", values.get('email'));
  // console.log("values in password", values.get('password'));
  requiredFields.forEach(field => {
    if (!values.get(field)) {
      errors[field] = "This field is required";
    }
  });
    if (values.get('email') && !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(values.get('email')))) {
      errors['email'] = "Invalid email address";
    }
  return errors;
}
