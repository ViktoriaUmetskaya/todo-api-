export const ADD_NAME = 'ADD_NAME';
export const ADD_AGE = 'ADD_AGE';
export const ADD_GENDER = 'ADD_GENDER';
export const ADD_PASSWORD = 'ADD_PASSWORD';
export const ADD_EMAIL = 'ADD_EMAIL'

export const addUsername = username => {
  return {
    type: ADD_NAME,
    payload: username
  }
}

export const addEmail = email => {
  return {
    type: ADD_EMAIL,
    payload: email
  }
}

export const addPassword = password => {
  return {
    type: ADD_PASSWORD,
    payload: password
  }
}

export const addGender = gender => {
  return {
    type: ADD_GENDER,
    payload: gender
  }
}

export const addAge = age => {
  return {
    type: ADD_AGE,
    payload: age
  }
}
