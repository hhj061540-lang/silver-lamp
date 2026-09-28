// lib/vpn-sdk.js

const axios = require('axios');

const BASE_URL = 'https://vpn-gateway-manager.onrender.com';

/**
 * Health check
 * GET /api/healthz
 */
async function healthCheck() {
  const response = await axios.get(`${BASE_URL}/api/healthz`);
  return response.data;
}

/**
 * Get countries list
 * GET /api/countries
 */
async function getCountries() {
  const response = await axios.get(`${BASE_URL}/api/countries`);
  return response.data;
}

/**
 * Get VPN status
 * GET /api/vpn/status
 */
async function getVpnStatus() {
  const response = await axios.get(`${BASE_URL}/api/vpn/status`);
  return response.data;
}

/**
 * Connect VPN to a specified country
 * POST /api/vpn/connect
 * @param {string} country - Country name to connect VPN to
 */
async function connectVpn(country) {
  const response = await axios.post(`${BASE_URL}/api/vpn/connect`, { country });
  return response.data;
}

/**
 * Disconnect VPN
 * POST /api/vpn/disconnect
 */
async function disconnectVpn() {
  const response = await axios.post(`${BASE_URL}/api/vpn/disconnect`);
  return response.data;
}

/**
 * Get VPN IP
 * GET /api/vpn/ip
 */
async function getVpnIp() {
  const response = await axios.get(`${BASE_URL}/api/vpn/ip`);
  return response.data;
}

/**
 * Run latency test with optional delay in milliseconds
 * GET /api/test?ms=
 * @param {number} ms - Delay in milliseconds (optional)
 */
async function runLatencyTest(ms = 0) {
  const url = ms > 0 ? `${BASE_URL}/api/test?ms=${ms}` : `${BASE_URL}/api/test`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  healthCheck,
  getCountries,
  getVpnStatus,
  connectVpn,
  disconnectVpn,
  getVpnIp,
  runLatencyTest,
};
