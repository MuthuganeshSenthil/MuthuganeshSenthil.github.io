// Add or remove tools as you pick them up. `confirmed: true` = actively used and comfortable with.
export const toolGroups = [
  { category: "Network Analysis", tools: [{ name: "Wireshark", confirmed: true }, { name: "Nmap", confirmed: false }, { name: "Netcat", confirmed: false }] },
  { category: "Linux / Security", tools: [{ name: "Kali Linux", confirmed: true }, { name: "Metasploit Framework", confirmed: false }] },
  { category: "Web Security", tools: [{ name: "Burp Suite", confirmed: false }, { name: "OWASP ZAP", confirmed: false }] },
  { category: "Cloud", tools: [{ name: "AWS EC2", confirmed: true }, { name: "AWS S3", confirmed: true }] },
  { category: "Development", tools: [{ name: "Python", confirmed: true }, { name: "Git", confirmed: true }, { name: "GitHub", confirmed: true }, { name: "VS Code", confirmed: true }, { name: "SQLite", confirmed: true }, { name: "MySQL", confirmed: true }] },
];