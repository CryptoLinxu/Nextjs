/*
 * @Description: 
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-09-09 18:40:47
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-09-09 18:40:49
 */
const https = require('https');
const { HttpsProxyAgent } = require('https-proxy-agent');

const agent = new HttpsProxyAgent('http://127.0.0.1:7899');

https.get('https://api.github.com/', {
  agent,
  headers: { 'User-Agent': 'Node.js' }
}, (res) => {
  console.log('statusCode:', res.statusCode);
  res.on('data', d => process.stdout.write(d));
}).on('error', (e) => {
  console.error('Error:', e);
});