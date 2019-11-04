const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let res = record.find(function(record){return record.result === "W"})
  if(res){
    return res.year
  } else {
    return undefined
  }
}
