const score = function (studentScore, totalScore = 100) {
    const percentage = (studentScore / totalScore) * 100
    let letterGrade = ''
    if (percentage >= 90) {
        letterGrade = 'A'
    } else if (percentage >=80) {
        letterGrade = 'B'
    } else if (percentage >=70) {
        letterGrade = 'C'
    } else if (percentage >=60) {
        letterGrade = 'D'
    } else {
        letterGrade = "F"
    }
    return `You got a ${letterGrade} (${percentage}%)!`
}

const scoreText = score(15, 20)
console.log(scoreText)