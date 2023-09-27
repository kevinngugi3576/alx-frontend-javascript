export default function divideFunction(denominator, numerator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}

