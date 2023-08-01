let score = function (studentScore, totalPossible = 100) {
    if (typeof studentScore !== 'number' || typeof totalPossible !== 'number') {
        throw Error('Argument must be a number')
    }

    let letterGrade = ''
    let percent = (studentScore / totalPossible) * 100

    if (percent > 90) {
        letterGrade = 'A'
    } else if (percent > 80) {
        letterGrade = 'B'
    }
    else if (percent > 70) {
        letterGrade = 'C'
    }
    else if (percent > 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
            } 
    return `You got a ${letterGrade} (${percent}%)!`
    }
    


try {
    let grade = score(5, 20)
    console.log(grade)
} catch (e) {
    console.log('Please enter numbers instead')
}
