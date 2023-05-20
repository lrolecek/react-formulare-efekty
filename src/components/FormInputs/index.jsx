import React, {useState} from 'react';

const AgeField = () => {
  const [age, setAge] = useState();

  return (
    <label>
      Zadej svůj věk {age}:
      <input
        type="text"
        value={age}
        onChange={(e) => { setAge(e.target.value)}}
      />
    </label>
  );
}

const Checkbox = () => {
  const [agreement, setAgreement] = useState(false);

  return (
    <label>
      Souhlasíš se vším {agreement ? 'ano' : 'ne'}:
      <input
        type="checkbox"
        checked={agreement}
        onChange={(e) => {setAgreement(e.target.checked)}}
      />
    </label>
  );
}

const FormInputs = () => {
  return (
    <>
      <h2>Formulářové prvky</h2>
      <AgeField />
      <Checkbox />
    </>
  );
}

export default FormInputs;