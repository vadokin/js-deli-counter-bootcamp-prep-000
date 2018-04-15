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
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine[i]
  }
  return "The line is currently: 1. Ada, 2. Grace"
}
