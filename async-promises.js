
const settlePromises = async (promises) => {
  return await Promise
      .allSettled(promises)
      .finally((responses) => {
        console.log(responses);
      });
};

export default settlePromises;
