const SUFFIX_LENGTH = 4

const maskify = (keyword) => {
  return keyword.length <= SUFFIX_LENGTH
    ? keyword
    : Array.from(keyword.substring(0, keyword.length - SUFFIX_LENGTH))
        .fill("#")
        .join("") + keyword.substring(keyword.length - SUFFIX_LENGTH)
}

exports.maskify = maskify
