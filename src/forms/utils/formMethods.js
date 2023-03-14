export const onReset = (inputsElArray, errorsElArray, handleReset) => {
  handleReset();
  inputsElArray.map(input => {
    input.value = "";
  });
  errorsElArray.map(err => {
    err.innerHTML = "";
  });
};

export const onInputChange = (
  event,
  errorEl,
  submitBtn,
  handleInputChange,
  handleDisableSubmitBtn
) => {
  const { error } = handleInputChange(event);
  errorEl.innerHTML = error;
  const isFormValidate = handleDisableSubmitBtn();
  if (!isFormValidate) return submitBtn.removeAttribute("disabled");
  submitBtn.setAttribute("disabled", "disabled");
};
