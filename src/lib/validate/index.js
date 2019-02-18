export const required = (value) => (value ? undefined : 'Required');
export const email = (value) => {
  if (!value) {
    return 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Please enter a valid email address';
  }
};

export const password = (value) =>
  value ? undefined : 'Please enter your password';

export const reEnterPassword = (value) =>
  value ? undefined : 'Please re-enter your password';

export const date = (value) => (value ? undefined : 'Please enter date');
export const amount = (value) => (value ? undefined : 'Please enter amount');
export const particulars = (value) =>
  value ? undefined : 'Please enter particulars';
