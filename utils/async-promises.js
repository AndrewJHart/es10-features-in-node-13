
const settlePromises = async (promises) => {
  return await Promise
      .all(promises)
      .then((response) => response)
      .then(data => console.log(data))
};

export default settlePromises;
