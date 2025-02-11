const defaultSettings = {
    theme: 'light',
    notifications: true,
    location: 'USA'
  };
  
  const userSettings = {
    theme: 'dark',
    location: 'Canada'
  };
  
  const finalSettings = {
    ...defaultSettings,
    ...userSettings
  };
  
  console.log(finalSettings);