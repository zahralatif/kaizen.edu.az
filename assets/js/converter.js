// Author (Custom array formatted package) Taleh Rzayev

function formatData(data) {
    const formattedData = [];
    for (const key in data) {
      const item = data[key];
      formattedData.push({
        Age: item.Age,
        ID: item.ID,
        Name: item.Name,
      });
    }
  
    return formattedData;
  }

  