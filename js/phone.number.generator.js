const generate = (array) => {
  let phoneAsString = array.join("")
  return "(".concat(phoneAsString.slice(0, 3), ") ", phoneAsString.slice(3, 6), "-", phoneAsString.slice(6))
}

exports.generate = generate
