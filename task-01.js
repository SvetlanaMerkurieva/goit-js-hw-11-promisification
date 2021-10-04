const delay = ms => {
    // Твой код
    return new Promise (resolve => {
        setTimeout(() => resolve(), ms);
    });
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);

  delay(2000).then(logger);
  