const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const submitContactForm = async ({ name, email, message }) => {
  if (!accessKey) {
    throw new Error('Missing Web3Forms access key. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
  }

  const payload = {
    access_key: accessKey,
    subject: 'New portfolio contact submission',
    from_name: 'Tharindu Portfolio',
    name,
    email,
    message,
    botcheck: '',
  };

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'Unable to send message right now.');
  }

  return data;
};
