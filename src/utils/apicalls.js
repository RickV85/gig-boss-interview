export async function fetchBandData() {
  try {
    const response = await fetch("/data/income_data_2023_24.json");
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
