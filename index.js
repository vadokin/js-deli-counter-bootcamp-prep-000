function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`
  }
}

function currentLine(katzDeliLine) {
  let string = ''
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0, len =  i < katzDeliLine.length; i < len; i++) {
      string += `${katzDeliLine[i] + 1}. ${katzDeliLine[i]}` + (i === katzDeliLine.length ? '' : ', ')
    }
  }
  return "The line is currently: " + string   // 1. Ada, 2. Grace"
}
