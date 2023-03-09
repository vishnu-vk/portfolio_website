import emailjs from "@emailjs/browser";

const emailJSConfig = {
  serviceKey: import.meta.env.VITE_APP_SERVICE_ID,
  templateKey: import.meta.env.VITE_APP_TEMPLATE_ID,
  publickKey: import.meta.env.VITE_APP_PUBLIC_KEY,
  privateKey: import.meta.env.VITE_APP_PRIVATE_KEY,
};

export const sendEmail = (data) => {
  console.log(emailJSConfig)
  return emailjs.send(
    emailJSConfig.serviceKey,
    emailJSConfig.templateKey,
    data,
    emailJSConfig.publickKey
  );
};

export const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].ref.current.offsetTop - currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].ref.current.offsetTop - currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].ref.current.offsetTop - currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].ref.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};
