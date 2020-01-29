/* eslint-disable import/prefer-default-export */

const dataURL = '__BASE_DOMAIN__/api/v1/data/';
const randomProbeURL = '__BASE_DOMAIN__/api/v1/probes/random/';

export async function getRandomProbes() {
  const data = await fetch(randomProbeURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ n: 9 }),
  }).then((response) => response.json());
  return data;
}

export async function getProbeData(params, token) {
  const data = await fetch(dataURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ query: params }),
  }).then((response) => response.json());
  return data;
}
