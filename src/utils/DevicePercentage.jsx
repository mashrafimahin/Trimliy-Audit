// main
export const DevicePercentage = (targetedObject, deviceType) => {
  // checkpoint
  if (!targetedObject) return "no items";
  // total count
  const totalCount = targetedObject.reduce((acc, curr) => acc + curr.count, 0);
  // sum
  const sum = targetedObject
    .filter((item) => item.device_type === deviceType)
    .reduce((acc, curr) => acc + curr.count, 0);

  return ((sum / totalCount) * 100).toFixed(0);
};
