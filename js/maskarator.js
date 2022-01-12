/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

const SUFFIX_LENGTH = 4

const maskify = (keyword) => {
  return keyword.length <= SUFFIX_LENGTH
    ? keyword
    : Array.from(keyword.substring(0, keyword.length - SUFFIX_LENGTH))
        .fill("#")
        .join("") + keyword.substring(keyword.length - SUFFIX_LENGTH)
}

exports.maskify = maskify
