import axios from 'axios';

/**
 * Evaluates the domain on the registro.br website
 * @see https://registro.br/dominio/regras/
 * @param {string} domain - The domain to evaluate
 * @returns {Promise} - A promise that resolves to the availability of the domain
 * @throws {Error} - If the domain is not a string or is not in the correct format
 * @author Guilherme Neves <guilhermeasn@yahoo.com.br>
 */
export default function getRegistroBrAvail(domain) {
  if (typeof domain !== 'string' || !domain.length) {
    throw new Error('The domain must be a non-empty string');
  }

  if (!/^[A-Za-z0-9àáâãéêíóôõúüç.-]+$/.test(domain)) {
    throw new Error('The domain contains invalid characters');
  }

  const url = `https://registro.br/v2/ajax/avail/raw/${domain}`;

  return axios.get(url);
}
