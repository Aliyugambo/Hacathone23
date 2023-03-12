function calculateSeverityScore(priority, impact) {
    let severityScore = 0;
  
    if (priority === "High" && impact === "High") {
      severityScore = 10;
    } else if (priority === "High" && impact === "Medium") {
      severityScore = 8;
    } else if (priority === "High" && impact === "Low") {
      severityScore = 6;
    } else if (priority === "Medium" && impact === "High") {
      severityScore = 8;
    } else if (priority === "Medium" && impact === "Medium") {
      severityScore = 6;
    } else if (priority === "Medium" && impact === "Low") {
      severityScore = 4;
    } else if (priority === "Low" && impact === "High") {
      severityScore = 6;
    } else if (priority === "Low" && impact === "Medium") {
      severityScore = 4;
    } else if (priority === "Low" && impact === "Low") {
      severityScore = 2;
    }
  
    return severityScore;
  }
  
  
  module.exports = {
    calculateSeverityScore: calculateSeverityScore
  };