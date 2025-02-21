export const fetchData = async () => {
    const response = await fetch('https://api.awscc-mapua.com/data');
    return response.json();
  };