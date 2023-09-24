//your code here
function removeArticles(touristSpots) {
 const articlePattern = /^(a|an|the)\s/i;

  // Sort the array based on lexicographic order excluding articles
  touristSpots.sort((a, b) => {
    const nameA = a.replace(articlePattern, '').toLowerCase();
    const nameB = b.replace(articlePattern, '').toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Display the sorted tourist spots
  console.log(touristSpots);
}

sortAndDisplayTouristSpots(touristSpots);