function selectRandomName(names) {
    if (names.length === 0) {
      return "The list of names is empty.";
    }
    const selectedName = names[Math.floor(Math.random()*names.length)];
  
    return `${selectedName} is going to buy lunch today.`;
  }

  
  
  