
const Time = () => {
    const dateTime = luxon.DateTime.now()
        .setLocale(navigator.language)
        .toLocaleString({
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: 'false',
        });
  
    document.querySelector('.dateTime').textContent = dateTime;
}
  
export default Time;