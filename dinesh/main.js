const severity = require('./severity');
const severityScore = severity.calculateSeverityScore("High", "Medium");
console.log(severityScore);