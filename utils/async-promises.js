
const settlePromises = async (promises) => {
  return await Promise
      .allSettled(promises)
      .then((responses) => responses)
      .then(data => console.log(data))
};

export default settlePromises;
